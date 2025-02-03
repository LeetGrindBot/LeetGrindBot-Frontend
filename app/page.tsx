import CTA from "@/components/shared/section/CTA";
import Faq from "@/components/shared/section/Faq";
import Features from "@/components/shared/section/Features";
import Footer from "@/components/shared/section/Footer";
import Hero from "@/components/shared/section/Hero";
import Navbar from "@/components/shared/section/Navbar";
import Testimonials from "@/components/shared/section/Testimonials";
import InfiniteScrollingLogosAnimation from "../components/shared/InfiniteScrollingLogosAnimation";

export default function Page() {
  return (
    <div>
      <div className="relative mx-7">
        <div className="mx-auto max-w-7xl">
          <Navbar />
          <Hero />
          <InfiniteScrollingLogosAnimation />
          <Features />
        </div>
      </div>
      <Testimonials />
      <div className="relative mx-7">
        <div className="mx-auto max-w-7xl">
          <Faq />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
