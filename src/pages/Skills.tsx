import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";
import { Skill } from "@/types";

const Skills = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Skill Stack</CardTitle>
          <CardDescription>Technologies and tools I work with</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill: Skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors duration-200"
              >
                <div className="mb-3 p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-sm font-medium text-center">
                  {skill.name}
                </h4>
                {skill.level && (
                  <Badge variant="outline" className="mt-2 text-xs">
                    {skill.level}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
