import About from "@/components/Layout/About";
import Hero from "@/components/Layout/Hero";
import ProjectSection from "@/components/Layout/ProjectSection";
import Service from "@/components/Layout/Service";
import Skills from "@/components/Layout/Skils";

export default function Home() {
  return (
    <main className="w-11/12 mx-auto">
      <Hero />
      <About />
      <ProjectSection />
      <Skills />
      <Service />
    </main>
  );
}
