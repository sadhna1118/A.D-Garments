import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock, MessageCircle, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | A.D Garments</title>
        <meta name="description" content="Contact A.D Garments for bulk garment production and job-work requirements." />
      </Helmet>

      <div className="pt-36 pb-16 bg-brand-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact A.D Garments</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us to discuss your garment manufacturing needs.
          </p>
        </div>
      </div>

      <section className="py-20 bg-brand-offwhite">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info Cards */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-brand-navy mb-8">Factory Details</h2>
              
              <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex items-start space-x-6">
                <div className="bg-brand-navy/5 p-4 rounded-full text-brand-gold shrink-0">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-charcoal mb-2">Factory Address</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Owned by: Manoj Kumar<br />
                    New Delhi, India
                  </p>
                  <a href="https://share.google/3WK86lVMkAPdH4Nk9" target="_blank" rel="noreferrer" className="inline-block mt-4 text-brand-gold font-medium hover:text-brand-navy transition-colors">
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex items-start space-x-6">
                <div className="bg-brand-navy/5 p-4 rounded-full text-brand-gold shrink-0">
                  <Phone size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-charcoal mb-2">Contact Numbers</h3>
                  <p className="text-gray-600 mb-1">+91 9350537559</p>
                  <p className="text-gray-600 mb-4">WhatsApp: +91 9350537559</p>
                  <div className="flex space-x-4">
                    <a href="tel:+919350537559" className="flex items-center space-x-2 text-brand-navy hover:text-brand-gold transition-colors font-medium">
                      <PhoneCall size={18} />
                      <span>Call Now</span>
                    </a>
                    <a href="https://wa.me/919350537559" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors font-medium">
                      <MessageCircle size={18} />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex items-start space-x-6">
                <div className="bg-brand-navy/5 p-4 rounded-full text-brand-gold shrink-0">
                  <Mail size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-charcoal mb-2">Email Address</h3>
                  <a href="mailto:manojkumar9350537559@gmail.com" className="text-gray-600 hover:text-brand-gold transition-colors break-all">
                    manojkumar9350537559@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex items-start space-x-6">
                <div className="bg-brand-navy/5 p-4 rounded-full text-brand-gold shrink-0">
                  <Clock size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-charcoal mb-2">Working Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>

            </div>

            {/* Google Maps Placeholder */}
            <div className="w-full h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.091600065747!2d77.24520197545338!3d28.506891675733666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce15c5244cf2b%3A0x7e4bf888ac5cab65!2sA.D.%20GARMENTS!5e0!3m2!1sen!2sin!4v1787758767896!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-sm"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
