import React from "react";

function Product(props) {
  if (!props.product) return null;
  const productProp = props.product;
  console.log(productProp);
  return (
    <div style={{ border: "1px solid black" }}>
      <img src={productProp.productImage} id="prod-img" alt="" />
      <h3 className="prod-name">{productProp.name}</h3>
      <div className="prod-category">Category: {productProp.category}</div>
      <div className="prod-price">Price: ${productProp.price}</div>
      <button>Add to cart</button>
    </div>
  );
}

export default Product;











































































































































// import { cleanup } from "@testing-library/react";
// import React, { useState, useEffect } from "react";

// const products = () => {
//   const [data, setdata] = useState([]);
//   const [filter, setFilter] = useState(data);
//   const [loading, setLoading] = useState(false);
//   let componentMounted = true;
//   const mockProduct = [
    
//     {  name: "",
//       desc: "",
//       url: "",
//       qy: "",
//     },
//   ];

//   useEffect(() => {
//     const getProducts = async () => {};
//   }, [input]);

//   return <div></div>;
// };

// export default products;
