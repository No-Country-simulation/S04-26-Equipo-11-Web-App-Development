import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/ui/themeToggle";

export default function HomePage() {

    // TODO: Add landing page with some info about OpsCore and links to login and register pages

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-3">
            
            <h1 className="text-8xl font-bold">OpsCore</h1>
            <p>Welcome to the OpsCore system!</p>
            <ModeToggle/>
            <div className="flex gap-2">
                <Button variant={"secondary"}><Link to="/auth/login">Login</Link></Button>      
                <Button variant={"secondary"}><Link to="/auth/register">Register</Link></Button>
            </div>
        </div>
    )
    }
