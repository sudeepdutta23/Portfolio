import { About } from "@/components/section/About";
import { Blogs } from "@/components/section/Blogs";
import { Contact } from "@/components/section/Contact";
import { Map } from "@/components/section/Map";
import { Partners } from "@/components/section/Partners";
import { Portfolio } from "@/components/section/Portfolio";
import { Process } from "@/components/section/Process";
import { Skills } from "@/components/section/Skills";
import { StartHome } from "@/components/section/StartHome";
import { StartServices } from "@/components/section/StartServices";
import { Subscribe } from "@/components/section/Subscribe";
import { Testimonial } from "@/components/section/Testimonial";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <StartHome />
      <Process />
      <About />
      <Portfolio />
      <Skills />
      <StartServices />
      <Testimonial />
      <Partners />
      <Blogs />
      <Subscribe />
      <Contact />
      <Map />
    </>
  );
}
