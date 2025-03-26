import CTA from "@/components/layout/section/CTA";
import Faq from "@/components/layout/section/Faq";
import Features from "@/components/layout/section/Features";
import Footer from "@/components/layout/section/Footer";
import Hero from "@/components/layout/section/Hero";
import Navbar from "@/components/layout/section/Navbar";
import Testimonials from "@/components/layout/section/Testimonials";
import InfiniteScrollingLogosAnimation from "@/components/shared/InfiniteScrollingLogosAnimation";

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
