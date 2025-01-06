"use client";

import { Button } from "@/components/ui/button";
import React from "react";

import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";

import { LogOut, X } from "lucide-react";
import Link from "next/link";
import { useSidebar } from "@/components/Sidebar/contexts/SidebarContext";

export default function DashboardPage() {
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <React.Fragment>
      <Sidebar />
    </React.Fragment>
  );
}
