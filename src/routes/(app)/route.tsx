import { AppSidebar } from "#/components/shared/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "#/components/ui/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="mx-2">{/* <SidebarTrigger /> */}</div>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
