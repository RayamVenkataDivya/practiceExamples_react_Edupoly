import React from 'react';

function Product({prod}){
    console.log(prod)
    return(
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} className='w 100'>
            <div className='rounded border border-3 border-black shadow' style={{ width: '30%', margin: '5px', padding: '5px', textAlign: 'center' }}>
                <span><img style={{ width: '100px', height: '100px' }} src={prod.image} alt=''/></span><br />
                <span>Title:{prod.title}</span><br />
                <span>Category:{prod.category}</span><br/>
                <span class='mb-auto'>Price:{prod.price}</span><br/>
                { !prod.isIteminCart&& <button class='btn btn-warning'> <i class="bi bi-cart-plus bg-warning"></i>Add to Cart</button>}
                { prod.isIteminCart&&<button class='btn btn-warning'><a class='bg-transparent text-decoration-none' href=""> <i class="bi bi-cart-plus bg-warning"></i>Go to Cart</a> </button>}
            </div>
        </div>
    )
}
export default Product;