import React from 'react';

function Question({question,i}){
    var [info,setInfo]=React.useState(false)
    return (
        <div className="question d-flex flex-wrap justify-content-between">
        <div>
            <h6>{question.title}</h6>
            <button className="myquestion1" onClick={(i)=>{setInfo(!info)}}>{info ?<i class="bi bi-dash"></i>:<i class="bi bi-plus"></i>}</button>
        </div>
        {info && <p>{question.info}</p>}
        </div>


    )
}
export default Question;