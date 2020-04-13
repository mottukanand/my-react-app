import React ,{ Component ,Fragment} from 'react';
import { Link } from 'react-router-dom';


var userData = []
var m= 0
class User extends Component{

    state = {
        searchData:""
    }

    componentDidMount() {
        this.props.UserListData()
    }

    searchUser = (event) => {
        this.setState({searchData : event.target.value})
    }

    changeUserBox = (searchDataValue) => {
        userData = []
        if(this.props.userListData && this.props.userListData.userData && this.props.userListData.userData.length>0){
            this.props.userListData.userData.filter((userObject,index)=>{
                if(userObject.name.toLowerCase().indexOf(searchDataValue.toLowerCase()) !== -1){
                    m=5
                    userData.push(userObject)
                }
                return true
            })
        }
    }
    
    render(){
        return(
            <Fragment>
                <input type="text" onChange={this.searchUser} placeholder="Search Users"/>
                {this.state.searchData ?(
                this.changeUserBox(this.state.searchData),
                <div className="container">
                    <h4>Users</h4>
                    {(userData && userData.length>0)
                    ?
                    <ul>
                        
                    {userData.map((data,index)=>(
                        <li key={index}><Link to={`/user-profile/${data.id}`}  ><div>{data.name} - {data.company.name}</div></Link></li>
                    ))
                    }
                    </ul>
                    :
                    <div>Sorry, no data found</div>

                    }
                </div>
                )
                :
                <div className="container">
                    <h4>Users</h4>
                    {(this.props.userListData && this.props.userListData.userData && this.props.userListData.userData.length>0)
                    ?
                    <ul>
                    {this.props.userListData.userData.map((data,index)=>(
                        <li key={index}><Link to={`/user-profile/${data.id}`}  ><div>{data.name} - {data.company.name}</div></Link></li>
                    ))
                    }
                    </ul>
                    :
                    <div>Sorry, no data found</div>

                    }
                </div>
                }
            </Fragment>
        )
    }
}


export default User