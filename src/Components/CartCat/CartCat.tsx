import React, { FC } from "react";

import { ReactComponent as Icon } from "../../Img/IconLike.svg"

import './CartCat.css'


export const CartCat:FC<any> = ( {item} ) => {

    const { url, id, like } = item
    
    return (
      <div className="container-cart">
        <div className="cart">
          <img className="catImg" src={url} alt="Cat" />

          <div className="container-like">
            <div className="like-el">
              <Icon
                data-id={id}
                className={like ? "icon-active icon" : "icon"}
              />
            </div>
          </div>

        </div>
      </div>
    );
}

