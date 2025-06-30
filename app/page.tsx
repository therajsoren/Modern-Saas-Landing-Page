import BrandSlide from "@/components/BrandSlide";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowCase from "@/components/ProductShowCase";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <BrandSlide />
      <ProductShowCase/>
    </div>
  );
}
