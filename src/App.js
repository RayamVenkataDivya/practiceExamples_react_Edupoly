import './App.css';
import React,{useEffect} from 'react';
import Product from './Product';
import Total from './Total';

function App() {
  var [products,setProducts]=React.useState([
    {
      img:"https://www.course-api.com/images/cart/phone-1.png",
      title:"Samsung Galaxy S8",
      price:399,
      quantity:1
    },
    {
      img:"https://www.course-api.com/images/cart/phone-2.png",
      title:"Google pixel",
      price:499,
      quantity:1
    },
    {
      img:"https://www.course-api.com/images/cart/phone-3.png",
      title:"Xiaomi Redmi Note 2",
      price:699,
      quantity:1
    },
    {
      img:"https://www.course-api.com/images/cart/phone-4.png",
      title:"Samsung Galaxy S8",
      price:599,
      quantity:1
    }
  ])
  var [totalPrice,setTotalPrice]=React.useState(0)
  var [totalQuantity,setTotalQuantity]=React.useState(0)
  var [loader,setLoader]=React.useState(true)

  useEffect(()=>{
    // console.log("stated")
    setLoader(false)
  },[])

  function incBtn(i){
    var temp=[...products]
    temp[i].quantity++;
    setProducts(temp);

  }
  function decBtn(i){
    var temp=[...products]
    temp[i].quantity--;
    if(temp[i].quantity===0){
      temp.splice(i,1)
    }
    setProducts(temp)
  }
  
  function removeBtn(i){
    var temp=[...products]
    temp.splice(i,1)
    setProducts(temp)
  }

  useEffect(()=>{
    var tprice=products.reduce(function(acc,product){
        return acc+product.quantity*product.price;
    },0)
    setTotalPrice(tprice)
    },[products])
    
  useEffect(()=>{
    var tquantity=products.reduce((acc,p)=>{
      return acc+p.quantity;
    },0)
    setTotalQuantity(tquantity)
  },[products])
  
  function clearProducts(){
    setProducts([])
    // setTotalPrice("")
  }
    
  return (
    <div className="App">
      {loader && <h1 className='text-center text-lg mt-5'>Loading...</h1>}
      {/* {console.log("template")} */}
      <nav class="navbar navbar-expand-lg bg-info">
        <div class="container-fluid">
          <h1 class="navbar-brand" className='text-md text-light' style={{marginLeft:"25%"}}>UseReducer</h1>
          <i class="fa badge fs-3" style={{fontsSize:"50px",marginRight:"27%"}} >&#xf07a;<span class="position-absolute top-1 start-70 translate-middle badge rounded-pill bg-danger text-sm">{totalQuantity}</span></i>
        </div>
        </nav>
            <h1 style={{marginLeft:"40%",marginTop:"20px"}}>YOUR BAG</h1>
          {
            products.map((pro,i)=>{
              return <Product pro={pro} inc={incBtn} i={i} dec={decBtn} removeBtn={removeBtn}></Product>
            })
          }
          <Total totalPrice={totalPrice}></Total>
          <button className="btn btn-outline-danger btn-lg mt-2" style={{marginLeft:"43%"}} onClick={()=>{clearProducts()}}>Clear Cart</button>
    </div>
  );
}

export default App;
