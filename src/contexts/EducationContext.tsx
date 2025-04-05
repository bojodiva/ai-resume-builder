import { createContext, useContext, useState, ReactNode } from "react";

//type defination
interface EducationExperience {
  shoolName: string;
  degree: string;
  startDate: string;
  endDate: string;
  course: string;
}

interface EducationExperienceContextType {
    educationExperience: EducationExperience[];
    addEducationExperience: (data: EducationExperience) => void;
    removeEducationExperience: (index: number) => void;
  }

// context
const EducationExperienceContext = createContext<EducationExperienceContextType| undefined>(undefined);

// provider component
export function EducationExperienceProvider({ children }: { children: ReactNode }) {
  const [educationExperience, setEducationExperience] = useState<EducationExperience[]>([]);

  const addEducationExperience = (data: EducationExperience) => {
    setEducationExperience(prev => [...prev, data]);
  };

  const removeEducationExperience = (index: number) => {
    setEducationExperience(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <EducationExperienceContext.Provider value={{ educationExperience, addEducationExperience, removeEducationExperience }}>
      {children}
    </EducationExperienceContext.Provider>
  );
}


export function useEducationExperience() {
  const context = useContext(EducationExperienceContext);
  if (!context) {
    throw new Error("useEducationExperience must be used within a EducationExperienceProvider");
  }
  return context;
}