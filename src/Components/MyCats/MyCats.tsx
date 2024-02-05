import React from "react";

import { CartCat } from "../CartCat/CartCat" 



export const MyLikedCats = ( { MyCats, DeleteCat }: any ) => {
    return (
        <div>
            <ul>
            { MyCats.map(( { id, url, like }: any  ) => {
            
            const ID = id + (Math.random() * 10)

            return (
              <li key={ ID } >
                <CartCat flagLike = { like } id = { id } DeleteCat = { DeleteCat } imgUrl={url} />
              </li>
            );
          })}
            </ul>
        </div>
    )
}
