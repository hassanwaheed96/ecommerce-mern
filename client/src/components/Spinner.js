import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((val) => --val);
    }, 1000);
    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count, navigate]);
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
