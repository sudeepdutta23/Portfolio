import { About } from "@/components/sections/About";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experiance } from "@/components/sections/Experiance";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Profiles } from "@/components/sections/Profiles";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experiance />
      <Profiles />
      <Portfolio />
      <Clients />
      <Contact />
    </div>
  );
}
