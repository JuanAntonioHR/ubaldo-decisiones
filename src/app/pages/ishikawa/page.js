'use client'
import { useFormContext } from "@/app/context/FormContext";
import NavBar from '@/app/components/NavBar';
import { Container } from 'react-bootstrap';

function Ishikawa() {
    const { formData } = useFormContext();

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
          <h2 className="card-title">Diagrama de Ishikawa</h2>
          <p className="card-text">El diagrama de Ishikawa es una herramienta de análisis que permite identificar las causas de un problema.</p>
        </Container>
      </>
    );
}

export default Ishikawa;