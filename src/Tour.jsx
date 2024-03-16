import React from 'react';

function Tour({tour,removeTour,i}){
    // console.log(tour)
    return(
        <div className="myTour">
            <img src={tour.img} alt="" style={{width:"520px"}} />
            <div className="d-flex flex-wrap justify-content-between p-3">
                <h6 className='p-2'>{tour.title}</h6>
                <h5 className="text-primary">${tour.price}</h5>
            </div>
            <p className="p-1"><i>{tour.content}</i></p>
            <button className="btn btn-outline-danger mb-2" onClick={()=>{removeTour(i)}}>Not Interested</button>
        </div>
    )
}
export default Tour;
