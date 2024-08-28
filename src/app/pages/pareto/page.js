'use client'
import { useFormContext } from "@/app/context/FormContext";
import NavBar from '@/app/components/NavBar';
import { Container } from 'react-bootstrap';
import ParetoChart from "@/app/components/ParetoChart";

function Pareto() {
    const { formData } = useFormContext();

    return (
      <>
        <NavBar />
        <Container className="py-4">
            <div className="bg-secondary mb-5 py-4 text-center">
                <div className="card-body">
                    <h1 className='fw-bolder'>Diagrama de Pareto</h1>
                    <p className="m-0">
                        {formData.title}
                    </p>
                </div>
            </div>
            <ParetoChart />
        </Container>
      </>
    );
}

export default Pareto;