import CategoriesSection from "../components/sections/CategoriesSection";

const Products = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-brand-navy py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Make</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            We specialize in high-quality ladies' wear including dresses, skirts, shirts, and tops, catering to fashion brands and bulk requirements.
          </p>
        </div>
      </div>
      <CategoriesSection />
    </div>
  );
};

export default Products;
