import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pagenotfound from "./pages/Pagenotfound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import { Layout } from "./components/Layout/Layout";
import { Helmet } from "react-helmet";
import Register from "./pages/auth/Register";

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
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
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
