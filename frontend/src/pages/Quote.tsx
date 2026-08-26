import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Send, Upload, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  city: string;
  category: string;
  quantity: string;
  deliveryDate: string;
  requirement: string;
  message: string;
};

const Quote = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // In a real app, send data to backend API
    setIsSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Request a Quote | A.D Garments</title>
        <meta name="description" content="Request a garment production quote from A.D Garments." />
      </Helmet>

      <div className="pt-24 pb-16 bg-brand-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Production Quote</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Share your garment requirements with A.D Garments and discuss your production needs with our team.
          </p>
        </div>
      </div>

      <section className="py-16 bg-brand-offwhite">
        <div className="container mx-auto px-6 max-w-4xl">
          {isSubmitted ? (
            <div className="bg-white p-12 text-center rounded-sm shadow-md border border-gray-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-500 rounded-full mb-6">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Enquiry Received</h2>
              <p className="text-gray-600 text-lg">
                Thank you. Your production enquiry has been received. Our team will review your requirements and contact you shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-brand-gold font-medium hover:text-brand-navy transition-colors"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 md:p-12 rounded-sm shadow-md border border-gray-100">
              
              <div className="mb-8 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-semibold text-brand-navy">Contact Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input 
                    {...register("fullName", { required: true })} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    placeholder="Enter your name"
                  />
                  {errors.fullName && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input 
                    {...register("companyName")} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    placeholder="Your company or brand"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    {...register("phone", { required: true })} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    placeholder="Mobile or WhatsApp number"
                  />
                  {errors.phone && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email"
                    {...register("email", { required: true })} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    placeholder="Your business email"
                  />
                  {errors.email && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">City / Location</label>
                  <input 
                    {...register("city")} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    placeholder="Your city"
                  />
                </div>
              </div>

              <div className="mb-8 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-semibold text-brand-navy">Production Requirements</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Garment Category *</label>
                  <select 
                    {...register("category", { required: true })} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  >
                    <option value="">Select Category</option>
                    <option value="T-Shirts">T-Shirts</option>
                    <option value="Shirts">Shirts</option>
                    <option value="Uniforms">Uniforms</option>
                    <option value="Workwear">Workwear</option>
                    <option value="Trousers">Trousers / Pants</option>
                    <option value="Other">Other (Specify in message)</option>
                  </select>
                  {errors.category && <span className="text-red-500 text-sm mt-1">Please select a category</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Approximate Quantity *</label>
                  <input 
                    {...register("quantity", { required: true })} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    placeholder="e.g. 1000 pieces"
                  />
                  {errors.quantity && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expected Delivery Date</label>
                  <input 
                    type="date"
                    {...register("deliveryDate")} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select 
                    {...register("requirement")} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  >
                    <option value="Fabrication Only">Stitching & Fabrication Only</option>
                    <option value="Fabric Procurement & Stitching">Fabric Procurement + Stitching</option>
                    <option value="End to End">End-to-End Production</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Design / Specification (Optional)</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-sm cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-gray-400" />
                        <p className="text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PDF, JPG or PNG (MAX. 10MB)</p>
                      </div>
                      <input 
                        type="file" 
                        className="hidden" 
                        onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                      />
                    </label>
                  </div>
                  {fileName && <p className="text-sm text-brand-navy mt-2 font-medium">Selected file: {fileName}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                  <textarea 
                    {...register("message")} 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    placeholder="Provide any additional details about your requirement..."
                  ></textarea>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  type="submit"
                  className="w-full md:w-auto bg-brand-navy text-white px-10 py-4 rounded-sm font-semibold flex items-center justify-center space-x-2 hover:bg-brand-charcoal transition-colors"
                >
                  <Send size={20} />
                  <span>Send Production Enquiry</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Quote;
