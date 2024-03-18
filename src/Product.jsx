import React from 'react';

function Product({pro,inc,i,dec,removeBtn}){
    return(
            <div className="d-flex flex-wrap" style={{marginLeft:"25%",marginTop:"20px"}}>
              <img src={pro.img} alt="" style={{width:"60px"}} />
                <div style={{width:"55%"}}>
                    <h6>{pro.title}</h6>
                    <h5 className='text-primary'>${pro.price}</h5>
                    <span className='text-info' onClick={()=>{removeBtn(i)}}>remove</span>
                </div>
                <div>
                    <span><i class="bi bi-chevron-up text-info" onClick={()=>{inc(i)}}></i></span>
                    <h5>{pro.quantity}</h5>
                    <span> <i class="bi bi-chevron-down text-info" onClick={()=>{dec(i)}}></i></span>
                </div>
            </div>
            

    )
}
export default Product;