import { createContext, useContext, useState, ReactNode } from "react";

//personal info type
interface PersonalInfo {
  firstName: string,
  lastName: string,
  middleName: string,
  email: string;
  tel: string;
  location: string;
  linkedInUrl: string;
  portfolioUrl: string;
}

// context
const PersonalInfoContext = createContext<{ personalInfo: PersonalInfo; setPersonalInfo: (data: PersonalInfo) => void } | undefined>(undefined);

// provider Component
export function PersonalInfoProvider({ children }: { children: ReactNode }) {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    tel: "",
    location: "",
    linkedInUrl: "",
    portfolioUrl: "",
  });

  return (
    <PersonalInfoContext.Provider value={{ personalInfo, setPersonalInfo }}>
      {children}
    </PersonalInfoContext.Provider>
  );
}


export function usePersonalInfo() {
  const context = useContext(PersonalInfoContext);
  if (!context) {
    throw new Error("usePersonalInfo must be used within a PersonalInfoProvider");
  }
  return context;
}