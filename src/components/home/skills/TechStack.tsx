import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

export default function TeckStack() {
  const frontend = [
    { name: "TypeScript" },
    { name: "React" },
    { name: "Tailwind CSS" },
    { name: "Next.js" },
    { name: "Shadcn UI" },
    { name: "Chakra UI" },
  ]
	
  const backend = [
    { name: "Python" },
		{ name: "Node.js" },
		{ name: "Flask" },
  ]

  const database = [
    { name: "Firebase" },
    { name: "PostgreSQL" },
    { name: "Supabase" },
  ]

  return (
    <div className="flex flex-col w-full max-w-xl bg-primary-foreground border p-4 rounded-xl">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="bg-card flex flex-col w-full h-full border p-4 rounded-lg shadow-sm gap-4 flex-1">
          <div className="flex items-center gap-2">
						<Zap className="w-4 h-4"/>
						<p>Frontend</p>
					</div>
          <div className="flex flex-wrap gap-2">
            {frontend.map((item, index) => (
              <Badge
                key={index}
                variant="outline"
								className="p-1 text-muted-foreground"
              >
                {item.name}
              </Badge>
            ))}
          </div>
        </div>
        <div className="bg-card flex flex-col w-full h-full border p-4 rounded-lg shadow-sm gap-4 flex-1">
          <div className="flex items-center gap-2">
						<Zap className="w-4 h-4"/>
						<p>Backend</p>
					</div>
          <div className="flex flex-wrap gap-2">
            {backend.map((item, index) => (
              <Badge
                key={index}
                variant="outline"
								className="p-1 text-muted-foreground"
              >
                {item.name}
              </Badge>
            ))}
          </div>
        </div>
        <div className="bg-card flex flex-col w-full h-full border p-4 rounded-lg shadow-sm gap-4 flex-1">
          <div className="flex items-center gap-2">
						<Zap className="w-4 h-4"/>
						<p>Database</p>
					</div>
          <div className="flex flex-wrap gap-2">
            {database.map((item, index) => (
              <Badge
                key={index}
                variant="outline"
								className="p-1 text-muted-foreground"
              >
                {item.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
