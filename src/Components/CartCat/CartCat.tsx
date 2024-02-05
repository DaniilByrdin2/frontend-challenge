import React, { useState } from "react";
import like  from "../../Img/like.png"
import activeLike from "../../Img/active-like.png"

import './CartCat.css'


export const CartCat = ( { name, imgUrl }:any ) => {
    const [ flag, setFlag ] = useState(false)

    
    return (
      <div className="container-cart" onMouseOut={ () => setFlag( false ) } onMouseOver={ () => setFlag( true )} >
        <img className = "catImg" src={ imgUrl } alt="Cat" /> { flag ? <LikeComponent /> : null }
      </div>
    );
}


const LikeComponent = () => {
  
  const [ flagLike, setFlagLike ] = useState(false)

  return (
    <div className="container-like">
      <div className="like-el" onClick={() => { setFlagLike(!flagLike) }}>
        {flagLike ? ( <img src={like} alt="like-filled" />) : ( <img src={activeLike} alt="like-empty" /> )}
      </div>
    </div>
  );

}