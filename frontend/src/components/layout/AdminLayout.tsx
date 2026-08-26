import { Outlet, Navigate, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, MessageSquare, Image, LogOut, FileText, Users, Settings } from "lucide-react";

const AdminLayout = () => {
  // In a real app, this would check a token or context
  const isAuthenticated = true; 
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} /> },
    { name: "Enquiries", path: "/admin/enquiries", icon: <MessageSquare size={20} /> },
    { name: "Categories", path: "/admin/categories", icon: <FileText size={20} /> },
    { name: "Gallery", path: "/admin/gallery", icon: <Image size={20} /> },
    { name: "Clients", path: "/admin/clients", icon: <Users size={20} /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-brand-navy text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold tracking-tight">A.D GARMENTS</h2>
          <p className="text-xs text-gray-400 mt-1">Admin Panel</p>
        </div>
        
        <nav className="flex-1 px-4 mt-6 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                  isActive 
                    ? "bg-brand-gold text-brand-navy font-semibold" 
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button className="flex items-center space-x-3 px-4 py-3 w-full text-left text-gray-300 hover:bg-white/10 hover:text-white rounded-md transition-colors">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">
            {menuItems.find(item => item.path === location.pathname)?.name || "Dashboard"}
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 font-medium">Welcome, Admin</span>
            <div className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
