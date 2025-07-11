import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MoveRight } from "lucide-react"

export default function RecentProjects() {
  return (
    <div className="bg-primary-foreground border p-4 shadow-sm rounded-xl w-full max-w-xl flex flex-col gap-4">
      <div className="bg-card border h-fit p-4 rounded-lg shadow-sm flex justify-between items-center">
        <h1 className="text-2xl font-medium">Recent Projects</h1>
        <Button variant="link" className="p-0 text-muted-foreground">
          View more <MoveRight />
        </Button>
      </div>
      <div className="flex flex-wrap w-full gap-2">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Rocket League Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A dashboard to display my in game stats that uses a custom
              BakkesMod plugin for the game Rocket League.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>Python</Badge>
            <Badge>C++</Badge>
          </CardFooter>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Lyric Translator</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A platform to build collections vocab words in your target
              language from song lyrics and export them to flashcard apps.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>Firebase</Badge>
            <Badge>OpenAI</Badge>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
