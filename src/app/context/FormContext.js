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
    objective: '',
    strengths: ['Yo', 'Tu', 'El', 'Nosotros', 'Ustedes', 'Ellos'],
    weaknesses: [''],
    opportunities: [''],
    threats: [''],
    stakeholders: [''],
    owners: [''],
    causes: [''],
    dataPoints: [{ description: '', value: '' }],
    evaluationOptions: [''],
    feelings: [''],
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
