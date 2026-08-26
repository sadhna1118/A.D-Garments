import AboutSection from "../components/sections/AboutSection";

const About = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-brand-navy py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Who Are We</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            A.D. Garments is a trusted garment manufacturing unit in Sangam Vihar, New Delhi, carrying a legacy of 30 years in excellence.
          </p>
        </div>
      </div>
      <AboutSection />
    </div>
  );
};

export default About;
