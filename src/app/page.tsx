import ExperienceEducation from "@/components/home/history/ExperienceEducation"
import ProfileHero from "@/components/home/profile/ProfileHero"
import RecentProjects from "@/components/home/projects/recent/RecentProjects"
import TechStack from "@/components/home/skills/TechStack"
import { Button } from "@/components/ui/button"
import { CodeXml } from "lucide-react"

export default function Home() {
  return (
    <div className="flex w-screen justify-center">
      <div className="flex flex-col w-full max-w-4xl items-center justify-center">
        <div className="flex flex-col items-center gap-8 md:p-12 p-2 h-full">
          <div>
            <div className="motion-delay-0 motion-preset-slide-up">
              <ProfileHero />
            </div>
          </div>
          <div className="intersect:motion-preset-slide-up motion-delay-300 intersect-once w-full">
            <ExperienceEducation />
          </div>
          <div className="intersect:motion-preset-slide-up motion-delay-300 intersect-once">
            <TechStack />
          </div>
          <div className="intersect:motion-preset-slide-up motion-delay-300 intersect-once">
            <RecentProjects />
          </div>
          <a href="https://github.com/defcarlito/Portfolio-2" target="_blank">
            <Button
              variant="link"
              size="icon"
              className="text-muted-foreground"
            >
              This Site
              <CodeXml />
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
