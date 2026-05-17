import { SidebarProvider} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <SidebarProvider>        
        <Outlet />
      </SidebarProvider>
    </div>
  );
}