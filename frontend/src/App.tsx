import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Process from "./pages/Process";
// import Gallery from "./pages/Gallery";
// import Quality from "./pages/Quality";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import AdminLayout from "./components/layout/AdminLayout";
import About from "./pages/About";
import Products from "./pages/Products";
import Infrastructure from "./pages/Infrastructure";
import Gallery from "./pages/Gallery";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";

import FloatingWhatsApp from "./components/layout/FloatingWhatsApp";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quote" element={<Quote />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          {/* Add more admin pages here (enquiries, categories, etc.) */}
        </Route>
      </Routes>
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
