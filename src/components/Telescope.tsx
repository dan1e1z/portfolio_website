import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Directory, FileSystemItem } from "@/type";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import Fuse from "fuse.js";

import { useNavigate } from "react-router-dom";

interface TelescopeProps {
  isOpen: boolean;
  onClose: () => void;
  fileSystem: Directory;
  setIsTerminalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Telescope: React.FC<TelescopeProps> = ({
  isOpen,
  onClose,
  fileSystem,
  setIsTerminalVisible,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<FileSystemItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Memoised Fuse options
  const fuseOptions = useMemo(
    () => ({
      isCaseSensitive: false,
      includeScore: true,
      shouldSort: true,
      findAllMatches: false,
      minMatchCharLength: 1,
      location: 0,
      threshold: 0.6,
      distance: 10,
      useExtendedSearch: false,
      keys: ["name", "contents.name", "type", "contents.type"],
    }),
    [],
  );

  // Function to flatten the file system
  const flattenFileSystem = (system: Directory): FileSystemItem[] => {
    const flatten = (item: FileSystemItem): FileSystemItem[] => {
      if (item.type === "directory") {
        return [item, ...item.contents.flatMap(flatten)];
      }
      return [item];
    };
    return flatten(system);
  };

  // Memoised flattened file system
  const flattenedFileSystem = useMemo(
    () => flattenFileSystem(fileSystem),
    [fileSystem],
  );

  // Memoised Fuse instance
  const fuse = useMemo(
    () => new Fuse(flattenedFileSystem, fuseOptions),
    [flattenedFileSystem, fuseOptions],
  );

  // Automatically focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Update search results based on query
  useEffect(() => {
    if (searchQuery) {
      const searchResults = fuse.search(searchQuery);
      setResults(searchResults.map((result) => result.item).slice(0, 10));
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [searchQuery, fuse]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => Math.max(0, prev - 1));
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => Math.min(results.length - 1, prev + 1));
          break;
        case "Escape":
          onClose();
          break;
        case "Enter":
          if (results[selectedIndex]) {
            console.log("Selected:", results[selectedIndex]);
            const found = results[selectedIndex];

            if (found.type === "file") {
              navigate(`/${found.parent}/?project=project${found.index}`);
            } else if (found.type === "directory") {
              navigate(`/${found.name}`);
            }

            //   navigate(`/projects/?project=project${fileFound.index}`);
            //   setIsTerminalVisible(false);
            // } else if (fileFound?.file.type === "directory") {
            //   navigate(`/${dirName}`);

            setIsTerminalVisible(false);
            onClose();
          }
          break;
      }
    },
    [results, selectedIndex, onClose],
  );

  // Exit early if not open
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <Card
        className="w-[600px] max-h-[500px]"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="flex-grow">Fuzzy Finder</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Fuzzy find files and directories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <ScrollArea className="h-[300px]">
              {results.length > 0 ? (
                <ul className="space-y-2">
                  {results.map((item, index) => (
                    <li
                      key={item.name}
                      className={`p-2 cursor-pointer rounded-md flex justify-between items-center ${
                        index === selectedIndex
                          ? "bg-accent"
                          : "hover:bg-accent/50"
                      }`}
                      onClick={() => {
                        console.log("Selected:", item);
                        onClose();
                      }}
                    >
                      <span>{item.name}</span>
                      <span className="text-muted-foreground text-sm">
                        {item.type}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-muted-foreground">
                  {searchQuery
                    ? "No results found"
                    : "Start typing to search..."}
                </div>
              )}
            </ScrollArea>
            <div className="text-sm text-muted-foreground flex justify-between">
              <div>
                {results.length} result{results.length !== 1 && "s"}
              </div>
              <div className="flex items-center">
                <ChevronUp className="w-4 h-4 mr-2" />
                <ChevronDown className="w-4 h-4 mr-2" />
                <span>to navigate</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
