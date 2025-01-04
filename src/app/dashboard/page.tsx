import { Button } from "@/components/ui/button";
import React from "react";
import logoutAction from "../(auth)/logout/logoutAction";

export default function DashboardPage() {
  return (
    <React.Fragment>
      <div className="bg-white">
        <section>Dashboard está aqui</section>
        <Button onClick={logoutAction}>Logout</Button>
      </div>
    </React.Fragment>
  );
}
