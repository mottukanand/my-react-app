import { connect } from "react-redux";
import UserProfile from '../component/UserProfile'
import UserProfileData from '../redux/actions/fetchUserProfileDetailAction';


const mapStateToProps = state=>{
    return{
        profileData:state.userProfile,
    }
}

const mapDispatchToProps = dispatch => ({

    UserProfileData: (user_id) => dispatch(UserProfileData(user_id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(UserProfile)