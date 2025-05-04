import { ReactNode } from "react";
import { PersonalInfoProvider } from "./PersonalInfoContext";
import { WorkExperienceProvider } from "./WorkContext";
import { SkillsProvider } from "./SkillsContext";
import { VolunteeringExperienceProvider } from "./VolunteeringContext";
import { LeadershipExperienceProvider } from "./LeadershipContext";
import { EducationProvider } from "./EducationContext";

export function ResumeProvider({children}: {children: ReactNode}){
    return(
        <PersonalInfoProvider>
            <EducationProvider>
            <WorkExperienceProvider>
                <SkillsProvider>
                    <VolunteeringExperienceProvider>
                        <LeadershipExperienceProvider>
                            {children}
                        </LeadershipExperienceProvider>
                    </VolunteeringExperienceProvider>
                </SkillsProvider>
            </WorkExperienceProvider>
            </EducationProvider>
        </PersonalInfoProvider>
    )
}