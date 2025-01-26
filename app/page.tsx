import InfiniteScrollingLogosAnimation from "./components/InfiniteScrollingLogosAnimation";
import CTA from "./section/CTA";
import Faq from "./section/Faq";
import Features from "./section/Features";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import Testimonials from "./section/Testimonials";

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
        </div>
      </div>
    </div>
  );
}
