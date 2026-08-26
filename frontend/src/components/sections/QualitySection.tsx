import { ShieldCheck, ArrowDown } from "lucide-react";

const QualitySection = () => {
  return (
    <section className="py-24 bg-white" id="quality">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="flex items-center space-x-3 mb-6">
            <ShieldCheck size={32} className="text-brand-gold" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Quality at Every Stage</h2>
          </div>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            We focus on consistent workmanship and systematic quality checks throughout the production process. Our dedicated quality control team ensures that every garment meets the required specifications before dispatch.
          </p>
          
          <div className="bg-brand-offwhite p-8 rounded-sm border border-gray-100 shadow-inner">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm">1</div>
                <span className="font-semibold text-brand-charcoal text-lg">Material Inspection</span>
              </div>
              <ArrowDown size={20} className="text-gray-400 ml-3" />
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm">2</div>
                <span className="font-semibold text-brand-charcoal text-lg">Stitching Inspection</span>
              </div>
              <ArrowDown size={20} className="text-gray-400 ml-3" />
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm">3</div>
                <span className="font-semibold text-brand-charcoal text-lg">Measurement Checking</span>
              </div>
              <ArrowDown size={20} className="text-gray-400 ml-3" />
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm">4</div>
                <span className="font-semibold text-brand-charcoal text-lg">Finishing Inspection</span>
              </div>
              <ArrowDown size={20} className="text-gray-400 ml-3" />
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold text-sm">5</div>
                <span className="font-bold text-brand-navy text-lg">Final Quality Approval & Packing</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="/stitching_unit.jpg" 
              alt="Quality Control at A.D Garments" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-brand-navy/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
