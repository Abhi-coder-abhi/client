import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./components/Homepage/Homepage";
import OurCompany from "./CompanyPages/OurCompany/OurCompany";
import OurTeam from "./CompanyPages/OurTeam/OurTeam";
import News from "./CompanyPages/News/News";
import OurCompanySuccess from "./CompanyPages/OurCompanySuccess/OurCompanySuccess";
import ElevatorPCB from "./CompanyPages/Product/ElevatorPCB/ElevatorPCB";
import Inverter from "./CompanyPages/Product/Inverter/Inverter";
import ElevatorServiceTool from "./CompanyPages/Product/ElevatorServiceTool/ElevatorServiceTool";
import ElevatorWheel from "./CompanyPages/Product/ElevatorWheel/ElevatorWheel";
import NewInstallationServices from "./CompanyPages/Services/NewInstallationServices";
import AnnualMaintainenceServices from "./CompanyPages/Services/AnnualMaintainenceServices";
import BreakdownServices from "./CompanyPages/Services/BreakdownServices";
import Shop from "./CompanyPages/shop/Shop";
import ReturnandRefund from "./CompanyPages/customerServices/ReturnandRefund";
import ManageAddress from "./CompanyPages/customerServices/ManageAddress";
import ConsumerRegister from "./Auth/Signup/ConsumerRegister";
import ConsumerLogin from "./Auth/ConsumerLogin";
import EngineerRegister from "./Auth/Signup/EngineerRegister";
import EngineerLogin from "./Auth/EngineerLogin";
import AdminLogin from "./Auth/AdminLogin";
import ContactUs from "./components/ContactUs";
import Enquiry from "./components/Enquiry";
import PrevEnquiry from "./CompanyPages/customerServices/prevEnquiry";
import Maintenance from "./CompanyPages/Services/Maintenance";
import EscalatorAutowalkModernization from "./CompanyPages/Services/EscalatorAutowalkModernization";
import AddProduct from "./components/Admin/AddProduct";
import ElevatorButton from "./CompanyPages/Product/ElevatorButton/ElevatorButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShippingAddress from "./components/Shipping";
import UserProfile from "./Auth/UserProfile";
import ProductList from "./components/Admin/ProductList";
import EditProduct from "./components/Admin/EditProduct";
import AdminNewsList from "./components/Admin/NewsList";
import AddNews from "./components/Admin/AddNews";
import EditNews from "./components/Admin/EditNews";
import FeedbackPage from "./components/Admin/FeedbackPage";
import UsersList from "./components/Admin/UsersList";
import EngineerList from "./components/Admin/EngineerList";
import EngineerReview from "./components/Admin/EngineerReview";
import AdminInquiry from "./components/Admin/AdminInquiry";
import Products from "./CompanyPages/Product/Products";
import { useSelector } from "react-redux";
// import { cartProvider } from "./store/contextReducer";

function App() {
  const userId = useSelector((state) => state.user.userData);
  // console.log("userid in app", userId.isAdmin);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* {userId.isAdmin ? (
            <Route index element={<AdminInquiry />} />
          ) : (
            <Route index element={<Homepage />} />
          )} */}
          <Route index element={<Homepage />} />
          <Route path="/AdminInquiry" element={<AdminInquiry />} />
          <Route path="/about/ourcompany" element={<OurCompany />} />
          <Route path="/about/ourteam" element={<OurTeam />} />
          <Route path="/about/news" element={<News />} />
          <Route
            path="/about/ourcompanysuccess"
            element={<OurCompanySuccess />}
          />

          <Route path="/product/ELevatorPCB" element={<ElevatorPCB />} />
          <Route path="/product/Inverter" element={<Inverter />} />
          <Route path="/product/ElevatorButton" element={<ElevatorButton />} />
          <Route
            path="/product/ElevatorServiceTool"
            element={<ElevatorServiceTool />}
          />
          <Route path="/product/ElevatorWheel" element={<ElevatorWheel />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/products" element={<Products />} />

          <Route
            path="/services/NewInstallationServices"
            element={<NewInstallationServices />}
          />
          <Route
            path="/services/AnnualMaintainenceServices"
            element={<AnnualMaintainenceServices />}
          />
          <Route
            path="/services/BreakdownServices"
            element={<BreakdownServices />}
          />
          <Route path="/services/Maintenance" element={<Maintenance />} />
          <Route
            path="/services/EscalatorAutowalkModernization"
            element={<EscalatorAutowalkModernization />}
          />

          <Route path="/shop" element={<Shop />} />

          <Route
            path="/customerservices/ReturnandRefunds"
            element={<ReturnandRefund />}
          />
          <Route
            path="/customerservices/ManageAddress"
            element={<ManageAddress />}
          />
          <Route
            path="/auth/consumerRegistration"
            element={<ConsumerRegister />}
          />
          <Route
            path="/auth/engineerRegistration"
            element={<EngineerRegister />}
          />

          <Route path="/auth/consumerLogin" element={<ConsumerLogin />} />
          <Route path="/auth/EngineerLogin" element={<EngineerLogin />} />
          <Route path="/auth/AdminLogin" element={<AdminLogin />} />
          <Route path="/auth/UserProfile" element={<UserProfile />} />

          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Enquiry" element={<Enquiry />} />
          <Route path="/prevEnquiry" element={<PrevEnquiry />} />
          <Route path="/shipping" element={<ShippingAddress />} />

          <Route path="/admin/productList" exact element={<ProductList />} />
          <Route path="/admin/edit/:id" element={<EditProduct />} />
          <Route path="/AdminInquiry" element={<AdminInquiry />} />
          <Route path="/admin/addnews" element={<AddNews />} />
          <Route path="/admin/newsList" element={<AdminNewsList />} />
          <Route path="/admin/newsedit/:id" element={<EditNews />} />
          <Route path="/admin/UsersList" element={<UsersList />} />
          <Route path="/admin/EngineerList" element={<EngineerList />} />
          <Route path="/admin/EnginnerReview" element={<EngineerReview />} />

          <Route path="/admin/feedback" element={<FeedbackPage />} />
        </Route>
      </Routes>
      <ToastContainer limit={1} position="bottom-center" />
    </>
  );
}

export default App;
