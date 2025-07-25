import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function EducationTimeline() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-fit relative">
          <Avatar className="w-10 h-10 rounded-md">
            <AvatarImage src="ust-logo.png" className="object-contain bg-white p-1"/>
            <AvatarFallback>Logo</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-full">
          <div className="items-center">
            <div className="flex flex-row justify-between items-center">
              <h1 className="font-bold">University of St. Thomas</h1>
              <h1 className="text-muted-foreground md:text-sm text-xs">Grad - May 2026</h1>
            </div>
            <div className="flex flex-row justify-between text-sm">
              <h1>BS - Computer Science</h1>
            </div>
          </div>
          <div className="text-muted-foreground pl-2">
            {/* bullet points go here */}
          </div>
        </div>
      </div>
    </div>
  )
}
