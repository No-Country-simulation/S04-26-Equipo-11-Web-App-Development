
import Logo from "./components/logo"
import { Button } from "./components/ui/button"
import { Field, FieldLabel } from "./components/ui/field"
import { Input } from "./components/ui/input"
import { Checkbox } from "./components/ui/checkbox"

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-col items-center py-10 gap-10 justify-center px-5 max-w-md mx-auto">

    {/* FONDO MINIMALISTA */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-background"></div>
      <div className="spotlight absolute left-1/2 top-[-10%] -z-10 h-[400px] w-[80%] max-w-[800px] -translate-x-1/2 rounded-[100%] bg-primary/50 blur-[100px] pointer-events-none opacity-20"></div>

    <div className="text-center gap-2 flex flex-col items-center">
      <Logo className={"w-16 bg-primary py-5 px-3 rounded-xl text-primary-foreground"}/>
            <h1 className="text-4xl font-bold">OpsCorp</h1>
          <p className="text-sm text-muted-foreground">
            Accede al sistema de reportes de incidentes
          </p>
        </div>
        <form className="flex flex-col w-full gap-4">              

        <Field>
          <FieldLabel htmlFor="email">Your email address</FieldLabel>
          <Input id="email" placeholder="Email" className=""/>
        </Field>        
        <Field>
          <FieldLabel htmlFor="password">Your password</FieldLabel>
          <Input id="password" type="password" placeholder="Password"/>
        </Field>   

        <div className="flex justify-between">
          <div>
            <label className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" />
              <span className="text-sm text-muted-foreground">Remember me</span>
            </label>
          </div>
          <p className="text-sm text-muted-foreground">
          ¿Te olvidaste la contraseña?
        </p>
        </div>

        <Button type="submit" className="w-full py-5 ">
          Iniciar Sesión
        </Button>        
    </form>

    {/* footer */}
    <div className="absolute bottom-5 text-sm text-muted-foreground flex flex-col items-center gap-3">
      <div className="flex gap-3 ">
        <p className="hover:text-primary transition-colors duration-150 cursor-pointer">Seguridad</p>
      <p className="hover:text-primary transition-colors duration-150 cursor-pointer">Privacidad</p>
      <p className="hover:text-primary transition-colors duration-150 cursor-pointer">Contacto</p>
      
      </div>         
      <p className="text-muted-foreground">
        © 2026 OpsCorp
      </p>
    </div>
 

    </div>
     
  )
}
