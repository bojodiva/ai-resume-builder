import { createContext, useContext, useState, ReactNode } from "react";

//type defination
interface LeadershipExperience {
  role: string;
  organisationName: string;
  startDate: string;
  endDate: string;
  experience: string;
}

// context
const LeadershipExperienceContext = createContext<
  { leadershipExperience: LeadershipExperience; setLeadershipExperience: (data: LeadershipExperience) => void } | undefined
>(undefined);

// provider component
export function LeadershipExperienceProvider({ children }: { children: ReactNode }) {
  const [leadershipExperience, setLeadershipExperience] = useState<LeadershipExperience>({
    role: "",
    organisationName: "",
    startDate: "",
    endDate: "",
    experience: "",
  });

  return (
    <LeadershipExperienceContext.Provider value={{ leadershipExperience, setLeadershipExperience }}>
      {children}
    </LeadershipExperienceContext.Provider>
  );
}


export function useLeadershipExperience() {
  const context = useContext(LeadershipExperienceContext);
  if (!context) {
    throw new Error("useLeadershipExperience must be used within a LeadershipExperienceProvider");
  }
  return context;
}