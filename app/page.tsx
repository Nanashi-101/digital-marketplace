import Hero from "./components/hero";
import ProductRow from "./components/productRow";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
      <Hero
        condition={true}
        context="ChromaUI is a professional digital marketplace offering premium
            UI/UX components, empowering designers and developers to create
            seamless, visually stunning interfaces with ease."
      />
      <ProductRow category="newest" />
      {/* <ProductRow category="templates" />
      <ProductRow category="Uikits" />
      <ProductRow category="icons" /> */}
    </section>
  );
}
