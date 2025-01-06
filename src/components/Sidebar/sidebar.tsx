"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { ChartPie, NotepadText, Settings } from "lucide-react";

import Image from "next/image";

import logoCollapsed from "@/assets/logos/logo-icon.png";
import logoExpanded from "@/assets/logos/logo-white.svg";
import { SidebarNavMain } from "@/components/Sidebar/components/SidebarNavMain";
import Link from "next/link";
import { SidebarNavUser } from "@/components/Sidebar/components/SidebarNavUser";
import { useCollapsible } from "./hooks/useCollapsible";

const data = {
  user: {
    name: "Lucas Daher",
    email: "contato@lucasdaher.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Divisões",
      url: "/dashboard/divisoes",
      icon: ChartPie,
      isActive: true,
      items: [
        {
          title: "Minhas divisões",
          url: "#",
        },
        {
          title: "Grupos",
          url: "#",
        },
      ],
    },
    {
      title: "Relatórios",
      url: "#",
      icon: NotepadText,
      items: [
        {
          title: "Exportar PDF",
          url: "#",
        },
        {
          title: "Histórico",
          url: "#",
        },
      ],
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Gerais",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isCollapsed } = useCollapsible();
  return (
    <Sidebar collapsible="icon" className="sidebar" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link
                href={`/dashboard`}
                className={`flex ${
                  isCollapsed ? "justify-center" : "justify-start"
                } items-center p-2`}
              >
                <Image
                  src={isCollapsed ? logoCollapsed : logoExpanded}
                  alt="Logo do Rachadão"
                  className={isCollapsed ? "w-6" : "w-36"}
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarNavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarNavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
