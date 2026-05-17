import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    TriangleAlert,
    ClipboardList,
    Users,
    Settings,
} from "lucide-react";
import { SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, Sidebar, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "./ui/sidebar";
import Logo from "./logo";

type LinkType = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

type SidebarProps = {
     links: LinkType[];
};

export default function SidebarCommon({ links }: SidebarProps) {
    return (
        <Sidebar>

        {/* HEADER */}
        <SidebarHeader className="border-b">
            <div className="flex items-center gap-3 px-2 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Logo className="w-6 h-6"/>
            </div>

            <div>
                <h2 className="text-sm font-semibold">
                OpsCore
                </h2>

                <p className="text-xs text-muted-foreground">
                Incident Manager
                </p>
            </div>
            </div>
        </SidebarHeader>

        {/* CONTENT */}
        <SidebarContent>

            <SidebarGroup>

            <SidebarGroupLabel>
                Navegación
            </SidebarGroupLabel>

            <SidebarGroupContent>

                <SidebarMenu>

                {links.map((link) => (
                    <SidebarMenuItem key={link.href}>

                    <SidebarMenuButton asChild>

                        <NavLink
                        to={link.href}
                        className={({ isActive }) =>
                            `
                            flex items-center gap-3 rounded-lg px-3 py-2 transition-colors
                            ${
                            isActive
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            }
                            `
                        }
                        >
                        {link.icon}

                        <span>{link.label}</span>
                        </NavLink>

                    </SidebarMenuButton>

                    </SidebarMenuItem>
                ))}

                </SidebarMenu>

            </SidebarGroupContent>

            </SidebarGroup>

        </SidebarContent>

        {/* FOOTER */}
        <SidebarFooter className="border-t">

            <div className="flex items-center gap-3 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                F
            </div>

            <div>
                <p className="text-sm font-medium">
                Franco
                </p>

                <p className="text-xs text-muted-foreground">
                Supervisor
                </p>
            </div>
            </div>

        </SidebarFooter>

        </Sidebar>
    );
}