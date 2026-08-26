import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappNumber = "919350537559"; // Owner: Manoj Kumar
  const message = encodeURIComponent(
    "Hello A.D Garments, I am interested in your garment fabrication/stitching services. I would like to discuss a production requirement."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm py-2 px-4 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium">
        Chat with us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
