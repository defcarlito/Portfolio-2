import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExperieceEducation() {
  return (
    <div className="bg-primary-foreground border p-4 shadow-sm rounded-xl w-full max-w-xl">
      <div className="h-fit">
        <Tabs defaultValue="experience" className="items-center flex flex-col gap-4">
					<div className=" w-full bg-card border p-4 rounded-lg">
						<TabsList className="w-full">
							<TabsTrigger value="experience">Experience</TabsTrigger>
							<TabsTrigger value="education">Education</TabsTrigger>
						</TabsList>
					</div>
          <TabsContent value="experience" className="w-full">
            <div className="bg-card shadow-sm border p-4 rounded-lg">experience</div>
          </TabsContent>
          <TabsContent value="education" className="w-full">
            <div className="bg-card shadow-sm border p-4 rounded-lg">education</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
