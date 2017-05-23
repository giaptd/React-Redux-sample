/**
 * Created by giapt on 5/23/2017.
 */
import React from 'react';
import UserList from '../containers/UserList';

require('../../scss/style.scss');

class App extends React.Component{
    render(){
        return(
            <div>
                <h2>username lists</h2>
                <UserList/>
                <br/>
                <div>
                    user details goes here
                </div>
            </div>
        );
    }
}
export default App;