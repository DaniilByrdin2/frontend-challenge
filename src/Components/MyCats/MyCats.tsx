import React, {FC} from "react";

import { CartCat } from "../CartCat/CartCat"

import { mapElementType } from "../Main/Main"
import { CartCatType } from "../../App"

interface myLikedCatsInerface {

  "DeleteCat": (id: string) => void,
  "MyCats": CartCatType[]

}

export const MyLikedCats:FC<myLikedCatsInerface> = ( { MyCats, DeleteCat } ) => {
    return (
        <div>
            <ul>
            { MyCats.map(( { id, url, like }: mapElementType  ) => {
            
            const ID = id + (Math.random() * 10)

            return (
              <li key={ ID } >
                <CartCat flagLike = {like} id = {id} DeleteCat = {DeleteCat} imgUrl={url} />
              </li>
            );
          })}
            </ul>
        </div>
    )
}
