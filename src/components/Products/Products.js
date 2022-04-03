import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState([])

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

const handleAddToCart = (product) =>{
      
      let newCart = []
      //finding already exist product in cart

      const alreadyAdded = cart.find(item => item.id === product.id)

      // If our product is new and not existing in our cart we will use this condition
      if(!alreadyAdded && cart.length < 4){
        //here we are setting new quantity
        product.quantity = 1
        newCart = [...cart,product]
        setCart(newCart);
      }
      // if product already exist than we will use this 
      else{
        //filtering cart and add to rest array
        //when we click 2nd time on add to cart button then only selected products quantity increasing by 1
        const rest = cart.filter(item => item.id !== product.id)

        product.quantity = product.quantity + 1;
        newCart = [...rest,product]
        setCart(newCart);
      }
  }
  return (
    <div>
      <Cart cart={cart}></Cart>
      <h1 className="text-5xl my-3 text-center font-medium">New Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto">
      {products.map((product) => (
        <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
      ))}
      </div>
    </div>
  );
};

export default Products;
