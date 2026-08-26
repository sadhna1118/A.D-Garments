import { Link } from "react-router-dom";

const InfrastructureSection = () => {
  return (
    <section className="py-24 bg-brand-offwhite" id="infrastructure">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Inside A.D Garments</h2>
          <p className="text-gray-600 text-lg">
            Our well-equipped factory infrastructure enables us to handle bulk production efficiently while maintaining strict quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-brand-offwhite w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-brand-gold">
                50+
              </span>
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">Motor Machines</h3>
            <p className="text-gray-600">Advanced high-speed motor stitching machines for efficient and precise production.</p>
          </div>
          
          <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-brand-offwhite w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-brand-gold">O/L</span>
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">Overlock Setups</h3>
            <p className="text-gray-600">Dedicated overlock and specialized finishing machines for perfect edge sealing.</p>
          </div>
          
          <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-brand-offwhite w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-brand-gold">
                50+
              </span>
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">Skilled Workers</h3>
            <p className="text-gray-600">A dedicated team of 50+ experienced tailors, masters, and quality checkers.</p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-brand-offwhite w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-brand-gold">
                30
              </span>
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">Years Legacy</h3>
            <p className="text-gray-600">Three decades of trust and excellence in garment fabrication in Sangam Vihar.</p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/gallery" 
            className="inline-block border-2 border-brand-navy text-brand-navy px-8 py-3 rounded-sm font-semibold hover:bg-brand-navy hover:text-white transition-colors"
          >
            View Full Factory Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
