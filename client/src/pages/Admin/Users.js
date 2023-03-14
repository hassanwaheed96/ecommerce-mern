import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import { Layout } from "../../components/Layout/Layout";

const Users = () => {
  return (
    <Layout>
      <h1>Create Users</h1>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">Content</div>
      </div>
    </Layout>
  );
};

export default Users;
