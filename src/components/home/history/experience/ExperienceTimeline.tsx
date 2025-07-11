import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function ExperienceTimeline() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-fit relative">
          <Separator orientation="vertical" className="self-center absolute top-7.5 bg-primary"/>
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-full">
          <div className="items-center">
            <div className="flex flex-row justify-between">
              <h1 className="font-bold">IT Technician</h1>
              <h1 className="text-muted-foreground">Jun. 2023 - Present</h1>
            </div>
            <div className="flex flex-row justify-between text-sm">
              <h1>Mayo Clinic</h1>
              <h1 className="text-muted-foreground">Rochester, Minnesota</h1>
            </div>
          </div>
          <div className="text-muted-foreground pl-2">
            <p>- this is a bullet point</p>
            <p>- this is a bullet point</p>
            <p>- this is a bullet point</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-fit relative">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-full">
          <div className="items-center">
            <div className="flex flex-row justify-between">
              <h1 className="font-bold">Data Science Intern</h1>
              <h1 className="text-muted-foreground">Jun. 2024 - Aug. 2024</h1>
            </div>
            <div className="flex flex-row justify-between text-sm">
              <h1>Mayo Clinic</h1>
              <h1 className="text-muted-foreground">Remote</h1>
            </div>
          </div>
          <div className="text-muted-foreground pl-2">
            <p>- this is a bullet point</p>
            <p>- this is a bullet point</p>
            <p>- this is a bullet point</p>
          </div>
        </div>
      </div>
    </div>
  )
}
