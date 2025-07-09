'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MapPin, View, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="flex w-full max-w-4xl items-center justify-center shadow-lg bg-zinc-50">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <div className="flex gap-2">          
              <Button size="icon" variant="outline" className="shadow-[0_0_3px_rgba(0,0,0,0.1)]"><Github /></Button>
              <Button size="icon" variant="outline" className="shadow-[0_0_3px_rgba(0,0,0,0.1)]"><Linkedin /></Button>
            </div>
            <div>
              <Button variant="outline" className="shadow-[0_0_3px_rgba(0,0,0,0.1)]"><View />Resume</Button>
            </div>
          </div>
          <div className="bg-white border border-input h-fit py-6 px-12 rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.1)]">
            <div className="flex flex-row gap-6">
              <div>
                <Avatar className="h-42 w-42">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>Me</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-2xl">Harrison Amorim</h1>
                <div className="flex flex-row items-center gap-1 ml-[-2] text-gray-400">
                  <MapPin className="w-5 h-5"/>
                  <p>St. Paul</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}
