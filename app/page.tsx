
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import SDKSection from "./component/SDKSection";
import CustomerSection from "./component/CustomerSection";
import ProblemSection from "./component/ProblemSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101014]">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* SDK Logos Section */}
      <SDKSection />

      {/* Customer Logos Section */}
      <CustomerSection />

      {/* Problem Section */}
      <ProblemSection />

    </main>
  );
}
