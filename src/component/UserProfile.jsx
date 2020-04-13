import React ,{ Component ,Fragment} from 'react';



class UserProfile extends Component{
    componentDidMount () {
        if(this.props.match.params.id){
            this.props.UserProfileData(this.props.match.params.id)
        }
        
    }
    
    render(){
        console.log(this.props.profileData,"yyyyyy")
        return(
            <Fragment>
                {(this.props.profileData && this.props.profileData.userProfileData) &&
                <Fragment>
                    <div>{this.props.profileData.userProfileData.name}</div>
                    <div>{this.props.profileData.userProfileData.email}</div>
                    <div>{this.props.profileData.userProfileData.phone}</div>
                    <div>{this.props.profileData.userProfileData.website}</div>
                </Fragment>
                }
            </Fragment>
        )
    }
}


export default UserProfile