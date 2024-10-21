import Image from "next/image";
import styles from "./page.module.css";
import { PinContainer } from "@/components/ui/3d-pin";
import { Navigationbar } from "./pages/Navigationbar";
import { ModeToggle } from "./pages/ModeToggle";
import { Navbar } from "./pages/Navbar";
import { Teckstacks } from "./pages/techstacks";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";
import Expreence from "./pages/Expreence";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Navigationbar />
      <AboutMe />
  <Teckstacks />
  <Projects />
  <Expreence/>
  {/* <Resume /> */}
  <br />
  <Contact />
    </div>
  );
}
