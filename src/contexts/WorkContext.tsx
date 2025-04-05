import { createContext, useContext, useState, ReactNode } from "react";

//type defination
interface WorkExperience {
  role: string;
  companyName: string;
  startDate: string;
  endDate: string;
  achievements: string;
}

interface WorkExperienceContextType {
    workExperience: WorkExperience[];
    addWorkExperience: (data: WorkExperience) => void;
    removeWorkExperience: (index: number) => void;
  }

// context
const WorkExperienceContext = createContext<WorkExperienceContextType| undefined>(undefined);

// provider component
export function WorkExperienceProvider({ children }: { children: ReactNode }) {
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([]);

  const addWorkExperience = (data: WorkExperience) => {
    setWorkExperience(prev => [...prev, data]);
  };

  const removeWorkExperience = (index: number) => {
    setWorkExperience(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <WorkExperienceContext.Provider value={{ workExperience, addWorkExperience, removeWorkExperience }}>
      {children}
    </WorkExperienceContext.Provider>
  );
}


export function useWorkExperience() {
  const context = useContext(WorkExperienceContext);
  if (!context) {
    throw new Error("useWorkExperience must be used within a WorkExperienceProvider");
  }
  return context;
}