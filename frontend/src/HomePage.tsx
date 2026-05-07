import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/ui/themeToggle";
import Logo from "./components/logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. NUEVO: Animación de Texto (Reveal) para el título
    // Usa un ease muy suave (power4.out) para dar esa sensación premium
    gsap.fromTo(
      ".title-line",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power4.out", delay: 0.2 }
    );

    // 2. Animación del resto de elementos del Hero (subtítulo, buscador, etc.)
    gsap.fromTo(
      ".hero-anim",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.6 }
    );

    // 3. Animación de las Tarjetas
    gsap.fromTo(
      ".feature-card",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)", delay: 0.9 }
    );

    // 4. Animación del Footer
    gsap.fromTo(
      ".footer-anim",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 1.4, ease: "power2.out" }
    );

    // 5. Spotlight superior que "respira"
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
    <div ref={container} className="relative min-h-screen bg-background text-foreground flex flex-col font-sans overflow-x-hidden z-0">
      
      {/* FONDO MINIMALISTA */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-background"></div>
      <div className="spotlight absolute left-1/2 top-[-10%] -z-10 h-[400px] w-[80%] max-w-[800px] -translate-x-1/2 rounded-[100%] bg-green-500/20 blur-[100px] pointer-events-none opacity-20"></div>

      {/* NAVBAR */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full z-10">
        <div className="flex items-center gap-2">
          <Logo className="w-8" />
          <span className="font-bold text-xl tracking-tight">OpsCore</span>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link to="/auth/login" className="text-sm font-medium hover:text-green-500 transition-colors">
            Iniciar sesión
          </Link>
          <Button asChild className="rounded-full bg-foreground text-background hover:bg-foreground/90">
            <Link to="/auth/register">Agendar demo</Link>
          </Button>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 relative mt-16 pb-32 z-10">
        <div className="hero-anim mb-8 px-5 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-sm font-medium text-muted-foreground shadow-sm opacity-0">
          ✨ Sistema de Gestión de Incidentes Industriales
        </div>

        {/* TÍTULO CON EFECTO REVEAL */}
        {/* Usamos span con overflow-hidden para crear la "máscara" invisible */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-8">
          <span className="block overflow-hidden pb-2">
            <span className="block title-line opacity-0">Digitaliza tus operaciones.</span>
          </span>
          <span className="block overflow-hidden pb-4 pt-1">
            <span className="block title-line opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
              Resuelve incidentes más rápido.
            </span>
          </span>
        </h1>
        
        <p className="hero-anim text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed opacity-0">
          Reemplaza el papel y WhatsApp. Empodera a tus operarios para reportar fallas al instante desde cualquier dispositivo, haz un seguimiento de los tiempos de resolución y analiza las causas raíz sistemáticamente.
        </p>

        <div className="hero-anim flex items-center bg-background/80 backdrop-blur-md p-2.5 rounded-full border border-border shadow-lg w-full max-w-md mb-32 transition-all focus-within:ring-2 focus-within:ring-green-500/50 opacity-0">
          <div className="pl-4 text-muted-foreground">🔍</div>
          <input
            type="text"
            placeholder="Rastrear un ID de incidente..."
            className="bg-transparent border-none outline-none flex-grow px-3 text-sm"
          />
          <Button className="rounded-full px-6 bg-green-500 hover:bg-green-600 text-white shadow-md transition-all hover:scale-105 active:scale-95">
            Rastrear
          </Button>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full text-left">
          <div className="feature-card opacity-0 p-8 rounded-3xl border border-border/50 bg-card hover:bg-card/80 hover:border-green-500/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500 text-xl shadow-inner">📱</div>
            <h3 className="font-bold text-xl mb-3">Reportes desde el móvil</h3>
            <p className="text-muted-foreground leading-relaxed">Los operarios pueden abrir un formulario en sus teléfonos para reportar fallas directamente desde la línea de producción.</p>
          </div>

          <div className="feature-card opacity-0 p-8 rounded-3xl border border-border/50 bg-card hover:bg-card/80 hover:border-green-500/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 text-green-500 text-xl shadow-inner">⏱️</div>
            <h3 className="font-bold text-xl mb-3">Trazabilidad total</h3>
            <p className="text-muted-foreground leading-relaxed">Los supervisores reciben alertas instantáneas, asignan técnicos y monitorean los tiempos de resolución en tiempo real.</p>
          </div>

          <div className="feature-card opacity-0 p-8 rounded-3xl border border-border/50 bg-card hover:bg-card/80 hover:border-green-500/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-500 text-xl shadow-inner">📊</div>
            <h3 className="font-bold text-xl mb-3">Análisis predictivo</h3>
            <p className="text-muted-foreground leading-relaxed">Identifica patrones semanales y causas raíz para implementar un aprendizaje sistemático y reducir paradas de planta.</p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer-anim opacity-0 border-t border-border/40 bg-background/50 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Logo className="w-6" />
                <span className="font-bold text-lg tracking-tight">OpsCore</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Digitalizando la industria con soluciones inteligentes para la gestión de incidentes y eficiencia operacional.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-foreground/70">Producto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-green-500 transition-colors">Funcionalidades</Link></li>
                <li><Link to="#" className="hover:text-green-500 transition-colors">Casos de éxito</Link></li>
                <li><Link to="#" className="hover:text-green-500 transition-colors">Precios</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-foreground/70">Compañía</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-green-500 transition-colors">Sobre nosotros</Link></li>
                <li><Link to="#" className="hover:text-green-500 transition-colors">Contacto</Link></li>
                <li><Link to="#" className="hover:text-green-500 transition-colors">Soporte</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-foreground/70">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-green-500 transition-colors">Privacidad</Link></li>
                <li><Link to="#" className="hover:text-green-500 transition-colors">Términos</Link></li>
                <li><Link to="#" className="hover:text-green-500 transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 OpsCore. Todos los derechos reservados. Hecho para la simulación NoCountry.
            </p>
            <div className="flex gap-6 grayscale opacity-60">
              <span className="text-xs font-medium">LinkedIn</span>
              <span className="text-xs font-medium">Twitter</span>
              <span className="text-xs font-medium">GitHub</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}