import * as userType from '../../constants/actionConstants';

export function fetchUserProfileDataReducer(state = null, action) {
    switch (action.type) {
        case userType.FETCH_USER_PROFILE_DETAILS_REQUEST:
            return { ...state,isLoading:true };

        case userType.FETCH_USER_PROFILE_DETAILS_SUCCESS:
            return {
                ...state, 
                userProfileData: action.payload.data,
                isLoading:false
            }

        case userType.FETCH_USER_PROFILE_DETAILS_FAILURE:
            return {
                ...state,
                userProfileDataError: action.payload.response,
                isLoading:false
            };
        default:
            return state;
    }
}