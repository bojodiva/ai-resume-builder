import { createContext, useContext, useState, ReactNode } from "react";

//type defination
interface Education {
  schoolName: string;
  degree: string;
  startDate: string;
  endDate: string;
  course: string;
}

interface EducationContextType {
    education: Education[];
    addEducation: (data: Education) => void;
    removeEducation: (index: number) => void;
  }

// context
const EducationContext = createContext<EducationContextType| undefined>(undefined);

// provider component
export function EducationProvider({ children }: { children: ReactNode }) {
  const [education, setEducation] = useState<Education[]>([]);

  const addEducation = (data: Education) => {
    setEducation(prev => [...prev, data]);
  };

  const removeEducation = (index: number) => {
    setEducation(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <EducationContext.Provider value={{ education, addEducation, removeEducation }}>
      {children}
    </EducationContext.Provider>
  );
}


export function useEducation() {
  const context = useContext(EducationContext);
  if (!context) {
    throw new Error("useEducation must be used within a EducationProvider");
  }
  return context;
}