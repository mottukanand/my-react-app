import { combineReducers } from 'redux';
import { fetchUserListDataReducer } from './fetchUserReducer'
import { fetchUserProfileDataReducer } from './fetchUserProfileDetailReducer'

const appReducer = combineReducers({
    userListData : fetchUserListDataReducer,
    userProfile :fetchUserProfileDataReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
  }
export default rootReducer