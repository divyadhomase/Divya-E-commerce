import React,{useState,useEffect} from "react";
import "./product.css";

// const Product = () => {

//   const [data,setData]=useState([]);
//   const [filter,setFilter]=useState([]);
//   const [loading,setLoading]=useState(false);
  


  // useEffect(()=>{
  //     const getProducts=async()=>{
  //       setLoading(true);
  //       const response=await fetch("https://run.mocky.io/v3/4c63603a-db22-4e32-9bf9-797d356085c1");      
  //       const data=await response.json();
  //       console.log(data);
  //     }
  //   getProducts();
  // },[]);

 

 
  
//  useEffect(()=>{
//   fetch('https://run.mocky.io/v3/4c63603a-db22-4e32-9bf9-797d356085c1')
//   .then((response) => response.json())
//   .then((data) => setData(data));
//  },[])
//  return(
//   <div>
//        {data.map(Product=>{
//           <h1>{Product.id}</h1>
//        })}
//      </div>
//  )





  // const Loading=()=>{
  //   return(
  //     <>
  //         products
  //     </>
  //   )
  // }

//   const ShowProducts =()=> {
//     return(
//       <>
//          <div className="buttons d-flex justify-content-center mb-5 pb-5">
//       <button className="btn btn-outline-dark me-2">All</button>
//       <button className="btn btn-outline-dark me-2">Men's Clothing</button>
//       <button className="btn btn-outline-dark me-2">Women's Clothing</button>
//       <button className="btn btn-outline-dark me-2">Jwelery</button>
//       <button className="btn btn-outline-dark me-2">Electronics</button>
//     </div>
//      {/* {filter.map((data)=>{
//       return(
//          <>
//          <div className="">
//           <h1>{data.title}</h1>

//          </div>
//          </>
//       )
//     })}  */}
//       </>
//     )
    
//   }



//   return (
//     <div>
//       <div className="container my-5 py-5">
//           <div className="row">
//              <div className="col-12 mb-5">
//                  <h1 className="display-6 fw-bolder
//                  text-center">Latest Products</h1>
//                  <hr />
//              </div>
//           </div>
          
//           <div className="row justify-content-center">
//              {loading ? <Loading/> : <ShowProducts/>}
//           </div>
//       </div>
//     </div>
//   )
// }

function Product(){
  const [data,setData]=useState([]);
   
  const fetchData=()=>{
    fetch('https://run.mocky.io/v3/4c63603a-db22-4e32-9bf9-797d356085c1')
    .then((response)=>{
      return response.json();
    }).then((data)=>{
      console.log(data);
      setData(data)
    })
  }
  useEffect(()=>{
    fetchData();
  },[])
  
 




  return(
    <div className="clearfix">
        <div className="row">
          {data.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.image}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                 
                  <p className="card-text"> 
                    <h6 className="card-title" href="/#">{data.title}</h6>
                    {/* <br />
                    ${data.price}
                    <br /> */}
                    {/* <span className="phone">{data.description}</span> */}
                  </p>
                  <a href="" className="btn btn-outline-secondary">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    )
  
}



















export default Product;






















// function Product(props) {
//   if (!props.product) return null;
//   const productProp = props.product;
//   console.log(productProp);
//   return (
//     <div style={{ border: "1px solid black" }}>
//       <img src={productProp.productImage} id="prod-img" alt="" />
//       <h3 className="prod-name">{productProp.name}</h3>
//       <div className="prod-category">Category: {productProp.category}</div>
//       <div className="prod-price">Price: ${productProp.price}</div>
//       <button>Add to cart</button>
//     </div>
//   );
// }

// export default Product;











































































































































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
