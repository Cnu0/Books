import React from 'react';


function Collectionbox(props){
    return(
        
        <div className="b-box">
            <div className="b-box-img">
                <h3>{props.name}</h3>
                <img src={props.image} alt=''></img>
            </div>
            <div className="b-text">
                <p>{props.explain}</p>
            </div>
        </div>
    )
}
export default Collectionbox