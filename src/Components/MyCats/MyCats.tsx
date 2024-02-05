import React from "react";


export const MyLikedCats = ( { MyCats }: any ) => {
    return (
        <div>
            <ul>
                {
                    MyCats.map(
                        (el:any) => {
                            return <li key={el.id}>123</li>
                        }
                    )
                }
            </ul>
        </div>
    )
}
