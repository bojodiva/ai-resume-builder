import { createContext, useContext, useState, ReactNode } from "react";

//skills type
interface Skills {
  skillsList: string[];
}

//context
const SkillsContext = createContext<{ skills: Skills; setSkills: (data: Skills) => void } | undefined>(undefined);

//provider component
export function SkillsProvider({ children }: { children: ReactNode }) {
  const [skills, setSkills] = useState<Skills>({
    skillsList: [],
  });

  return (
    <SkillsContext.Provider value={{ skills, setSkills }}>
      {children}
    </SkillsContext.Provider>
  );
}


export function useSkills() {
  const context = useContext(SkillsContext);
  if (!context) {
    throw new Error("useSkills must be used within a SkillsProvider");
  }
  return context;
}
