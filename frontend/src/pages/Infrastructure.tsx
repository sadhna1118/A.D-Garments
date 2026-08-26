import InfrastructureSection from "../components/sections/InfrastructureSection";

const Infrastructure = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-brand-navy py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Capacity & Machinery</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Equipped with 50 advanced motor machines, overlock setups, and a team of 50 skilled workers to handle bulk production efficiently.
          </p>
        </div>
      </div>
      <InfrastructureSection />
    </div>
  );
};

export default Infrastructure;
