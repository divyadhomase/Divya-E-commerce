import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Prod.css"
import {NavLink } from "react-router-dom"

function Prod(props) {
  // const data= (props)
  const [reqData, setReqData] = useState([]);

  // let params = useParams()
  // let dataId = params.id //this will return id in a string form
  // let reqId = parseInt(dataId)
  // console.log(dataId)

  const fetchProductData = () => {
    fetch(`https://run.mocky.io/v3/87adf1c4-401c-478d-8ee4-660df7de525e`)
      .then((response) => {
        return response.json();
      })
      .then((data1) => {
        console.log(data1);
        console.log("here");
        setReqData(data1);
        // setFilter(data);
      });
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  return (<div>
    
    <div className="container py-4">
      <div className="row py-4">
        <div className="col-md-5">
        <img src={reqData.image} alt="" height="400px" width="300px"/>
      
        </div>
      
    <div className="col-md-7">
      <br/>
      <h4 className="text-uppercase text-black-50">{reqData.category}</h4>
      <h1 className="display-5" >{reqData.title}</h1>
      <p className="lead">
        Rating<i className="fa fa-star"></i>
      </p>
      <h3 className="fw-bold p-2 text-black">${reqData.price}</h3>

      
      <p className="lead"><b>Product Specifications: </b>{reqData.description}</p>
      {console.log(reqData.rating)}
      <NavLink to ="/cart" className="btn btn-outline-dark mx-2 px-3 py-2">
        Add to Cart
      </NavLink>
      <NavLink className="btn btn-dark mx-2 px-3 py-2">
        Go to Cart
      </NavLink>
      
      

    </div>
    </div>
    </div>
    
    </div>
    
  );
}

export default Prod;
