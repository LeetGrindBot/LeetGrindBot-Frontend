import InfiniteScrollingLogosAnimation from "./components/InfiniteScrollingLogosAnimation";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";

export default function Page() {
  return (
    <div className="relative mx-7">
      <div className="mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <InfiniteScrollingLogosAnimation />
      </div>
    </div>
  );
}
