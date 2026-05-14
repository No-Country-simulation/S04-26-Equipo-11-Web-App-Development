import { Outlet } from "react-router-dom";
import Sidebar from "../components/SidebarCommon";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function TechnicianLayout() {

    const links = [
        {
        label: "Dashboard",
        href: "/dashboard/technician",
        },
        {
        label: "Incidentes",
        href: "/dashboard/technician/incidentes",
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