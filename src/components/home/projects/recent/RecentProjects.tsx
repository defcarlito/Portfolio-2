import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"

export default function RecentProjects() {
  return (
    <div className="bg-muted border p-4 shadow-sm rounded-xl w-full max-w-xl flex flex-col gap-2">
      <div className="bg-card border h-fit p-4 rounded-lg shadow-sm flex justify-between items-center">
        <h1 className="text-2xl font-medium">Recent Projects</h1>
        <Button variant="link" className="p-0 text-muted-foreground">
          View more <MoveRight />
        </Button>
      </div>
      <div className="flex flex-row w-full gap-2">
        <div className="flex-1 bg-card border h-fit p-4 rounded-lg shadow-sm">
          pretend this is a proj
        </div>
        <div className="flex-1 bg-card border h-fit p-4 rounded-lg shadow-sm">
          pretend this is a proj
        </div>
      </div>
    </div>
  )
}
