import Hero from "@/components/sections/Hero";
import SelectedWorks from "@/components/sections/SelectedWorks";
import AboutMe from "@/components/sections/AboutMe";
import FocusServices from "@/components/sections/FocusServices";
import Awards from "@/components/sections/Awards";
import BlogPreview from "@/components/sections/BlogPreview";
import MarqueeClients from "@/components/sections/MarqueeClients";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWorks />
      <AboutMe />
      <FocusServices />
      <Awards />
      <BlogPreview />
      <MarqueeClients />
    </>
  );
}
