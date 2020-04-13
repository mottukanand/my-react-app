import React ,{Component} from 'react'
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import UserContainer from '../containers/UserContainer'
import UserProfileContainer from '../containers/UserProfileContainer'

class AppRoute extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={UserContainer}/>
                    <Route exact path="/user-profile/:id" component={UserProfileContainer}/>
                </Switch>
            </Router>
        )
    }
}

export default AppRoute