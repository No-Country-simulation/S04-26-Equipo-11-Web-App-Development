import { Outlet } from "react-router-dom";
import Sidebar from "../components/SidebarCommon";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function SupervisorLayout() {

    const links = [
        {
        label: "Dashboard",
        href: "/dashboard/supervisor",
        },
        {
        label: "Incidentes",
        href: "/dashboard/supervisor/incidentes",
        },
    ];

    return (
        <>
        <Sidebar links={links} />

        <main className="flex-1 p-6">
            <SidebarTrigger variant={"secondary"}/>
            <Outlet />
        </main>
        </>
    );
}