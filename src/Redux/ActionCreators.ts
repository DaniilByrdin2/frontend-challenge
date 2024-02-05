import axios from "axios";
import { AppDispatch } from "./Store";
import CatsSlice from './Reducers'

import { LoadingCats, FetchingFlag } from './Reducers' 



export const fetchCats = (limit: number = 25) => async (dispatch: any) => {

  try {
    
    console.log("запрос");

    dispatch(FetchingFlag())

    axios.get( `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${limit}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key":
            "live_7K0GEoWfeVTF4ITXkvrLo4RlzMKqNKqbSQHAxnHQAW72T4f4OUvCiZuNJtIYagXf",
        },
      }
    )
    .then((res) => {
      dispatch(FetchingFlag());
      dispatch(LoadingCats(res.data));
    }).catch( error => console.log(error) );

  } catch (error) {
    console.log(error);
  }

}


