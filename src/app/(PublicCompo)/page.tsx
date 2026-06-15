export const dynamic = "force-dynamic";
import About from "@/components/Layout/About";
import PublicExperience from "@/components/Public/PublicExperience";
import Hero from "@/components/Layout/Hero";
import ProjectSection from "@/components/Layout/ProjectSection";
// import Service from "@/components/Layout/Service";
import Skills from "@/components/Layout/Skils";
import HomeBlogs from "@/components/Layout/HomeBlogs";
import ContactPage from "./contact/page";


export default function Home() {
  return (
    <main className="w-full md:w-11/12 mx-auto overflow-hidden">
      <Hero />
      <About />
      <PublicExperience />
      <ProjectSection />
      <Skills />
      <HomeBlogs />
      <ContactPage />
    </main>
  );
}
