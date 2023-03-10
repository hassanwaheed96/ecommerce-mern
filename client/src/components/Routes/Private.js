import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import axios from "axios";
import Spinner from "../Spinner";

const PrivateRoute = () => {
  const [isUser, setIsUser] = useState(false);
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/v1/auth/user-auth`
      );
      res.data.ok ? setIsUser(true) : setIsUser(false);
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);
  return isUser ? <Outlet /> : <Spinner />;
};

export default PrivateRoute;
