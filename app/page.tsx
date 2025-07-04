import AboveFooter from "@/components/AboveFooter";
import BrandSlide from "@/components/BrandSlide";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import ProductCard from "@/components/ProductCard";
import ProductShowCase from "@/components/ProductShowCase";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <BrandSlide />
      <ProductShowCase />
      <ProductCard />
      <Pricing />
      <Testimonials />
      <AboveFooter />
      <Footer />
    </div>
  );
}
