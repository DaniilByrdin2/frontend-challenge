import React, { useState } from "react";
import './CartCat.css'


export const CartCat = () => {
    const [ flagLike, setFlagLike ] = useState(false)

    return (
      <div className="container-cart">
        <img src="" alt="Cat" />
        <div className="container-like">
          <div className="like-el" onClick={ () => { setFlagLike( !flagLike )} }>
            {flagLike ? (
              <img src="" alt="like-filled" />
            ) : (
              <img src="" alt="like-empty" />
            )}
          </div>
        </div>
      </div>
    );
}