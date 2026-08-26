const Gallery = () => {
  const images = [
    "/ladies_dress_1.jpg",
    "/ladies_top_1.jpg",
    "/ladies_skirt.jpg",
    "/stitching_unit.jpg",
    "/logo.png",
    "/ladies_dress_1.jpg"
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-brand-navy py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Factory Photos</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Take a look inside our manufacturing unit in Sangam Vihar, featuring our motor machines, overlock setups, and dedicated team.
          </p>
        </div>
      </div>
      <div className="py-16 bg-brand-offwhite">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div key={index} className="rounded-sm overflow-hidden shadow-md group">
                <img 
                  src={img} 
                  alt={`Factory view ${index + 1}`} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
