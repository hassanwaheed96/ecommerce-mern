import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  // get categories
  const getAllCategories = async () => {
    try {
      await axios
        .get("http://localhost:8080/api/v1/category/get-category")
        .then((res) => {
          setCategories(res.data.allCategories);
        });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong with categories");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello I am here");
    try {
      let productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("category", category);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("shipping", shipping);
      productData.append("photo", photo);
      // productData = [
      //   {
      //     name,
      //     description,
      //     category,
      //     price,
      //     quantity,
      //     shipping,
      //     photo,
      //   },
      // ];
      console.log("Dataaa** ", shipping);
      await axios.post(
        `http://localhost:8080/api/v1/product/create-product`,
        productData
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const photoChangeHandler = (e) => {
    console.log("Yaar please aja, ", e.target.files[0].name);
  };

  useEffect(() => {
    getAllCategories();
    axios
      .get(`http://localhost:8080/api/v1/product/get-products`)
      .then((res) => {
        console.log("Get product** ", res);
        setAllProducts(res.data.products);
      });

    // axios.get(`http://localhost:8080/api/v1/product-photo/`)
  }, []);
  return (
    <Layout>
      <h1>Create Product</h1>

      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h2>Product Create Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="product-category">Category</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(value) => setCategory(value.target.value)}
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT">Select option</option>
                {categories.map((el) => (
                  <>
                    <option key={el._id} value={el._id}>
                      {el.name}
                    </option>
                  </>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="btn btn-outline-secondary">
                {photo ? photo.name : "Upload Photo"}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                />
              </label>
            </div>
            <div className="form-group">
              {photo && (
                <img
                  src={URL.createObjectURL(photo)}
                  alt="product photo"
                  height={200}
                  width={200}
                />
              )}
            </div>
            <div className="form-group">
              <label htmlFor="product-name">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="product-name"
                placeholder="Enter Product Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="product-price">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control"
                id="product-price"
                placeholder="Product Price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="product-quantity">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="form-control"
                id="product-quantity"
                placeholder="Product Quantity"
              />
            </div>
            <div className="form-group">
              <label htmlFor="product-description">Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                id="product-description"
                placeholder="Product Description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="product-shipping">Shipping</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(value) => setShipping(value.target.value)}
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT">Select option</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          <h2>All Products</h2>
          {allProducts.map((el) => (
            <div className="card">
              <img
                width={200}
                height={200}
                src={`http://localhost:8080/api/v1/product/product-photo/${el._id}`}
              />
              <h4>{el.name}</h4>
              <p>${el.price}</p>
              <p>{el.quantity}</p>
              <p>{el.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
