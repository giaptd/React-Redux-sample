/**
 * Created by giapt on 5/23/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserList extends Component{
    render(){
        return(
            <ul>
                <li>one</li>
                <li>one</li>
                <li>one</li>
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}


export default connect(mapStateToProps)(UserList);