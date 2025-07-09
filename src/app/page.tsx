import ProfileHero from "@/components/home/profile/ProfileHero"
import TechStack from "@/components/home/skills/TechStack"

export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="flex w-full max-w-4xl items-center justify-center shadow-lg">
        <div className="flex flex-col items-center gap-16 border bg-secondary p-8 rounded-2xl">
          <ProfileHero />
          <TechStack />
        </div>
      </div>
    </div>
  )
}
