import Downloads from "@/sections/Downloads";
import FAQ from "@/sections/FAQ";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <FAQ/>
      <Testimonials/>
      <Downloads/>
      <Footer/>
    </main>
  );
}
