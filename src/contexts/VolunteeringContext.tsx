import { createContext, useContext, useState, ReactNode } from "react";

//type defination
interface VolunteeringExperience {
  role: string;
  organisationName: string;
  startDate: string;
  endDate: string;
  experience: string;
}

// context
const VolunteeringExperienceContext = createContext<
  { volunteeringExperience: VolunteeringExperience; setVolunteeringExperience: (data: VolunteeringExperience) => void } | undefined
>(undefined);

// provider component
export function VolunteeringExperienceProvider({ children }: { children: ReactNode }) {
  const [volunteeringExperience, setVolunteeringExperience] = useState<VolunteeringExperience>({
    role: "",
    organisationName: "",
    startDate: "",
    endDate: "",
    experience: "",
  });

  return (
    <VolunteeringExperienceContext.Provider value={{ volunteeringExperience, setVolunteeringExperience }}>
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