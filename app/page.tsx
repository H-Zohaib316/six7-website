import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedMenu from "@/components/sections/FeaturedMenu";
import Signature from "@/components/sections/Signature";
import OurStory from "@/components/sections/OurStory";
import VisitUs from "@/components/sections/VisitUs";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedMenu />
        <Signature />
        <OurStory />
        <VisitUs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
