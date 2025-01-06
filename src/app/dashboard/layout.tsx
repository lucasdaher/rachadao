import React from "react";
import { CollapsibleProvider } from "@/components/Sidebar/hooks/useCollapsible";

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
    <CollapsibleProvider>
      <div className="min-h-screen w-full fixed top-0 left-0 bg-black-900">
        {children}
      </div>
    </CollapsibleProvider>
  );
}
