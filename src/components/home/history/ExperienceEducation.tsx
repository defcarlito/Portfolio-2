"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import ExperienceTimeline from "./experience/ExperienceTimeline"
import EducationTimeline from "./school/EducationTimeline"

export default function ExperienceEducation() {
  const [tab, setTab] = useState("experience")
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>()

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [tab])

  return (
    <div className="bg-primary-foreground border p-3 shadow-sm rounded-xl w-full max-w-xl overflow-hidden">
      <div className="h-fit">
        <Tabs
          value={tab}
          onValueChange={setTab}
          className="items-center flex flex-col gap-2"
        >
          <div className="w-full bg-card border p-4 rounded-lg">
            <TabsList className="w-full">
              <TabsTrigger value="experience">
                <Briefcase />
                Experience
              </TabsTrigger>
              <TabsTrigger value="education">
                <GraduationCap />
                Education
              </TabsTrigger>
            </TabsList>
          </div>
          <div
            className="w-full transition-[height] duration-500 overflow-hidden"
            style={{ height }}
          >
            <div ref={contentRef}>
              {tab === "experience" && (
                <div className="bg-card shadow-sm border p-4 rounded-lg motion-preset-slide-left-lg">
                  <ExperienceTimeline />
                </div>
              )}
              {tab === "education" && (
                <div className="bg-card shadow-sm border p-4 rounded-lg motion-preset-slide-right-lg">
                  <EducationTimeline />
                </div>
              )}
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
