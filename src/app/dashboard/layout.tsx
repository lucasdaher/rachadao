import React from "react";
import { auth } from "@/../auth";
import { redirect } from "next/navigation";
import { SidebarProvider } from "@/components/Sidebar/contexts/SidebarContext";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await auth();

  // if (!session) {
  //   redirect(`/signin`);
  // }

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full fixed top-0 left-0 bg-black-900">
        {children}
      </div>
    </SidebarProvider>
  );
}
