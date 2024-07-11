import About from "@/components/about/About";
import DefaultValues from "@/components/Default-Values/DeafaultValues";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Popular from "@/components/popular/Popular";
import Products from "@/app/product/Products";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <About />
      <Testimonials />
      <Popular />
    </div>
  );
}
