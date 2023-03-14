import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pagenotfound from "./pages/Pagenotfound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import { Layout } from "./components/Layout/Layout";
// import { Helmet } from "react-helmet";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";

// function App({ title, description, keywords, author }) {
function App() {
  return (
    <>
      {/* <Layout> */}
      {/* <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      {/* </Layout> */}
    </>
  );
}

Layout.defaultProps = {
  title: "Ecommerce App",
  description: "Mern stack app",
  keywords: "mern, react, node, mongodb",
  author: "Hassan",
};

export default App;
