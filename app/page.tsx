import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#101014]">

      {/* Navbar */}
      <Navbar />
         {/* Hero Section */}
      <Hero />

      {/* Website Content */}
      <section className="flex min-h-[80vh] items-center justify-center">
        <h1 className="text-5xl font-bold text-white">
          Welcome to Arcjet
        </h1>
      </section>

    </main>
  );
}