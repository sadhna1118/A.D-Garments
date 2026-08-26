import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    client: "Paramount",
    content: "A.D Garments has been our most reliable production partner. Their stitching quality and commitment to timely delivery are unmatched in the industry.",
    role: "Sourcing Manager"
  },
  {
    id: 2,
    client: "SMS",
    content: "The overlock setups and highly skilled workforce at A.D Garments ensure that every ladies' dress we produce through them meets strict quality standards.",
    role: "Production Head"
  },
  {
    id: 3,
    client: "Ramp Rage Export",
    content: "We've trusted A.D Garments for years. Their attention to detail on complex fashion wear and their massive daily capacity makes our export operations smooth.",
    role: "Managing Director"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-brand-charcoal text-white" id="testimonials">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 text-lg">
            Trusted by top fashion exporters and brands for premium ladies garment manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-brand-navy p-8 rounded-sm shadow-xl border-t-4 border-brand-gold relative hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote size={40} className="text-gray-700 absolute top-6 right-6 opacity-50" />
              <div className="mb-6 mt-4">
                <p className="text-gray-300 leading-relaxed italic text-lg">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="mt-8 border-t border-gray-700 pt-4">
                <h4 className="text-xl font-bold text-white">{testimonial.client}</h4>
                <p className="text-brand-gold text-sm font-semibold tracking-wider uppercase mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
