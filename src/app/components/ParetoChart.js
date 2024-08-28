'use client'
import { Bar } from 'react-chartjs-2';
import { useFormContext } from "@/app/context/FormContext";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,      // Asegúrate de registrar LineElement
  PointElement,     // Registra el PointElement
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registro de componentes de Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const ParetoChart = () => {
    const { formData } = useFormContext();
    const dataPoints = formData.dataPoints;
  
    // Ordena los puntos de datos en orden descendente
    const sortedDataPoints = [...dataPoints].sort((a, b) => b.value - a.value);
  
    // Obtén descripciones y valores
    const labels = sortedDataPoints.map(point => point.description);
    const values = sortedDataPoints.map(point => parseFloat(point.value));
  
    // Calcula el porcentaje acumulativo
    const total = values.reduce((acc, val) => acc + val, 0);
    const cumulativePercentages = values.reduce((acc, val, index) => {
      const cumulativeSum = acc.length ? acc[index - 1] : 0;
      acc.push(((cumulativeSum + val) / total) * 100);
      return acc;
    }, []);
  
    // Configura los datos para el gráfico
    const data = {
      labels,
      datasets: [
        {
          type: 'bar',
          label: 'Valores',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          yAxisID: 'y',
        },
        {
          type: 'line',
          label: 'Porcentaje acumulado',
          data: cumulativePercentages,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          yAxisID: 'y1',
        },
      ],
    };
  
    // Opciones del gráfico
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Diagrama de Pareto',
        },
      },
      scales: {
        y: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Valores',
          },
        },
        y1: {
          type: 'linear',
          position: 'right',
          title: {
            display: true,
            text: 'Porcentaje acumulado (%)',
          },
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    };
  
    return <Bar data={data} options={options} />;
  };
  
  export default ParetoChart;
  