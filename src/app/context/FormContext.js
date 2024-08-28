'use client'
import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    objective: '',
    strengths: [''],
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
