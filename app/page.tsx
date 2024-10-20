import Hero from "./components/hero";
import NewestProduct from "./components/NewestProduct";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
      <Hero/>
      <NewestProduct/>
    </section>
  );
}
