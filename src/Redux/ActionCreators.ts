import axios from "axios";

import { LoadingCats, FetchingFlag } from './Reducers' 

import { data } from "../Data/data"



export const fetchCats = (limit: number = 25) => async (dispatch: any) => {

  try {

    dispatch(FetchingFlag())

    const baseURL = `hps://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${limit}`

    axios.get( baseURL, { headers: { "Content-Type": "application/json", "x-api-key": "live_7K0GEoWfeVTF4ITXkvrLo4RlzMKqNKqbSQHAxnHQAW72T4f4OUvCiZuNJtIYagXf", },})
    .then((res) => {
      
      dispatch(LoadingCats(res.data));
      dispatch(FetchingFlag());

    }).catch( error => {
      console.log(error);

      setTimeout( () => {
        dispatch(LoadingCats(data));
        dispatch(FetchingFlag());
      },  5000 )

    } ); 

  } catch (error) {
    console.log(error);
  }

}


