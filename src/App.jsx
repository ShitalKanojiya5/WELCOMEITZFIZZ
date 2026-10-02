import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="bg-[#05060a] text-white overflow-x-hidden">
      <Navbar />
      <Hero />

      <section className="min-h-screen bg-white text-black flex items-center justify-center px-6">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs tracking-[0.4em] uppercase opacity-50">
            Next Section
          </p>

          <h2 className="text-5xl md:text-8xl font-bold leading-[0.9]">
            Designed
            <br />
            for motion.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
            The hero section remains pinned while the visual responds to
            scroll progress. This creates the required scroll-driven
            interaction.
          </p>
        </div>
      </section>

      <section className="min-h-screen bg-[#090b14] flex items-center justify-center px-6">
        <h2 className="text-5xl md:text-8xl font-bold">
          KEEP
          <br />
          SCROLLING.
        </h2>
      </section>
    </main>
  );
}

export default App;