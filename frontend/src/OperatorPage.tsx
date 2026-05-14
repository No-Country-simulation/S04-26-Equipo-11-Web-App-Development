import { Plus } from "lucide-react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";

export default function OperatorPage() {
  return (
    <div className="space-y-6 mt-4">

      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Panel Operario
        </h1>

        <p className="text-muted-foreground">
          Reportá incidentes y seguí el estado de tus solicitudes.
        </p>        
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-primary text-primary-foreground transition hover:scale-[1.02] hover:cursor-pointer">
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
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
            </CardHeader> 
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>         
      </div>

        

    </div>
  );
}