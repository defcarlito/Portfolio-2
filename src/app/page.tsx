import ProfileHero from "@/components/home/profile/ProfileHero"
import TechStack from "@/components/home/skills/TechStack"

export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="flex flex-col gap-16 w-full max-w-4xl items-center justify-center shadow-lg">
          <ProfileHero />
          <TechStack />
      </div>
    </div>  
  );
}
