import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">A.D GARMENTS</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              GST Registered Business (GSTIN:07AMSPK66981LZX)<br/><br/>
              A.D. Garments is a garment manufacturing unit in Sangam Vihar, NEW Delhi with 30 years of excellence. We specialize in stitching and production of ladies tops, dresses, skirts, shirts and fashion wear.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61589594803875" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-navy transition-all">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.instagram.com/ad_garment?igsi=MXJxdWE0Y2duMWRsbA==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-navy transition-all">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">Who Are We?</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-gold transition-colors">What We Make</Link>
              </li>
              <li>
                <Link to="/infrastructure" className="hover:text-brand-gold transition-colors">Capacity & Machinery</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brand-gold transition-colors">Factory Photos</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-brand-gold shrink-0 mt-1" />
                <span className="text-gray-300">
                  <a href="https://share.google/3WK86lVMkAPdH4Nk9" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">
                    View on Google Maps
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-brand-gold shrink-0" />
                <a href="tel:+919350537559" className="text-gray-300 hover:text-brand-gold transition-colors">+91 9350537559</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-gold shrink-0" />
                <a href="mailto:manojkumar9350537559@gmail.com" className="text-gray-300 hover:text-brand-gold transition-colors break-all">manojkumar9350537559@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Business Enquiry */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Business Enquiry</h3>
            <p className="text-gray-300 mb-6">
              Ready to discuss your bulk garment production requirements?
            </p>
            <div className="flex flex-col space-y-3">
              <Link
                to="/quote"
                className="bg-brand-gold text-brand-navy font-semibold px-6 py-3 rounded-sm text-center hover:bg-white transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href="https://wa.me/919350537559"
                target="_blank"
                rel="noreferrer"
                className="border border-brand-gold text-brand-gold font-semibold px-6 py-3 rounded-sm text-center hover:bg-brand-gold hover:text-brand-navy transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center md:text-left md:flex md:justify-between items-center text-sm text-gray-400">
          <p>© 2026 A.D Garments. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
