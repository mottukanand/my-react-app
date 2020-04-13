import { connect } from "react-redux";
import User from '../component/User'
import UserListData from '../redux/actions/fetchUserAction';


const mapStateToProps = state=>{
    return{
        userListData:state.userListData,
    }
}

const mapDispatchToProps = dispatch => ({

    UserListData: () => dispatch(UserListData()),
})

export default connect(mapStateToProps,mapDispatchToProps)(User)