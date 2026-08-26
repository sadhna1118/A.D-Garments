const AboutSection = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="/stitching_unit.jpg" 
                alt="Garment Stitching Unit" 
                className="rounded-sm shadow-xl relative z-10 w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold rounded-sm -z-10" />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="mb-6 inline-block border-b-2 border-brand-gold pb-1">
              <span className="text-sm font-bold text-brand-navy tracking-widest uppercase">ABOUT A.D GARMENTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">
              A Legacy of Excellence in Garment Manufacturing
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg">
              <p className="leading-relaxed">
                <strong>GST Registered Business (GSTIN:07AMSPK66981LZX)</strong><br /><br />
                A.D. Garments is a premier garment manufacturing unit located in Sangam Vihar, NEW Delhi. We bring over <strong>30 years of industry experience</strong> in high-quality apparel fabrication.
              </p>
              <p className="leading-relaxed">
                We specialize in the stitching and production of ladies tops, dresses, skirts, shirts, and fashion wear from company-provided samples and cutting materials. Our commitment is to provide flawless quality stitching, precise finishing, and reliable bulk garment production services for top fashion brands and exporters.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="border-l-2 border-brand-gold pl-4">
                <span className="block text-3xl font-bold text-brand-navy mb-1">30+</span>
                <span className="text-gray-500 font-medium">Years Experience</span>
              </div>
              <div className="border-l-2 border-brand-gold pl-4">
                <span className="block text-3xl font-bold text-brand-navy mb-1">50+</span>
                <span className="text-gray-500 font-medium">Expert Workers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
