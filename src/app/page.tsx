import ExperieceEducation from "@/components/home/history/ExperienceEducation"
import ProfileHero from "@/components/home/profile/ProfileHero"
import RecentProjects from "@/components/home/projects/recent/RecentProjects"
import TechStack from "@/components/home/skills/TechStack"

export default function Home() {
  return (
    <div className="flex w-screen justify-center py-20">
      <div className="flex w-full max-w-4xl items-center justify-center shadow-lg py-20">
        <div className="flex flex-col items-center gap-16 border bg-secondary p-8 rounded-2xl">
          <ProfileHero />
          <TechStack />
          <ExperieceEducation />
          <RecentProjects />
        </div>
      </div>
    </div>
  )
}
