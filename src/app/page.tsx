import ExperieceEducation from "@/components/home/history/ExperienceEducation"
import ProfileHero from "@/components/home/profile/ProfileHero"
import RecentProjects from "@/components/home/projects/recent/RecentProjects"
import TechStack from "@/components/home/skills/TechStack"
import { Button } from "@/components/ui/button"
import { CodeXml } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex w-screen justify-center">
      <div className="flex flex-col w-full max-w-4xl items-center justify-center">
        <div className="flex flex-col items-center gap-8 md:p-16 p-2 rounded-2xl">
          <ProfileHero />
          <ExperieceEducation />
          <TechStack />
          <RecentProjects />
          <a href="https://github.com/defcarlito/Portfolio-2" target="_blank">
            <Button variant="link" size="icon" className="text-muted-foreground">This Site<CodeXml /></Button>
          </a>
        </div>
      </div>
    </div>
  )
}
