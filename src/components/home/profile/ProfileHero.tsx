"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Copy, FileDown, Github, Linkedin, Mail, MapPin } from "lucide-react"

export default function ProfileHero() {
  return (
    <div className="bg-background border p-4 shadow-sm rounded-xl w-full max-w-xl flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div className="flex gap-2">
            <a href="https://github.com/defcarlito" target="_blank">
              <Button size="icon" variant="outline">
                <Github />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/harrison-amorim-b1476326b/"
              target="_blank"
            >
              <Button size="icon" variant="outline">
                <Linkedin />
              </Button>
            </a>
          </div>
          <div>
            <Button size="icon" variant="outline">
              <FileDown />
              Resume
            </Button>
          </div>
        </div>
        <div className="bg-card border h-fit md:py-4 p-4 rounded-lg shadow-sm">
          <div className="flex flex-row gap-6 items-center justify-start">
            <div>
              <Avatar className="h-42 w-42 rounded-lg shadow-sm">
                <AvatarImage src="me.jpg" className="scale-300" />
                <AvatarFallback>Me</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="text-2xl font-medium">
                {"Hey, I'm "}
                <span className="bg-gradient-to-t from-10% to-50% from-foreground to-primary bg-clip-text text-transparent text-shadow-glow text-shadow-primary/75">
                  {"Harrison Amorim "}
                </span>
                <span className="inline-block motion-rotate-loop-30 text-3xl">
                  👋🏼
                </span>
              </h1>
              <div className="flex flex-row items-center gap-1 ml-[-2] text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <p>St. Paul, Minnesota</p>
              </div>
              <p className="text-md text-muted-foreground">🇺🇸 / 🇧🇷</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Button size="icon" variant="outline" className="pointer-events-none">
            <Mail className="h-5 w-5" />
            amor7967 [at] stthomas [dot] edu
          </Button>
          <Button size="icon" variant="outline">
            <Copy />
          </Button>
        </div>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-normal">About me</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              I am an incoming 4th year studying Computer Science at the{" "}
              <a
                href="https://www.stthomas.edu/"
                className="text-primary underline hover:text-accent-foreground"
                target="_blank"
              >
                University of Saint Thomas
              </a>{" "}
              in Saint Paul, Minnesota. I was born in the States, then spent
              some time in São Paulo, Brazil.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
