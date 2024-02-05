import React, { useState } from "react";

import like  from "../../Img/like.png"
import activeLike from "../../Img/active-like.png"

import './CartCat.css'


export const CartCat = ( { imgUrl, AddCat, id, flagLike , DeleteCat }:any ) => {
    const [ flag, setFlag ] = useState(false)

    return (
      <div className="container-cart" 
      onMouseOut={ () => setFlag( false )} 
      onMouseOver={ () => setFlag( true )} 
      >
        <img className = "catImg" src={ imgUrl } alt="Cat" />
        { flag ? <LikeComponent DeleteCat = {DeleteCat} flagLike = {flagLike} id = {id} AddCat = {AddCat}/> : null }
      </div>
    );
}


const LikeComponent = ( {AddCat, id, flagLike, DeleteCat}: any ) => {

  const changeLike = () => { 
    if (!flagLike) {
      AddCat( id )
    } else ( 
      DeleteCat( id )
    )
  }

  return (
    <div className="container-like">
      <div className="like-el" onClick={ changeLike }>
        { flagLike ? ( <img src={activeLike} alt="like-empty" /> ) : ( <img src={like} alt="like-filled" />)  }
      </div>
    </div>
  );

}