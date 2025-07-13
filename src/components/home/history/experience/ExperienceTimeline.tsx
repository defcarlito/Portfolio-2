import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function ExperienceTimeline() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-fit relative">
          <Separator
            orientation="vertical"
            className="self-center absolute top-7.5 bg-border"
          />
          <Avatar className="w-10 h-10 rounded-md">
            <AvatarImage src="mayo-clinic-logo.svg" className="bg-white py-1.5" />
            <AvatarFallback>Logo</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-full">
          <div className="items-center">
            <div className="flex flex-row justify-between items-center">
              <h1 className="font-bold">IT Technician</h1>
              <h1 className="text-muted-foreground md:text-sm text-xs">Jun. 2023 - Present</h1>
            </div>
            <div className="flex flex-row justify-between text-sm items-center">
              <h1>Mayo Clinic</h1>
              <h1 className="text-muted-foreground text-xs">Rochester, Minnesota</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-muted-foreground text-sm p-2">
            <p>
              • Provided technical support for hardware, software, and network
              issues across clinical departments within the Rochester Campus.
            </p>
            <p>
              • Troubleshot and resolved IT service requests, collaborating with
              clinicians partly in high-stake settings to meet the needs of a
              fast-paced hospital.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-fit relative">
          <Avatar className="w-10 h-10 rounded-md">
            <AvatarImage src="mayo-clinic-logo.svg" className="bg-white py-1.5" />
            <AvatarFallback>Logo</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-full">
          <div className="items-center">
            <div className="flex justify-between items-center">
              <h1 className="font-bold">Data Science Intern</h1>
              <h1 className="text-muted-foreground md:text-sm text-xs">Jun. 2024 - Aug. 2024</h1>
            </div>
            <div className="flex flex-row justify-between text-sm items-center">
              <h1>Mayo Clinic</h1>
              <h1 className="text-muted-foreground text-xs">Remote</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-muted-foreground text-sm p-2">
            <p>
              • Researched and developed synthetic data strategies to support
              model reliability.
            </p>
            <p>
              • Investigated the role of high-quality synthetic data in
              enhancing AI model performance for radiological report tasks.
            </p>
            <p>
              • Contributed to efforts in improving model performance while
              protecting patient data through non-identifiable datasets.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
