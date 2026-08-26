import { Scissors, Shirt, Layers, CheckSquare, Package, TrendingUp } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Ladies Garment Stitching",
    description: "Professional stitching of ladies tops, dresses, skirts, and shirts according to client specifications.",
    icon: <Shirt size={32} className="text-brand-gold" />
  },
  {
    id: "02",
    title: "Fabrication / Job Work",
    description: "End-to-end production support for women's fashion brands requiring reliable garment job-work services.",
    icon: <TrendingUp size={32} className="text-brand-gold" />
  },
  {
    id: "03",
    title: "Cutting & Preparation",
    description: "Fabric preparation and cutting according to provided specifications and measurements.",
    icon: <Scissors size={32} className="text-brand-gold" />
  },
  {
    id: "04",
    title: "Finishing",
    description: "Professional finishing including thread trimming, ironing/pressing and other required finishing operations.",
    icon: <Layers size={32} className="text-brand-gold" />
  },
  {
    id: "05",
    title: "Quality Inspection",
    description: "Inspection of stitching, measurements, finishing and overall garment quality.",
    icon: <CheckSquare size={32} className="text-brand-gold" />
  },
  {
    id: "06",
    title: "Packing & Dispatch",
    description: "Organized packing and production dispatch according to client requirements.",
    icon: <Package size={32} className="text-brand-gold" />
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Comprehensive garment production and job-work solutions tailored for bulk requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-brand-offwhite p-8 rounded-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  {service.icon}
                </div>
                <span className="text-3xl font-black text-gray-200">{service.id}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="/quote" 
            className="inline-block bg-brand-navy text-white px-8 py-4 rounded-sm font-semibold hover:bg-brand-charcoal transition-colors shadow-lg"
          >
            Discuss Your Production Requirement
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
