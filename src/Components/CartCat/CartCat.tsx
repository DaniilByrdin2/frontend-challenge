import React, { FC, useState } from "react";

import like  from "../../Img/like.png"
import activeLike from "../../Img/active-like.png"

import './CartCat.css'



interface CartCatInerface {
  "imgUrl": string,
  "id": string,
  "flagLike": boolean | undefined,
  "DeleteCat": (id: string) => void
  "AddCat"?: (id: string) => void,
}

export const CartCat:FC<CartCatInerface> = ( { imgUrl, id, flagLike, AddCat, DeleteCat } ) => {
    const [ flag, setFlag ] = useState<boolean>(false)
    
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


interface LikeComponentInterface {
  "DeleteCat": ( id:string ) => void, 
  "AddCat": ( ( id:string ) => void ) | undefined,
  "id": string,
  "flagLike": boolean | undefined
}

const LikeComponent:FC<LikeComponentInterface> = ( { id, flagLike, AddCat, DeleteCat } ) => {

  const changeLike = () => { 
    if (!flagLike && AddCat ) {
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