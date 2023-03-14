import React from "react";
import { Layout } from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";

const CreateProduct = () => {
  return (
    <Layout>
      <h1>Create Product</h1>

      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">Content</div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
