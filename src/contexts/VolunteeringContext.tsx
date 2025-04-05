import { createContext, useContext, useState, ReactNode } from "react";

//type defination
interface VolunteeringExperience {
  role: string;
  organisationName: string;
  startDate: string;
  endDate: string;
  experience: string;
}

interface VolunteeringExperienceContextType {
    volunteeringExperience: VolunteeringExperience[];
    addVolunteeringExperience: (data: VolunteeringExperience) => void;
    removeVolunteeringExperience: (index: number) => void;
  }

// context
const VolunteeringExperienceContext = createContext<VolunteeringExperienceContextType | undefined>(undefined);

// provider component
export function VolunteeringExperienceProvider({ children }: { children: ReactNode }) {
  const [volunteeringExperience, setVolunteeringExperience] = useState<VolunteeringExperience[]>([]);

  const addVolunteeringExperience = (data: VolunteeringExperience) => {
    setVolunteeringExperience(prev => [...prev, data]);
  };

  const removeVolunteeringExperience = (index: number) => {
    setVolunteeringExperience(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <VolunteeringExperienceContext.Provider value={{ volunteeringExperience, addVolunteeringExperience, removeVolunteeringExperience }}>
      {children}
    </VolunteeringExperienceContext.Provider>
  );
}


export function useVolunteeringExperience() {
  const context = useContext(VolunteeringExperienceContext);
  if (!context) {
    throw new Error("useVolunteeringExperience must be used within a VolunteeringExperienceProvider");
  }
  return context;
}