import * as userType from '../../constants/actionConstants';
import { performRequest } from '../../services/index';

export default function UserProfileData(user_id){
    return function (dispatch) {
        dispatch({
            type: userType.FETCH_USER_PROFILE_DETAILS_REQUEST
        })
        return performRequest('get', `/users/${user_id}/`)
            .then((response) => {
                console.log(response,"response")
                dispatch({
                    type: userType.FETCH_USER_PROFILE_DETAILS_SUCCESS,
                    payload: response
                })
            })
            .catch((error) => {
                console.log(error,"error")
                dispatch({
                    type: userType.FETCH_USER_PROFILE_DETAILS_FAILURE,
                    payload: error
                })
            })
    }
}