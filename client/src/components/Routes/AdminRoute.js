import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import axios from "axios";
import Spinner from "../Spinner";

const AdminRoute = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [auth] = useAuth();
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/v1/auth/admin-auth`
      );
      res.data.ok ? setIsAdmin(true) : setIsAdmin(false);
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);
  return isAdmin ? <Outlet /> : <Spinner path="" />;
};

export default AdminRoute;
