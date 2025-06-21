import {
  Sidebar,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/AppSideBar";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <Sidebar className="overflow-y-hidden" collapsible="icon">
        {/* <AppSidebar /> */}
        <SidebarHeader className="flex-row">
          <SidebarTrigger />
          <span className="text-xl text-nowrap">Job Board</span>
        </SidebarHeader>
      </Sidebar>
      <main>{children}</main>
    </SidebarProvider>
  );
}
