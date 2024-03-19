import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Product from './Product';

function App() {
  var [products,setProducts]=React.useState([])

  React.useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      // setProducts(res.data)
      // console.log(res.data)
      products = res.data.map((p)=>{
        return ({...p, 'isIteminCart':true})
      })
      // console.log(products)
      setProducts(products)
      })
     .catch(()=>{})
  },[])


  return (
    <div className="App">
      <nav class="navbar bg-info">
        <div class="container">
          <a class="navbar-brand me-auto ms-4" href="#"><img src="https://icon-library.com/images/e-commerce-icon-png/e-commerce-icon-png-5.jpg" alt="" style={{ width: "60px", height: '50px' }}/></a>
          <div class='w-50 mt-3 h-50 d-flex bg bg-white rounded'><i class="bi bi-search mt-1 ms-1"></i><input class='form-control h-50 border-0' type="text" placeholder='Search...'/></div>
          <a href=""><button class='me-5 btn'><h1  class="bi bi-cart-check m-0  position-relative"><span style={{fontSize:'12px',top:'0px',left:'70%'}} id='' class='position-absolute  rounded-pill badge bg-warning'></span></h1></button></a>
          {/* <a><i class="bi bi-cart-check"></i></a> */}
        </div>
    </nav>
    {
      products.map((prod)=>{
        // console.log(prod)
        return <Product prod={prod}></Product>
      })
    }

    </div>
  );
}

export default App;
