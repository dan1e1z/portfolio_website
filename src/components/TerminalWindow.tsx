import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { fileSystem } from "@/data/filesystem";
import { Directory, FileSystemItem } from "@/type";
import { Telescope } from "@/components/Telescope";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface TerminalWindowProps {
  setIsTerminalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSplit: React.Dispatch<React.SetStateAction<boolean>>;
  setSplitDirectory: React.Dispatch<React.SetStateAction<string>>;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  setIsTerminalVisible,
  setIsSplit,
  setSplitDirectory,
}) => {
  const [cmd, setCmd] = useState<string>("");
  const [currentDirectory, setCurrentDirectory] =
    useState<Directory>(fileSystem);
  const [directoryStack, setDirectoryStack] = useState<Directory[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<string | null>(null);
  const [isTelescope, setIsTelescope] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSplitCommand = (dirName: string) => {
    console.log(`split screen: ${dirName}`);
    setIsSplit(true);
    setSplitDirectory(dirName);
    setIsTerminalVisible(false);
  };

  const submitCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const input = cmd.trim();

    if (input.startsWith("cd ")) {
      const dirName = input.slice(3).trim();
      handleCdCommand(dirName);
    } else if (input === "fzf") {
      setIsTelescope(true);
    } else if (input.startsWith("split ")) {
      handleSplitCommand(input.slice(6).trim());
    } else if (input.startsWith("go ")) {
      handleGoCommand(input.slice(3).trim());
    } else if (input.startsWith("help")) {
      handleHelpCommand(input.slice(4).trim());
    } else if (input) {
      displayMessage(`bash: command not found: ${input}`, "error");
    }
    setCmd("");
  };

  function findFileWithIndex(targetName: string) {
    const index =
      currentDirectory.contents.findIndex(
        (item: FileSystemItem) =>
          item.name.toLowerCase() === targetName.toLowerCase(),
      ) + 1;
    console.log(`contents: ${index}`);
    return index !== -1
      ? { index, file: currentDirectory.contents[index - 1] }
      : null;
  }

  const handleGoCommand = (dirName: string) => {
    const fileFound = findFileWithIndex(dirName);
    console.log(fileFound);

    if (fileFound?.file.type === "file") {
      navigate(`/projects/?project=project${fileFound.index}`);
      setIsTerminalVisible(false);
    } else if (fileFound?.file.type === "directory") {
      navigate(`/${dirName}`);
      setIsTerminalVisible(false);
    } else {
      displayMessage(`Error: ${dirName} not found`, "error");
      console.log(currentDirectory.contents);
      console.log(dirName);
    }
  };

  const handleCdCommand = (dirName: string) => {
    if (dirName === "..") {
      if (directoryStack.length > 0) {
        const parentDirectory = directoryStack[directoryStack.length - 1];
        setDirectoryStack(directoryStack.slice(0, -1));
        setCurrentDirectory(parentDirectory);
      } else {
        displayMessage(`bash: cd: ..: Already at root directory`, "error");
      }
    } else {
      const targetDir = findDirectoryInCurrentDirectory(
        currentDirectory,
        dirName,
      );
      if (targetDir) {
        setDirectoryStack([...directoryStack, currentDirectory]);
        setCurrentDirectory(targetDir);
      } else {
        displayMessage(`bash: cd: ${dirName}: No such directory`, "error");
      }
    }
  };

  const handleHelpCommand = (command?: string) => {
    const helpMessages: { [key: string]: string } = {
      cd: `Use "cd" to navigate directories:
     - Example: "cd about" to move into the "about" directory.
     - Example: "cd .." to move back to the previous directory.`,
      fzf: `Use "fzf" to open Telescope-like fuzzy finder:
     - Searches across entire file system
     - Use arrow keys to navigate
     - Press Enter to select
     - Press Escape to close`,
      split: `Use "split" to open a directory in a split view:
     - Example: "split about" to display the "about" section in a separate view.`,
      go: `Use "go" to navigate directly to a specific section:
     - Example: "go about" to jump to the "about" section.`,
      "": `Available commands:
     - cd: Change directory
     - fzf: Fuzzy search (Telescope-style)
     - split: Open split view
     - go: Navigate to section
     Type "help [command]" for more details.`,
    };

    const message =
      helpMessages[command || ""] ||
      `No help found for command: ${command}. Type "help" for available commands.`;
    displayMessage(message, "success");
  };

  const displayMessage = (message: string, type: string) => {
    setMessageType(type);
    setMessage(message);
    setTimeout(() => setMessage(null), 5000);
  };

  // Find directory only within the current directory's contents
  const findDirectoryInCurrentDirectory = (
    dir: Directory,
    name: string,
  ): Directory | undefined => {
    const foundDir = dir.contents.find(
      (item) =>
        item.type === "directory" &&
        item.name.toLowerCase() === name.toLowerCase(),
    ) as Directory | undefined;

    return foundDir;
  };

  const renderDirectoryContents = (): JSX.Element[] => {
    return currentDirectory.contents.map((item, index) => {
      if (item.type === "directory") {
        return (
          <ul key={index} className="directory-item flex items-center gap-2">
            {item.icon && <item.icon />} {item.name}
          </ul>
        );
      } else {
        return (
          <ul key={index} className="file-item flex items-center gap-2">
            {item.icon && <item.icon />} {item.name}
          </ul>
        );
      }
    });
  };

  return (
    <div>
      <Telescope
        isOpen={isTelescope}
        onClose={() => setIsTelescope(false)}
        fileSystem={fileSystem}
        setIsTerminalVisible={setIsTerminalVisible}
      />
      <Card className="w-[650px] h-[350px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CardHeader className="flex flex-row items-center gap-4">
          <CardTitle>Terminal</CardTitle>
          <CardDescription className="flex-grow">
            Navigate Through Portfolio
          </CardDescription>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsTerminalVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="output">
            <div className="font-bold mb-2">Directory Contents:</div>
            <ul className="flex gap-4">
              {renderDirectoryContents().map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
          <form
            onSubmit={submitCommand}
            className="relative mt-4 flex items-center"
          >
            <span>ask@daniel:~$</span>
            <Input
              type="text"
              value={cmd}
              onChange={(e) => setCmd(e.target.value)}
              className="focus:outline-none focus:ring-0 focus:border-0  ml-2 border-0"
              placeholder="Type a command"
              autoFocus
            />
          </form>
          {message && (
            <div
              className={`${
                messageType === "error" ? "text-red-500" : "text-green-500"
              } mt-2`}
            >
              {message}
            </div>
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
