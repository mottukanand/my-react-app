import React ,{ Component ,Fragment} from 'react';
import { Link } from 'react-router-dom';



class User extends Component{

    componentDidMount() {
        this.props.UserListData()
    }
    
    render(){
        console.log(this.props.userListData,"iiiiiiiiiii")
        return(
            <Fragment>
                <div className="container">
                    <h4>Users</h4>
                    <input type="text" onChange={this.searchEmployee} placeholder="Search Users"/>
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
            </Fragment>
        )
    }
}


export default User