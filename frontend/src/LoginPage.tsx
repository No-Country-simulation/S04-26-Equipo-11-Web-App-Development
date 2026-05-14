
import Logo from "./components/logo"
import { Button } from "./components/ui/button"
import { Field, FieldLabel } from "./components/ui/field"
import { Input } from "./components/ui/input"
import { Checkbox } from "./components/ui/checkbox"
import {useForm, type SubmitHandler} from "react-hook-form"
import ErrorMessage from "./components/error-message"
import { useNavigate } from "react-router-dom"
import {z} from "zod"
import { loginSchema } from "./schemas/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

type LoginForm = z.infer<typeof loginSchema>

export default function LoginPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginForm>({resolver: zodResolver(loginSchema)});
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<LoginForm > = (data) => {
    console.log(data)
    navigate("/")
  }

  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
  
    // 1. Animación del form
    gsap.from(".login-content", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    })

    // 2. Spotlight superior que "respira"
    gsap.to(".spotlight", {
      opacity: 0.4,
      scale: 1.1,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

  }, { scope: container });

  return (
    <div ref={container} className="h-screen flex flex-col items-center py-10 gap-10 justify-center px-5 max-w-md mx-auto">

    
      <div className="absolute inset-0 -z-20 h-full w-full bg-background"></div>
      <div className="spotlight absolute left-1/2 top-[-10%] -z-10 h-[400px] w-[80%] max-w-[800px] -translate-x-1/2 rounded-[100%] bg-primary/50 blur-[100px] pointer-events-none opacity-20"></div>

    <div className="text-center gap-2 flex flex-col items-center login-content">
      <Logo className={"w-16 bg-primary py-5 px-3 rounded-xl text-primary-foreground"}/>
            <h1 className="text-4xl font-bold">OpsCorp</h1>
          <p className="text-sm text-muted-foreground">
            Accede al sistema de reportes de incidentes
          </p>
        </div>
        <form className=" login-content flex flex-col w-full gap-4" onSubmit={handleSubmit(onSubmit)}>                    
        <Field>
            <FieldLabel htmlFor="email">Your email address</FieldLabel>
            <Input id="email" placeholder="Email" className="" {...register("email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} />
          {errors.email?.message && <ErrorMessage message={errors.email.message} />}
        </Field>        
        <Field>
          <FieldLabel htmlFor="password">Your password</FieldLabel>
          <Input id="password" type="password" placeholder="Password" {...register("password", {required: true})} />
          {errors.password?.message && <ErrorMessage message={errors.password.message} />}
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

        <Button type="submit" className="w-full py-5 bg-primary">
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
