import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Portfolios from "./Pages/Portfolios/Portfolios";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";
import NotFound from "./Shared/NotFound/NotFound";
function App() {
  return (
    <>
     <Navbar />
      <Routes>
         {/*  Normal Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/purchase/:purchaseId" element={<Purchase />} />

          {/* Not found Routes */}}
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
