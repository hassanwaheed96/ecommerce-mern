import React from "react";
import { Layout } from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard"}>
      <h1>User Dashboard</h1>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-50">
              <div className="card-body">
                <h5 className="card-title">User Name: {auth?.user?.name}</h5>
                <h6 className="card-subtitle text-muted">
                  User Email: {auth?.user?.email}
                </h6>
                <p className="card-text">User Contact: {auth?.user?.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
