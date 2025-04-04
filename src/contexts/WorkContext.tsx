import { createContext, useContext, useState, ReactNode } from "react";

//type defination
interface WorkExperience {
  role: string;
  companyName: string;
  startDate: string;
  endDate: string;
  achievements: string;
}

// context
const WorkExperienceContext = createContext<
  { workExperience: WorkExperience; setWorkExperience: (data: WorkExperience) => void } | undefined
>(undefined);

// provider component
export function WorkExperienceProvider({ children }: { children: ReactNode }) {
  const [workExperience, setWorkExperience] = useState<WorkExperience>({
    role: "",
    companyName: "",
    startDate: "",
    endDate: "",
    achievements: "",
  });

  return (
    <WorkExperienceContext.Provider value={{ workExperience, setWorkExperience }}>
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