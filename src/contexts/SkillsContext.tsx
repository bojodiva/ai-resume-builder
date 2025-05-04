import { createContext, useContext, useState, ReactNode } from "react";

type Skill = string;

interface SkillsContextType {
  skills: Skill[];
  addSkill: (skill: Skill) => void;
  removeSkill: (index: number) => void;
}


//context
const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

//provider component
export function SkillsProvider({ children }: { children: ReactNode }) {
  const [skills, setSkills] = useState<Skill[]>([]);

  const addSkill = (skill: Skill) => {
    if (skill.trim() !== "") {
      setSkills(prev => [...prev, skill.trim()]);
    }
  };

  const removeSkill = (index: number) => {
    setSkills(prev => prev.filter((_, i) => i !== index));
  };


  return (
    <SkillsContext.Provider value={{ skills, addSkill, removeSkill }}>
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
