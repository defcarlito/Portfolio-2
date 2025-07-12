import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
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
            <CardTitle>Personal Rocket League Performance Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              A full-stack{" "}
              <a
                href="https://arc.net/l/quote/ktvvchzu"
                className="text-primary underline hover:text-accent-foreground"
                target="_blank"
              >
                Rocket League
              </a>{" "}
              analytics app that extracts post-match data via a custom{" "}
              <a
                href="https://arc.net/l/quote/yzfrbqfl"
                className="text-primary underline hover:text-accent-foreground"
                target="_blank"
              >
                BakkesMod
              </a>{" "}
              plugin and displays performance trends.
            </CardDescription>
          </CardContent>
          <CardFooter className="gap-2">
            <Badge>C++</Badge>
            <Badge>Python</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
          </CardFooter>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Language Learning Tool Through Songs</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              An app to quickly build a collection of vocabulary words from
              songs lyrics in your target language and extract them flashcard
              platforms like{" "}
              <a
                href="https://quizlet.com/"
                className="text-primary underline hover:text-accent-foreground"
                target="_blank"
              >
                Quizlet
              </a>
              .
            </CardDescription>
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
