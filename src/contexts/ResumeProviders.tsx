import { ReactNode } from "react";
import { PersonalInfoProvider } from "./PersonalInfoContext";
import { WorkExperienceProvider } from "./WorkContext";
import { SkillsProvider } from "./SkillsContext";
import { VolunteeringExperienceProvider } from "./VolunteeringContext";
import { LeadershipExperienceProvider } from "./LeadershipContext";

export function ResumeProvider({children}: {children: ReactNode}){
    return(
        <PersonalInfoProvider>
            <WorkExperienceProvider>
                <SkillsProvider>
                    <VolunteeringExperienceProvider>
                        <LeadershipExperienceProvider>
                            {children}
                        </LeadershipExperienceProvider>
                    </VolunteeringExperienceProvider>
                </SkillsProvider>
            </WorkExperienceProvider>
        </PersonalInfoProvider>
    )
}