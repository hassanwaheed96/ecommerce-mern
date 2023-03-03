import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="bg-dark text-light p-3">
        <h4 className="text-center">All rights reserved &copy; Hassan</h4>
        <p className="text-center mt-3">
          <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> |{" "}
          <Link to="/policy">Policy</Link>
        </p>
      </div>
    </>
  );
};
