import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Placeholder data - in a real app, this would be fetched from the backend
const categories = [
  {
    id: "dresses",
    name: "Dresses",
    description: "Premium stitched ladies dresses from casual to formal wear.",
    image: "/ladies_dress_1.jpg"
  },
  {
    id: "tops",
    name: "Tops & Shirts",
    description: "High-quality stitching for women's tops, shirts, and blouses.",
    image: "/ladies_top_1.jpg"
  },
  {
    id: "skirts",
    name: "Skirts",
    description: "Expert fabrication of skirts and lower garments.",
    image: "/ladies_skirt.jpg"
  },
  {
    id: "party",
    name: "Party Wear",
    description: "Intricate stitching for evening and party wear collections.",
    image: "/ladies_dress_1.jpg"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-24 bg-white" id="categories">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Garment Categories</h2>
            <p className="text-gray-600 text-lg">
              We manufacture a wide range of garments according to client specifications. 
              These are some of our primary production categories.
            </p>
          </div>
          <Link 
            to="/quote" 
            className="hidden md:inline-flex items-center space-x-2 text-brand-gold font-semibold hover:text-brand-navy transition-colors mt-6 md:mt-0"
          >
            <span>Enquire About All Categories</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] mb-4 bg-gray-100">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Link 
                    to={`/quote?category=${encodeURIComponent(category.name)}`}
                    className="w-full text-center bg-white text-brand-navy py-3 font-semibold text-sm hover:bg-brand-gold hover:text-white transition-colors"
                  >
                    Enquire About This
                  </Link>
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
