import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'

import ModalUser from './ModalUser';

import { getAllUsers, createNewUserService} from '../../services/userService'
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact()
    }

    getAllUsersFromReact = async () =>{
        let response = await getAllUsers('All')
        if(response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }


    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }

    toogleUserModel = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }


    createNewUser = async (data) => {
        try{
            let response = await createNewUserService(data)
            if(response && response.errCode !== 0){
                alert(response.errMessage)
            } else {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false
                })
            }
        } catch(err){
            console.log(err)
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
        return (
            <div className="user-container container" >
                <ModalUser
                    isOpen = {this.state.isOpenModalUser}
                    toggleFromParent={this.toogleUserModel}
                    createNewUser={this.createNewUser}
                >

                </ModalUser>
                <div className="text-center title">Manage users</div>
                <button 
                    className="btn btn-primary px-3"
                    onClick = {this.handleAddNewUser}
                >
                   <i className="fas fa-plus"></i>
                   Create new user
                </button>
                <table id="customers" className=" mt-4" > 
                <tbody>
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
                    </tbody>
                    
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
