import { createContext, useContext, useState, ReactNode } from "react";

//type defination
interface LeadershipExperience {
  role: string;
  organizationName: string;
  startDate: string;
  endDate: string;
  experience: string;
}

interface LeadershipExperienceContextType {
    leadershipExperience: LeadershipExperience[];
    addLeadershipExperience: (data: LeadershipExperience) => void;
    removeLeadershipExperience: (index: number) => void;
  }

// context
const LeadershipExperienceContext = createContext< LeadershipExperienceContextType | undefined>(undefined);

// provider component
export function LeadershipExperienceProvider({ children }: { children: ReactNode }) {
  const [leadershipExperience, setLeadershipExperience] = useState<LeadershipExperience[]>([]);

  const addLeadershipExperience = (data: LeadershipExperience) => {
    setLeadershipExperience(prev => [...prev, data]);
  };

  const removeLeadershipExperience = (index: number) => {
    setLeadershipExperience(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <LeadershipExperienceContext.Provider value={{ leadershipExperience, addLeadershipExperience, removeLeadershipExperience}}>
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