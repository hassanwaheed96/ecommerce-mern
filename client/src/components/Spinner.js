import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((val) => --val);
    }, 1000);
    count === 0 && navigate(`/${path}`, { state: location.pathname });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Redirecting in {count}</h1>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading in...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
