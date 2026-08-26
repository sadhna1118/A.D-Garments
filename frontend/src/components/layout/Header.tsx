import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-4"
          : "bg-white py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <img src="/logo.png" alt="A.D Garments Logo" className="h-16 md:h-20 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors tracking-wide">HOME</Link>
          <Link to="/about" className="text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors tracking-wide">WHO ARE WE</Link>
          <Link to="/products" className="text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors tracking-wide">WHAT WE MAKE</Link>
          <Link to="/infrastructure" className="text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors tracking-wide">CAPACITY</Link>
          <Link to="/gallery" className="text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors tracking-wide">GALLERY</Link>
          <Link to="/contact" className="text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors tracking-wide">CONTACT</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-brand-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link to="/" className="block text-brand-navy font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block text-brand-navy font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Who Are We</Link>
            <Link to="/products" className="block text-brand-navy font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>What We Make</Link>
            <Link to="/infrastructure" className="block text-brand-navy font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Capacity & Machinery</Link>
            <Link to="/gallery" className="block text-brand-navy font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Factory Photos</Link>
            <Link to="/contact" className="block text-brand-navy font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>Contact Details</Link>
            <Link
              to="/quote"
              className="bg-brand-navy text-white text-center px-6 py-3 rounded-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
