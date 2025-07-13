import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExperienceTimeline from "./experience/ExperienceTimeline"
import EducationTimeline from "./school/EducationTimeline"
import { Briefcase, GraduationCap } from 'lucide-react'

export default function ExperieceEducation() {
  return (
    <div className="bg-primary-foreground border p-4 shadow-sm rounded-xl w-full max-w-xl">
      <div className="h-fit">
        <Tabs defaultValue="experience" className="items-center flex flex-col gap-4">
					<div className=" w-full bg-card border p-4 rounded-lg">
						<TabsList className="w-full">
							<TabsTrigger value="experience"><Briefcase/>Experience</TabsTrigger>
							<TabsTrigger value="education"><GraduationCap />Education</TabsTrigger>
						</TabsList>
					</div>
          <TabsContent value="experience" className="w-full">
            <div className="bg-card shadow-sm border p-4 rounded-lg">
							<ExperienceTimeline />
						</div>
          </TabsContent>
          <TabsContent value="education" className="w-full">
            <div className="bg-card shadow-sm border p-4 rounded-lg">
							<EducationTimeline />
						</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
