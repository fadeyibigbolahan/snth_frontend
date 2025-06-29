import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "@/components/ui/skeleton";
import PaypalReturnPage from "./pages/shopping-view/paypal-return";
import PaymentSuccessPage from "./pages/shopping-view/payment-success";
import SearchProducts from "./pages/shopping-view/search";

import Homepage from "./pages/mlm/HomePage";
import SigninPage from "./pages/mlm/SigninPage";
import SignupPage from "./pages/mlm/SignupPage";
import ContactVendorPage from "./pages/mlm/ContactVendorPage";

import DashboardPage from "./pages/mlm/DashboardPage";
import TransactionPage from "./pages/mlm/TransactionPage";
import AffiliatePage from "./pages/mlm/AffiliatePage";
// import AffiliateUpgradePage from "./pages/mlm/AffiliateUpgradePage";
import SupportPage from "./pages/mlm/SupportPage";
// import PaymentPage from "./pages/mlm/PaymentPage";
// import GeneratePackageCodesPage from "./pages/mlm/GeneratePackageCodesPage";
// import AdminWithdrawalsPage from "./pages/mlm/AdminWithdrawalsPage";
// import AddEarningPage from "./pages/mlm/AddEarningPage";
import MyPVPage from "./pages/mlm/MyPVPage";
// import UserPVPage from "./pages/mlm/UserPVPage";
import Layout from "./pages/mlm/layout";
import ProductPage from "./pages/mlm/ProductPage";
import PaymentPage from "./pages/mlm/PaymentPage";
import AdminWithdrawalsPage from "./pages/admin-view/AdminWithdrawalsPage";
import GenerateCodesPage from "./pages/admin-view/GenerateCodesPage";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  console.log(isLoading, user);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<SigninPage />} />
          <Route path="register" element={<SignupPage />} />
        </Route>

        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="generate-codes" element={<GenerateCodesPage />} />
          <Route path="withdrawals" element={<AdminWithdrawalsPage />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="paypal-return" element={<PaypalReturnPage />} />
          <Route path="payment-success" element={<PaymentSuccessPage />} />
          <Route path="search" element={<SearchProducts />} />
        </Route>

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="transactions" element={<TransactionPage />} />
          <Route path="payments" element={<PaymentPage />} />
          <Route path="my-PV" element={<MyPVPage />} />
        </Route>

        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="/contact-vendor" element={<ContactVendorPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
