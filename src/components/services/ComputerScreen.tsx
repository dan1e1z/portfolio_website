import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const interests = [
  "Web Development",
  "AI",
  "Machine Learning",
  "Data Science",
  "UX/UI Design",
];
const hobbies = ["Reading", "Hiking", "Photography", "Cooking", "Traveling"];

const ComputerScreen = () => {
  console.log("Rendering ComputerScreen");

  return (
    <div className="p-6 flex-1">
      <h1 className="text-3xl font-bold mb-6 text-card-foreground">About Me</h1>
      <Tabs defaultValue="education" className="w-full">
        <TabsList className="flex w-full mb-8">
          {["education", "interests", "hobbies", "about"].map((value) => (
            <TabsTrigger key={value} value={value} className="flex-1">
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="mt-6">
          <TabsContent value="education">
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-card-foreground">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-muted-foreground">University of Sydney</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="interests">
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
              Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <Badge key={index} variant="secondary">
                  {interest}
                </Badge>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="hobbies">
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
              Hobbies
            </h2>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby, index) => (
                <Badge key={index} variant="outline">
                  {hobby}
                </Badge>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="about">
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
              About
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A passionate{" "}
              <strong className="text-primary">web developer</strong>{" "}
              specialising in creating{" "}
              <strong className="text-primary">
                intuitive and visually appealing interfaces
              </strong>
              . Proficient in{" "}
              <strong className="text-primary">full-stack development</strong>{" "}
              with expertise in{" "}
              <strong className="text-primary">
                Python, TypeScript, React
              </strong>
              , and modern web technologies.
            </p>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ComputerScreen;
