import React, { Component } from 'react';
import PropTypes from 'prop-types';
class User extends Component {
    render() {
        const { id, name, email, phone } = this.props.user;
        return (
            <div>
                <div className="card my-2">
                    <div className="card-body">
                        <h4 className="alert alert-primary p-3">{name} - {id}
                            <i className="fa fa-trash btn btn-success mx-2" style={{ cursor: 'pointer', float: 'right', color: "red" }}></i>
                            <i className="fa fa-pencil btn btn-success" style={{ cursor: 'pointer', float: 'right', color: "white" }}></i>
                        </h4>
                        <div className="card-text">
                            <h3>{email}</h3>
                            <h3>{phone}</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
User.propTypes = {
    user: PropTypes.object.isRequired
}
export default User;