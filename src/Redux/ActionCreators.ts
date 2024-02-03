import axios from "axios";
import { AppDispatch } from "./Store";
import CatsSlice from './Reducers'



export const getCats = (limit: number = 15) => 
  async (dispatch: AppDispatch) => {

    // try {
    //   const res = await axios.get(
    //     `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${limit}`,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         "x-api-key":
    //           "live_7K0GEoWfeVTF4ITXkvrLo4RlzMKqNKqbSQHAxnHQAW72T4f4OUvCiZuNJtIYagXf",
    //       }
    //     }
    //   );

    //   dispatch(CatsSlice.actions.LoadingCats( res.data ));
    //     console.log(res.data);
        
    // } catch (error) {
    //     CatsSlice.actions.FlagError();
    //     console.log("error");
    // }

  };

