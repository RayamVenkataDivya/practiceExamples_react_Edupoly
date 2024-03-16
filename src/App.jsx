import './App.css';
import React, {useState, useEffect}from 'react';
import Tour from './Tour'
import Loading from './Loading';

function App() {
  var [tours,setTours] = React.useState([
    {
      img:"https://www.course-api.com/images/tours/tour-1.jpeg",
      title:"Best Of Paris In 7 Days Tour",
      price:1999,
      content:"Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas"
    },
    {
      img:"https://www.course-api.com/images/tours/tour-2.jpeg",
      title:"Best Of Ireland In 14 Days Tour",
      price:2499,
      content:"Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites"
    },
    {
      img:"https://www.course-api.com/images/tours/tour-5.jpeg",
      title:"Best Of Salzburg & Vienna In 8 Days Tour",
      price:999,
      content:"Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age"
    },
    {
      img:"https://www.course-api.com/images/tours/tour-4.jpeg",
      title:"Best Of Rome In 7 Days Tour",
      price:2095,
      content:"Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style."
    },
    {
      img:"https://www.course-api.com/images/tours/tour-5.jpeg",
      title:'Best Of Poland In 10 Days Tour',
      price:2595,
      content:"Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days."
    }
  ])
  var [loading,setLoading]=React.useState(true)

  // useEffect(()=>{
  //   setLoading(false)
  // },[])

  function removeTour(key){
    var temp=[...tours]
    temp.splice(key,1)
    setTours(temp);
  }
  function refreshPage(){

  }
  React.useEffect(()=>{
    {
      loading && <h2 style={{textAlign:"center"}}>Loading...</h2>
    }

  },[tours.length===0])

  if(tours.length===0){
    return(
      <div className='text-center'>
        <h1>No Tours Left</h1>
        <button className="btn btn-primary" onClick={()=>{refreshPage()}}>Refresh</button>
      </div>
    )

  }
  
  return (
    <div>
      { loading && <h1>Loading.....</h1> }
      <div>
        <h1 style={{textAlign:"center"}}>Our Tours</h1>
      <div className="">
        {
          tours.map((tour,i)=>{
            return <Tour removeTour={removeTour} i={i} tour={tour}></Tour>
          })
        }
      </div>
      </div>
    </div>
  );
}

export default App;
