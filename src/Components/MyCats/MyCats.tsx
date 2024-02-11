import React, {FC} from "react";

import { CartCat } from "../CartCat/CartCat"
import { useDispatch, useSelector } from "react-redux";
import { FavoriteCat } from "../../Redux/Reducers"
import { mapElementType } from "../Main/Main"

import { getId } from "../Helpers"


export const MyLikedCats:FC = () => {
    const { MyCats }: any = useSelector( state => state ) 
    const AppDispatch = useDispatch()


    const handleClick = (event: any): void => {
      const target = event.target
      console.log(target);
      
      const id = getId(target);
      console.log(id);
      id && AppDispatch( FavoriteCat(id) );
    }

    return (
        <div className="container-cats" onClick={ handleClick }>
            { MyCats?.map(( item: mapElementType  ) => {
            return (
                <CartCat key={ item.id } item = { item } />
            );
          })} 
        </div>
    )
}
