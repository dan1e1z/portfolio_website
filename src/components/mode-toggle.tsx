import { useTheme } from "@/components/theme-provider";
import { Square } from "lucide-react";
import { SidebarMenuItem } from "@/components/ui/sidebar";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <SidebarMenuItem>
        <div className="flex flex-col w-full items-start justify-between space-y-8">
          {/* Light Mode Toggle */}
          <div className="flex flex-col items-start space-y-1 translate-y-3">
            <span className="-rotate-90 text-xs pl-0.5">Light</span>
            <div className="flex items-center">
              <button
                onClick={() => setTheme("light")}
                className="text-lg leading-none h-6 w-6 flex items-center justify-center"
              >
                <Square
                  className={`h-4 w-4 ${theme === "light" ? "fill-current" : ""}`}
                  strokeWidth={theme === "light" ? 0 : 2}
                />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-1">
            <span className="-rotate-90 text-xs">Dark</span>
            <div className="flex items-center">
              <button
                onClick={() => setTheme("dark")}
                className="text-lg leading-none h-6 w-6 flex items-center justify-center"
              >
                <Square
                  className={`h-4 w-4 ${theme === "dark" ? "fill-current" : ""}`}
                  strokeWidth={theme === "dark" ? 0 : 2}
                />
              </button>
            </div>
          </div>
        </div>
      </SidebarMenuItem>
    </>
  );
}
