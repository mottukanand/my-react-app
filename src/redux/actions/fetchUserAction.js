import * as userType from '../../constants/actionConstants';
import { performRequest } from '../../services/index';

export default function UserListData(){
    return function (dispatch) {
        dispatch({
            type: userType.FETCH_USER_LIST_REQUEST
        })
        return performRequest('get', '/users')
            .then((response) => {
                console.log(response,"response")
                dispatch({
                    type: userType.FETCH_USER_LIST_SUCCESS,
                    payload: response
                })
            })
            .catch((error) => {
                console.log(error,"error")
                dispatch({
                    type: userType.FETCH_USER_LIST_FAILURE,
                    payload: error
                })
            })
    }
}