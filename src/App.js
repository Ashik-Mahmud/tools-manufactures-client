import { Route, Routes, useLocation } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageOrder from "./Pages/Dashboard/ManageOrder/ManageOrder";
import ManageProduct from "./Pages/Dashboard/ManageProduct/ManageProduct";
import Overview from "./Pages/Dashboard/Overview/Overview";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Profile from "./Pages/Dashboard/Profile/Profile";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Portfolios from "./Pages/Portfolios/Portfolios";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";
import NotFound from "./Shared/NotFound/NotFound";
function App() {
  const location = useLocation();

  return (
    <>
    {!location?.pathname.includes("dashboard") && <Navbar />}
      <Routes>
         {/*  Normal Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/purchase/:purchaseId" element={<Purchase />} />


         {/* Private Routes  */}
          {/* Dashboard Routes */}
          <Route path="/dashboard/" element={<Dashboard />} >
              <Route index element={<Overview />} /> 
              <Route path="add-product" element={<AddProduct />} /> 
              <Route path="manage-product" element={<ManageProduct />} />
              <Route path="manage-order" element={<ManageOrder />} /> 
              <Route path="profile" element={<Profile />} /> 
              <Route path="add-review" element={<AddReview />} /> 
              <Route path="make-admin" element={<MakeAdmin />}/>
              <Route path="payment" element={<Payment />} />
          </Route>



          {/* Not found Routes */}
          <Route path="*" element={<NotFound />} />
      </Routes>
      
      {!location?.pathname.includes("dashboard") && <Footer />}
      
    </>
  );
}

export default App;
