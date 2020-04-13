import * as userType from '../../constants/actionConstants';

export function fetchUserListDataReducer(state = null, action) {
    switch (action.type) {
        case userType.FETCH_USER_LIST_REQUEST:
            return { ...state,isLoading:true };

        case userType.FETCH_USER_LIST_SUCCESS:
            return {
                ...state, 
                userData: action.payload.data,
                isLoading:false
            }

        case userType.FETCH_USER_LIST_FAILURE:
            return {
                ...state,
                userDataError: action.payload.response,
                isLoading:false
            };
        default:
            return state;
    }
}