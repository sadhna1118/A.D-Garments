import { Building2, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  { title: "Skilled Workforce", desc: "Experienced production and stitching team.", icon: <Users size={24} /> },
  { title: "Production Support", desc: "Reliable support for bulk garment requirements.", icon: <Briefcase size={24} /> },
  { title: "Quality Focus", desc: "Quality checks throughout production.", icon: <Building2 size={24} /> },
  { title: "Consistent Workmanship", desc: "Attention to stitching, measurements and finishing.", icon: <Users size={24} /> },
  { title: "Timely Production", desc: "Organized workflow designed around production schedules.", icon: <Briefcase size={24} /> },
  { title: "B2B Partnership", desc: "Focused on long-term relationships with businesses and brands.", icon: <Building2 size={24} /> },
];

const ClientsSection = () => {
  return (
    <section className="py-24 bg-brand-charcoal text-white" id="clients">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">A Reliable Production Partner for Businesses</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Whether you are a clothing brand, wholesaler, uniform supplier or business requiring bulk garment production support, A.D Garments can work according to your production requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-brand-navy p-8 rounded-sm border border-gray-700 hover:border-brand-gold transition-colors">
              <div className="text-brand-gold mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-400">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-16">
          <h3 className="text-center text-gray-400 font-medium mb-12 tracking-widest uppercase text-sm">Companies We Have Worked With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-brand-navy p-6 flex items-center justify-center rounded-sm h-32 hover:bg-gray-800 transition-colors border border-gray-800">
              <span className="text-lg md:text-xl font-bold text-gray-300 tracking-wider">PARAMOUNT</span>
            </div>
            <div className="bg-brand-navy p-6 flex items-center justify-center rounded-sm h-32 hover:bg-gray-800 transition-colors border border-gray-800">
              <span className="text-lg md:text-xl font-bold text-gray-300 tracking-wider">SMS</span>
            </div>
            <div className="bg-brand-navy p-6 flex items-center justify-center rounded-sm h-32 hover:bg-gray-800 transition-colors border border-gray-800">
              <span className="text-lg md:text-xl font-bold text-gray-300 tracking-wider text-center">RAMP RAGE EXPORT</span>
            </div>
            <div className="bg-brand-navy p-6 flex items-center justify-center rounded-sm h-32 hover:bg-gray-800 transition-colors border border-gray-800">
              <span className="text-lg md:text-xl font-bold text-brand-gold tracking-wider text-center">MANY MORE...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
