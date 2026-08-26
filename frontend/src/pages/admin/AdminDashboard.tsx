import { useState, useEffect } from "react";
import { MessageSquare, Clock, CheckCircle, XCircle } from "lucide-react";

// Placeholder data for frontend demonstration
const mockEnquiries = [
  { id: "1", name: "Rahul Sharma", company: "Fashion Hub", category: "T-Shirts", quantity: "5000", status: "New", date: "2026-08-25" },
  { id: "2", name: "Priya Desai", company: "Uniformity Inc", category: "Uniforms", quantity: "1200", status: "In Discussion", date: "2026-08-24" },
  { id: "3", name: "Amit Kumar", company: "Urban Wear", category: "Shirts", quantity: "3000", status: "Quoted", date: "2026-08-22" },
  { id: "4", name: "Vikram Singh", company: "", category: "Trousers", quantity: "800", status: "Confirmed", date: "2026-08-20" },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Total Enquiries</p>
            <p className="text-3xl font-bold text-brand-navy">124</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
            <MessageSquare size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">New / Pending</p>
            <p className="text-3xl font-bold text-yellow-600">12</p>
          </div>
          <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center">
            <Clock size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Confirmed</p>
            <p className="text-3xl font-bold text-green-600">45</p>
          </div>
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
            <CheckCircle size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Rejected</p>
            <p className="text-3xl font-bold text-red-600">8</p>
          </div>
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center">
            <XCircle size={24} />
          </div>
        </div>
      </div>

      {/* Recent Enquiries Table */}
      <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-brand-charcoal">Recent Enquiries</h2>
          <button className="text-sm text-brand-gold font-medium hover:text-brand-navy transition-colors">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 text-xs uppercase">
              <tr>
                <th className="px-6 py-3 font-semibold">Date</th>
                <th className="px-6 py-3 font-semibold">Client</th>
                <th className="px-6 py-3 font-semibold">Category</th>
                <th className="px-6 py-3 font-semibold">Quantity</th>
                <th className="px-6 py-3 font-semibold">Status</th>
                <th className="px-6 py-3 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockEnquiries.map((enquiry) => (
                <tr key={enquiry.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-6 py-4 whitespace-nowrap">{enquiry.date}</td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-800">{enquiry.name}</p>
                    {enquiry.company && <p className="text-xs text-gray-500">{enquiry.company}</p>}
                  </td>
                  <td className="px-6 py-4">{enquiry.category}</td>
                  <td className="px-6 py-4">{enquiry.quantity} pcs</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${enquiry.status === 'New' ? 'bg-yellow-100 text-yellow-800' :
                        enquiry.status === 'In Discussion' ? 'bg-blue-100 text-blue-800' :
                          enquiry.status === 'Quoted' ? 'bg-purple-100 text-purple-800' :
                            enquiry.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                              'bg-gray-100 text-gray-800'
                      }`}>
                      {enquiry.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-brand-navy hover:text-brand-gold font-medium">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
