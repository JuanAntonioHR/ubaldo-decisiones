'use client'
import dynamic from 'next/dynamic';
const MermaidChart = dynamic(() => import('@/app/components/MermaidChart'), { ssr: false });

import { useFormContext } from "@/app/context/FormContext";
import NavBar from '@/app/components/NavBar';
import { Container } from 'react-bootstrap';

function Ishikawa() {
    const { formData } = useFormContext();
    
    const chart = `
        graph TB
            Problem[Problema Principal]
            subgraph Causas
                ${formData.causes.map((cause) => (
                    cause[1] ? `${cause[1].substring(0, 3)}[${cause[1]}] --> Problem` : ''
                )).join('')}
                Med[Medición] --> Problem
                Medi[Medio Ambiente] --> Problem
            end

            ${formData.causes.map((cause, idx) => (
                cause[1] ? `${cause[1].substring(0, 3)} --> ${cause[1].substring(0, 3)}${idx}[${cause[0]}]` : ''
            )).join('')}
            
            ${formData.dataPoints.map((dataPoint, idx) => (
                `Med --> Med${idx}[${dataPoint.description}]`
            )).join('')}

            ${formData.opportunities.map((opportunity, idx) => (
                `Medi --> Medi${idx}[${opportunity}]`
            )).join('')}
            
            ${formData.threats.map((threat, idx) => (
                `Medi --> Medi0${idx}[${threat}]`
            )).join('')}
    `;

    return (
      <>
        <NavBar />
        <Container className="py-4">
            <div className="bg-secondary mb-5 py-4 text-center">
                <div className="card-body">
                    <h1 className='fw-bolder'>Diagrama de Ishikawa</h1>
                    <p className="m-0">
                        {formData.title}
                    </p>
                </div>
            </div>
            <MermaidChart chart={chart} />
        </Container>
      </>
    );
}

export default Ishikawa;