import React from "react";

function Total({totalPrice}){
    return(
        <div className="d-flex flex-wrap justify-content-between mt-4" >
            <h6 style={{marginLeft:"26%"}}>Cart Total</h6>
            <h6 style={{marginRight:"28%"}}>${totalPrice}</h6>
        </div>
        )
}
export default  Total;