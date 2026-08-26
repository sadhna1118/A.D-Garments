import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ServicesSection from "../components/sections/ServicesSection";
import ProcessSection from "../components/sections/ProcessSection";
import CategoriesSection from "../components/sections/CategoriesSection";
import InfrastructureSection from "../components/sections/InfrastructureSection";
import QualitySection from "../components/sections/QualitySection";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>A.D Garments | Garment Fabrication & Stitching Solutions</title>
        <meta name="description" content="Reliable garment fabrication and stitching partner. We convert supplied materials, designs and production requirements into finished garments." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-brand-charcoal overflow-hidden">
        {/* Placeholder for Video/Image */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: "url('/logo.png')" }}
        />
        
        <div className="container mx-auto px-6 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Ladies Garment <br/>Fabrication & Stitching
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
            Specialized manufacturing support for women's fashion brands — from precision stitching of dresses and tops to quality-controlled delivery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/quote" 
              className="bg-brand-gold text-brand-navy px-8 py-4 rounded-sm font-semibold text-lg hover:bg-white transition-all transform hover:scale-105"
            >
              Get a Production Quote
            </Link>
            <Link 
              to="/gallery" 
              className="bg-transparent border border-white text-white px-8 py-4 rounded-sm font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Explore Our Factory
            </Link>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base text-gray-300 font-medium">
            <div className="flex items-center space-x-2">
              <CheckCircle size={18} className="text-brand-gold" />
              <span>Quality Focused</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={18} className="text-brand-gold" />
              <span>Bulk Production</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={18} className="text-brand-gold" />
              <span>Skilled Workforce</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={18} className="text-brand-gold" />
              <span>Timely Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Intro Section */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">
            Built for Businesses. Focused on Quality.
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            A.D Garments works with companies and brands as a reliable garment fabrication and stitching partner. We convert supplied materials, designs and production requirements into finished garments through organized production, skilled stitching and quality-control processes.
          </p>
          <Link 
            to="/about" 
            className="inline-flex items-center space-x-2 text-brand-navy font-semibold hover:text-brand-gold transition-colors"
          >
            <span>Know More About A.D Garments</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <ServicesSection />
      <ProcessSection />
      <CategoriesSection />
      <InfrastructureSection />
      <QualitySection />
      {/* Final CTA */}
      <section className="py-24 bg-brand-gold text-brand-navy text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Your Next Production Batch.
          </h2>
          <p className="text-lg text-brand-navy/80 font-medium mb-10">
            Have a garment production requirement? Share your specifications with A.D Garments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/quote" 
              className="bg-brand-navy text-white px-8 py-4 rounded-sm font-semibold hover:bg-white hover:text-brand-navy transition-colors shadow-lg"
            >
              Request a Quote
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-brand-navy text-brand-navy px-8 py-4 rounded-sm font-semibold hover:bg-brand-navy hover:text-white transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
