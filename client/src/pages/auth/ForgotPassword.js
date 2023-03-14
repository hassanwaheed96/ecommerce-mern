import React, { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/auth/forgot-password`,
        {
          email,
          newPassword,
          answer,
        }
      );
      console.log("RES: ", res);
      toast.success(res.data.success);
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Layout title={"Ecommerce - Register"}>
        <div>Reset Password</div>
        <form onSubmit={handleLogin}>
          <div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Security Answer
              </label>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default ForgotPassword;
