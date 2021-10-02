import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'

import { getAllUsers} from '../../services/userService'
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('All')
        if(response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }


    /**Life cycle 
     * Run Component
     * 1. Run constructor -> init state
     * 2. componentDidMount
     * 3. Render
     * 
     * 
     */

    render() {
        let arrUsers = this.state.arrUsers;
        console.log(arrUsers)
        return (
            <div className="user-container">
                <div className="text-center title">Manage users</div>
                
                <table id="customers" className="container mt-4">
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>

                        { arrUsers && arrUsers.map((item, index) => {
                            return(
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button class="btn-edit"><i className="fas fa-pencil-alt "></i></button>
                                        <button class="btn-delete"><i className="fas fa-trash "></i></button>
                                    </td>
                                </tr>
                                )
                            })
                        }
    
                    
                </table>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
