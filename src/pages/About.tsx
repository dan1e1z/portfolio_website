import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CodeIcon,
  BookOpenIcon,
  TargetIcon,
  HeartIcon,
  TrophyIcon,
} from "lucide-react";

export default function About() {
  const interests = [
    "Web Development",
    "UI/UX Design",
    "Machine Learning",
    "Open Source",
  ];
  const hobbies = ["Photography", "Hiking", "Reading", "Chess"];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-secondary/50 rounded-t-lg">
            <CardTitle className="flex items-center text-xl">
              <CodeIcon className="mr-3 text-primary" />
              Professional Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-muted-foreground leading-relaxed">
              A passionate{" "}
              <strong className="text-primary">web developer</strong>{" "}
              specializing in creating
              <strong className="text-primary">
                {" "}
                intuitive and visually appealing interfaces
              </strong>
              . Proficient in{" "}
              <strong className="text-primary">
                full-stack development
              </strong>{" "}
              with expertise in{" "}
              <strong className="text-primary">
                Python, TypeScript, React
              </strong>
              , and modern web technologies.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-secondary/50 rounded-t-lg">
            <CardTitle className="flex items-center text-xl">
              <TargetIcon className="mr-3 text-primary" />
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center p-6">
            <div className="w-48 h-48 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-muted-foreground">
                YN
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-secondary/50 rounded-t-lg">
            <CardTitle className="flex items-center text-xl">
              <BookOpenIcon className="mr-3 text-primary" />
              Background
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-muted-foreground leading-relaxed">
              Computer Science student studying computer science at{" "}
              <strong className="text-primary">university of sydney</strong>.
              experienced with technologies ranging from{" "}
              <strong className="text-primary">
                Python and Java to TypeScript and React
              </strong>
              . Passionate about{" "}
              <strong className="text-primary">continuous learning</strong> and{" "}
              <strong className="text-primary">problem-solving</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-secondary/50 rounded-t-lg">
            <CardTitle className="flex items-center text-xl">
              <HeartIcon className="mr-3 text-primary" />
              Interests
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="list-none pl-0 space-y-2">
              {interests.map((interest) => (
                <li
                  key={interest}
                  className="text-muted-foreground before:content-['▸'] before:mr-2 before:text-primary"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-secondary/50 rounded-t-lg">
            <CardTitle className="flex items-center text-xl">
              <TrophyIcon className="mr-3 text-primary" />
              Hobbies
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="list-none pl-0 space-y-2">
              {hobbies.map((hobby) => (
                <li
                  key={hobby}
                  className="text-muted-foreground before:content-['▸'] before:mr-2 before:text-primary"
                >
                  {hobby}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
