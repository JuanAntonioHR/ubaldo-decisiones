'use client'
import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    title: 'Hola',
    description: 'Hola',
    objective: 'Conquistar el mundo',
    strengths: ['Yo', 'Tu', 'El', 'Nosotros', 'Ustedes', 'Ellos'],
    weaknesses: ['embeces', 'si', 'no', 'tal vez', 'quizas', 'quien sabe'],
    opportunities: ['El renacer de un nuevo mundo'],
    threats: ['El fin del mundo'],
    stakeholders: ['Yo', 'Tu', 'El', 'Nosotros', 'Ustedes', 'Ellos'],
    owners: ['tu mamá', 'tu papá', 'tu hermano', 'tu hermana', 'tu abuelo', 'tu abuela'],
    causes: [['Falta de camiones', 'Maquinaria'], ['Falta de personal', 'Mano de obra'], ['Falta de material', 'Materiales'], ['Errores en el proceso', 'Método']],
    dataPoints: [{ description: 'Producción', value: '10' }, { description: 'Esfuerzo', value: '20' }, { description: 'Datos', value: '50' }],
    evaluationOptions: ['Hacer mejor las cosas', 'Hacer peor las cosas', 'Hacer las cosas igual'],
    feelings: ['chillacion', 'miedo', 'alegria', 'tristeza'],
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
