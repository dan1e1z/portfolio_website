import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { fileSystem } from "@/data/filesystem";
import { Directory } from "@/type";

const TerminalWindow = () => {
  const [cmd, setCmd] = useState<string>("");
  const [currentDirectory, setCurrentDirectory] =
    useState<Directory>(fileSystem);
  const [directoryStack, setDirectoryStack] = useState<Directory[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handle commands like 'cd'
  const submitCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const input = cmd.trim();

    if (input.startsWith("cd ")) {
      const dirName = input.slice(3).trim();

      if (dirName === "..") {
        // Navigate to the parent directory
        if (directoryStack.length > 0) {
          const parentDirectory = directoryStack[directoryStack.length - 1];
          setDirectoryStack(directoryStack.slice(0, -1)); // Pop the stack
          setCurrentDirectory(parentDirectory);
        } else {
          displayError(`bash: cd: ..: Already at root directory`);
        }
      } else {
        // Navigate to a specific directory
        const targetDir = findDirectory(currentDirectory, dirName);
        if (targetDir) {
          setDirectoryStack([...directoryStack, currentDirectory]);
          setCurrentDirectory(targetDir);
        } else {
          displayError(`bash: cd: ${dirName}: No such directory`);
        }
      }
    } else if (input.startsWith("split ")) {
      //TODO: Implement split
      console.log("split ");
    } else if (input.startsWith("go ")) {
      //TODO: Implement go
      console.log("go");
    } else if (input.startsWith("help ")) {
      //TODO: Implement help
      console.log("help");
    } else if (input) {
      displayError(`bash: command not found: ${input}`);
    }

    setCmd("");
  };

  // Display an error message
  const displayError = (message: string) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(null), 3000);
  };

  // Find a directory by name
  const findDirectory = (
    dir: Directory,
    name: string,
  ): Directory | undefined => {
    return dir.contents.find(
      (item) =>
        item.type === "directory" &&
        item.name.toLowerCase() === name.toLowerCase(),
    ) as Directory | undefined;
  };

  // Render directory contents
  const renderDirectoryContents = (): string[] => {
    return currentDirectory.contents.map((item) =>
      item.type === "directory" ? `${item.name}/` : `${item.name}`,
    );
  };

  return (
    <div>
      <Card className="w-[650px] h-[350px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CardHeader>
          <CardTitle>Terminal</CardTitle>
          <CardDescription>Navigate Through Portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="output">
            <div className="font-bold mb-2">Directory Contents:</div>
            <ul>
              {renderDirectoryContents().map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
          <form onSubmit={submitCommand} className="relative mt-4">
            <span>ask@daniel:~$ </span>
            <input
              type="text"
              value={cmd}
              onChange={(e) => setCmd(e.target.value)}
              className="focus:outline-none ml-2"
              placeholder="Type a command"
              autoFocus
            />
          </form>
          {errorMessage && (
            <div className="text-red-500 mt-2">{errorMessage}</div>
          )}
        </CardContent>
        <CardFooter className="gap-2">
          <p>
            <strong>cd</strong>: change directory
          </p>
          <p>
            <strong>fzf</strong>: fuzzy search directory
          </p>
          <p>
            <strong>split</strong>: split screen
          </p>
          <p>
            <strong>go</strong>: go to section
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TerminalWindow;
