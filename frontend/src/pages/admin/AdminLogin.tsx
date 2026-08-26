import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User } from "lucide-react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (username && password) {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-brand-charcoal flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-sm shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center items-end mb-2">
            <span className="text-3xl font-serif font-bold text-brand-charcoal tracking-tight">A.D.</span>
            <span className="text-3xl font-serif font-bold text-brand-charcoal tracking-widest ml-1">GARMENTS</span>
          </div>
          <p className="text-brand-gold font-bold tracking-[0.2em] text-xs">ADMINISTRATION</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-sm focus:ring-brand-navy focus:border-brand-navy bg-gray-50"
                placeholder="admin"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-400" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-sm focus:ring-brand-navy focus:border-brand-navy bg-gray-50"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-brand-navy hover:bg-brand-charcoal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-navy transition-colors"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
