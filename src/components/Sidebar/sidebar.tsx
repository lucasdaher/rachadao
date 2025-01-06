import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { useSidebar } from "./contexts/SidebarContext";
import Image from "next/image";
import Link from "next/link";
import {
  HandCoins,
  LayoutDashboard,
  LogOut,
  NotepadText,
  PanelLeftOpen,
  Users,
  X,
} from "lucide-react";
import { Button } from "../ui/button";

import logo from "@/assets/logos/logo-white.svg";
import logoIcon from "@/assets/logos/logo-icon.png";
import logoutAction from "@/app/(auth)/logout/logoutAction";
import { SidebarList } from "./components/SIdebarList";
import { SidebarListItem } from "./components/SIdebarListItem";

const sidebar = tv({
  base: "min-h-screen border-r-[0.5px] border-gray-border border-opacity-100 bg-black-800 transition-all duration-200 ease-in-out",
  variants: {
    expanded: {
      true: "w-64 px-4 py-8 flex flex-col justify-between items-start",
      false: "w-16 px-2 py-4 flex flex-col justify-between items-start",
    },
  },
  defaultVariants: {
    expanded: true,
  },
});

export type SidebarProps = ComponentProps<"aside"> &
  VariantProps<typeof sidebar>;

export function Sidebar({ expanded, ...props }: SidebarProps) {
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <aside className={sidebar({ expanded: isOpen })}>
      <div
        className={`flex ${
          !isOpen
            ? "justify-center flex-col-reverse gap-4"
            : "justify-between flex-row"
        } items-center w-full transition-all duration-200 ease-in-out`}
      >
        <Link href={`/dashboard`}>
          {isOpen && (
            <Image
              src={logo}
              alt="Logo do Rachadão"
              className={`w-36 cursor-pointer`}
            />
          )}
        </Link>
        <button
          type="button"
          onClick={toggleSidebar}
          className="p-2 transition-all duration-200 ease-in-out rounded-md hover:bg-black-900 group"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-white/60 group-hover:text-white transition-all duration-200 ease-in-out" />
          ) : (
            <PanelLeftOpen className="w-5 h-5 text-white/60 group-hover:text-white transition-all duration-200 ease-in-out" />
          )}
        </button>
        {!isOpen && (
          <Image
            src={logoIcon}
            alt="Logo ícone do Rachadão"
            className={`w-8 cursor-pointer`}
          />
        )}
      </div>

      <div className="w-full mt-8">
        <SidebarList>
          {/* Adicionar ícone e texto */}
          <SidebarListItem selected>
            <div className="flex justify-center items-center gap-2">
              <LayoutDashboard className="w-5 h-5 text-white mx-auto" />
              {isOpen && (
                <>
                  <span className="font-medium text-white">Dashboard</span>
                </>
              )}
            </div>
          </SidebarListItem>

          <SidebarListItem>
            <div className="flex justify-center items-center gap-2">
              <Users className="w-5 h-5 text-white mx-auto" />
              {isOpen && <span className="text-white font-medium">Grupos</span>}
            </div>
          </SidebarListItem>

          <SidebarListItem>
            <div className="flex justify-center items-center gap-2">
              <HandCoins className="w-5 h-5 text-white mx-auto" />
              {isOpen && (
                <span className="text-white font-medium">Divisões</span>
              )}
            </div>
          </SidebarListItem>

          <SidebarListItem>
            <div className="flex justify-center items-center gap-2">
              <NotepadText className="w-5 h-5 text-white mx-auto" />
              {isOpen && (
                <span className="text-white font-medium">Relatórios</span>
              )}
            </div>
          </SidebarListItem>
        </SidebarList>
      </div>

      <div className="w-full mt-auto">
        <Button
          variant="destructive"
          onClick={logoutAction}
          className="p-3 w-full"
        >
          <LogOut className="w-5 h-5 text-white" />

          {isOpen && <span className="font-semibold">Sair</span>}
        </Button>
      </div>
    </aside>
  );
}
