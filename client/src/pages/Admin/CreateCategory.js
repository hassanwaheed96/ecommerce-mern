import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";

const CreateCategory = () => {
  const [name, setName] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [id, setId] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Hello");
    console.log("Category name**", name);
    axios.post(`http://localhost:8080/api/v1/category/create-category`, {
      name,
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/category/get-category")
      .then((res) => {
        // console.log("Response: ", res.data.allCategories);
        setAllCategories(res.data.allCategories);
      });
    // allCategories;
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    console.log("Working** ", e);
    axios.put(`http://localhost:8080/api/v1/category/update-category/${id}`, {
      name,
    });
  };

  const editHandler = (id, name) => {
    console.log("Id and name: ", id, name);
    setId(id);
    setName(name);
  };

  return (
    <Layout>
      <h1>Create Category</h1>

      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h2>Create Category Form</h2>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="category-name">Category Name</label>
              <input
                type="text"
                className="form-control"
                id="category-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="click"
              className="btn btn-primary update"
              onClick={updateHandler}
            >
              Update
            </button>
          </form>

          <h2>All Categories</h2>

          {allCategories.map((el) => (
            <>
              <ul>
                <li>{el.name}</li>
                <span>
                  <button onClick={() => editHandler(el._id, el.name)}>
                    Edit
                  </button>
                </span>
              </ul>
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
