import React, { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState();

  submitHandler = () => {};
  return (
    <Layout>
      <h1>Create Category</h1>

      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h2>Create Category Form</h2>
          <form onSubmit={submitHandler()}>
            <div className="form-group">
              <label htmlFor="category-name">Category Name</label>
              <input type="text" className="form-control" id="category-name" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
