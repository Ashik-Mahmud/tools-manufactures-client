import { createContext } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation } from "react-router-dom";
import RequireAdmin from "./Auth/RequireAdmin";
import RequireAuth from "./Auth/RequireAuth";
import RequireUser from "./Auth/RequireUser";
import useFirebase from "./Hooks/useFirebase";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageOrder from "./Pages/Dashboard/ManageOrder/ManageOrder";
import ManageProduct from "./Pages/Dashboard/ManageProduct/ManageProduct";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
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
export const AuthContext = createContext(null)
function App() {
  const location = useLocation();
  const {isAuth, user} = useFirebase();
  
  
  return (
    <>
    <Toaster />
    <AuthContext.Provider value={{isAuth, user}}>
    {!location?.pathname.includes("dashboard") && <Navbar />}
      <Routes>
         {/*  Normal Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/contact" element={<Contact />} />


         {/* Private Routes  */}
          <Route path="/purchase/:purchaseId" element={<RequireAuth><Purchase /></RequireAuth>} />
          {/* Dashboard Routes */}
          <Route path="/dashboard/" element={<RequireAuth><Dashboard /></RequireAuth>} >
              <Route index element={<Overview />} /> 
              <Route path="add-product" element={<RequireAdmin><AddProduct /></RequireAdmin>} /> 
              <Route path="manage-product" element={<RequireAdmin><ManageProduct /></RequireAdmin>} />
              <Route path="manage-order" element={<RequireAdmin><ManageOrder /></RequireAdmin>} /> 
              <Route path="my-orders" element={<RequireUser><MyOrders /></RequireUser>} /> 
              <Route path="payment/:paymentId" element={<Payment />} />
              <Route path="profile" element={<Profile />} /> 
              <Route path="add-review" element={<RequireUser><AddReview /></RequireUser>} /> 
              <Route path="make-admin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>}/>
          </Route>



          {/* Not found Routes */}
          <Route path="*" element={<NotFound />} />
      </Routes>
      
      {!location?.pathname.includes("dashboard") && <Footer />}
      </AuthContext.Provider>
    </>
  );
}

export default App;
