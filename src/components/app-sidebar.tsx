import { Terminal } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import { useState } from "react";
import { createPortal } from "react-dom";

import TerminalWindow from "@/components/TerminalWindow";
import { items } from "@/data/menu";

export function AppSidebar() {
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarSeparator />

              {/* Terminal Button as SidebarMenuItem */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button
                    onClick={() => {
                      setIsTerminalVisible(!isTerminalVisible);
                    }}
                  >
                    <Terminal />
                    <span>Terminal</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Render TerminalWindow Outside Sidebar */}
              {isTerminalVisible &&
                createPortal(<TerminalWindow />, document.body)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
