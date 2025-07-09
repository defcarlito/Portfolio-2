'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MapPin, FileDown, Github, Linkedin, Mail, Copy } from 'lucide-react';

export default function ProfileHero() {
    return (
        <div className="bg-muted border p-4 shadow-sm rounded-xl w-full max-w-xl">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                    <div className="flex gap-2">          
                        <Button size="icon" variant="outline"><Github /></Button>
                        <Button size="icon" variant="outline"><Linkedin /></Button>
                    </div>
                    <div>
                        <Button size="icon" variant="outline"><FileDown />Resume</Button>
                    </div>
                </div>
                <div className="bg-card border h-fit py-6 px-12 rounded-lg shadow-sm">
                    <div className="flex flex-row gap-6">
                        <div>
                            <Avatar className="h-42 w-42">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>Me</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="text-2xl">Harrison Amorim</h1>  
                            <div className="flex flex-row items-center gap-1 ml-[-2] text-muted-foreground">
                                <MapPin className="w-5 h-5"/>
                                <p>St. Paul</p>
                            </div>
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
        </div>
    )
}