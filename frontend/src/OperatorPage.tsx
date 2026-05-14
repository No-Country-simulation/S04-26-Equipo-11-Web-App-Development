import { CheckCircle2, Clock3, Plus, TriangleAlert, Wrench } from "lucide-react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";

export default function OperatorPage() {
    return (
    <div className="space-y-6 mt-4">

        <div className="flex items-start justify-between">
            
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                Panel Operario
                </h1>

                <p className="text-muted-foreground">
                Reportá incidentes y seguí el estado de tus solicitudes.
                </p>                    
            </div>

            <Card className="bg-primary text-primary-foreground transition hover:scale-[1.02] hover:cursor-pointer hidden  lg:block">
                <CardContent className="flex h-full items-center justify-center gap-2">
            
                    <Plus className="w-5 h-5" />                    

                    <div className="text-center">
                    <h3 className="text-md font-semibold">
                        Crear incidente
                    </h3>                
                    </div>

                </CardContent>
            </Card>

        </div>


        <Card className="bg-primary text-primary-foreground transition hover:scale-[1.02] hover:cursor-pointer block lg:hidden">
            <CardContent className="flex h-full min-h-55 flex-col items-center justify-center gap-4 p-6">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground/10">
                <Plus className="h-10 w-10" />
                </div>

                <div className="text-center">
                <h3 className="text-xl font-semibold">
                    Crear incidente
                </h3>

                <p className="text-sm text-primary-foreground/80">
                    Reportá rápidamente una nueva falla o problema.
                </p>
                </div>

            </CardContent>
        </Card>
        
        
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <Card className="rounded-2xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    Incidentes Reportados
                    </CardTitle>

                    <TriangleAlert className="h-4 w-4 text-muted-foreground" />
                </CardHeader>

                <CardContent>
                    <div className="text-3xl font-bold">
                    12
                    </div>

                    <p className="text-xs text-muted-foreground">
                    +2 esta semana
                    </p>
                </CardContent>
                </Card>

                <Card className="rounded-2xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    En Revisión
                    </CardTitle>

                    <Clock3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>

                <CardContent>
                    <div className="text-3xl font-bold">
                    3
                    </div>

                    <p className="text-xs text-muted-foreground">
                    Pendientes de técnico
                    </p>
                </CardContent>
                </Card>

                <Card className="rounded-2xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    Resueltos
                    </CardTitle>

                    <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>

                <CardContent>
                    <div className="text-3xl font-bold">
                    8
                    </div>

                    <p className="text-xs text-muted-foreground">
                    Últimos 30 días
                    </p>
                </CardContent>
                </Card>

                <Card className="rounded-2xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    Técnicos Asignados
                    </CardTitle>

                    <Wrench className="h-4 w-4 text-muted-foreground" />
                </CardHeader>

                <CardContent>
                    <div className="text-3xl font-bold">
                    2
                    </div>

                    <p className="text-xs text-muted-foreground">
                    Trabajando actualmente
                    </p>
                </CardContent>
                </Card>

            </div>

                <Card className="rounded-2xl">

                <CardHeader>
                <CardTitle>
                    Últimos incidentes
                </CardTitle>
                </CardHeader>

                <CardContent>

                <div className="space-y-4">

                    <div className="flex items-center justify-between rounded-xl border p-4">
                    <div>
                        <h3 className="font-medium">
                        Falla en cinta transportadora
                        </h3>

                        <p className="text-sm text-muted-foreground">
                        Reportado hace 2 horas
                        </p>
                    </div>

                    <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-500">
                        En revisión
                    </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border p-4">
                    <div>
                        <h3 className="font-medium">
                        Pérdida de presión hidráulica
                        </h3>

                        <p className="text-sm text-muted-foreground">
                        Reportado ayer
                        </p>
                    </div>

                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                        Resuelto
                    </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border p-4">
                    <div>
                        <h3 className="font-medium">
                        Sobrecalentamiento de motor
                        </h3>

                        <p className="text-sm text-muted-foreground">
                        Reportado hace 3 días
                        </p>
                    </div>

                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">
                        Asignado
                    </span>
                    </div>

                </div>

                </CardContent>

            </Card>        
        </div>

        
    
    );
}