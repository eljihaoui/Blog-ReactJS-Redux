import React, { Component } from 'react'
import User from './user'
import { connect } from  'react-redux';
import { getUsers } from '../actions/userActions';
class ListUsers extends Component {
    componentWillMount() {
        this.props.getUsers();
    }
    render() {
        const { users } = this.props;
        return (
            <div>
                <React.Fragment>
                    {
                        users.map((user) => (
                            <User key={user.id} user={user}></User>
                        ))
                    }
                </React.Fragment>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
            users: state.MyUsers.users
    }
}
export default connect(mapStateToProps, { getUsers })(ListUsers);