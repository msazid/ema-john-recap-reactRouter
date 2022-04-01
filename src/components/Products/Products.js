import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl my-3 text-medium">New Products</h1>
      <Link to='/productDetail'  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto">
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
      </Link>
    </div>
  );
};

export default Products;
