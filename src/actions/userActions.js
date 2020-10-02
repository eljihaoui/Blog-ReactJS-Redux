import Axios from "axios"
import { URL_USERS } from "./urlAction"

export  const getUsers = () => dispatch => {
    Axios.get(URL_USERS)
        .then(res => {
            dispatch({
                type: "GET_USERS",
                payload: res.data
            })
        })
        .catch(error => console.log(error));
}