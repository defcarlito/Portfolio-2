import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExperieceEducation() {
  return (
    <div className="bg-muted border p-4 shadow-sm rounded-xl w-full max-w-xl">
      <div className="bg-card border h-fit p-4 rounded-lg shadow-sm">
        <Tabs defaultValue="experience" className="items-center">
          <TabsList className="w-full">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="experience" className="w-full">
            <div>experience</div>
          </TabsContent>
          <TabsContent value="education" className="w-full">
            <div>education</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
