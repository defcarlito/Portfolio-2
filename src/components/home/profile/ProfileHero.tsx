"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Copy, FileDown, Github, Linkedin, Mail, MapPin } from "lucide-react"

export default function ProfileHero() {
  return (
    <div className="bg-card-background border p-4 shadow-sm rounded-xl w-full max-w-xl flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div className="flex gap-2">
            <Button size="icon" variant="outline">
              <Github />
            </Button>
            <Button size="icon" variant="outline">
              <Linkedin />
            </Button>
          </div>
          <div>
            <Button size="icon" variant="outline">
              <FileDown />
              Resume
            </Button>
          </div>
        </div>
        <div className="bg-card border h-fit py-6 px-12 rounded-lg shadow-sm">
          <div className="flex flex-row gap-6">
            <div>
              <Avatar className="h-42 w-42 shadow-sm hover:scale-175 hover:shadow-2xl transofrm transition duration-500">
                <AvatarImage src="me.jpg" className="scale-300" />
                <AvatarFallback>Me</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="text-2xl font-medium">Hey, I'm Harrison 👋🏼</h1>
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
            <p className="text-muted-foreground text-sm">
              I am an incoming 4th year studying Computer Science at the
              University of Saint Thomas in Saint Paul, Minnesota. I was born in
              the States, then spent some time in São Paulo, Brazil.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
