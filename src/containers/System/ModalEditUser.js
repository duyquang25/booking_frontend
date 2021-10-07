import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash';


class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }

    }

 
    componentDidMount() {
        let user = this.props.currentUser;

        // check users
        if(user && !_.isEmpty(user)){

            this.setState({
                id: user.id,
                email: user.email,
                password: 'hashcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
            })
        }
    }


    handleOnChangeInput = (event, id) => {
        let copyState = {...this.state}
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for(let i= 0; i < arrInput.length; i++){
            if(!this.state[arrInput[i]]){
                 isValid = false;
                alert('Missing parameter' + arrInput[i])
                break;
            }
           
        }
        return isValid;
    }

    handleSaveUser = () => {
        let isVald = this.checkValidateInput();
        if(isVald === true){
            this.props.editUser(this.state)
        }
    }

    toggle = () => {
        this.props.toggleFromParent()
    }

    render() {
        return (
            <Modal 
                isOpen={this.props.isOpen} 
                toggle={() => {this.toggle()}} 
                className={'abc'}
                size= "lg"
            >
                <ModalHeader toggle={() => {this.toggle()}}>
                    Edit user
                </ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row">
                            
                            <div className="form-group col-md-6">
                                <label >Email</label>
                                <input type="email" className="form-control" placeholder="Email" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'email')}}
                                value={this.state.email}
                                disabled
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Password</label>
                                <input type="password" className="form-control"placeholder="Password" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'password')}}
                                value={this.state.password}
                                disabled
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label >First Name</label>
                                <input type="text" className="form-control" 
                                onChange={(event) => {this.handleOnChangeInput(event, "firstName")}}
                                value={this.state.firstName}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Last Name</label>
                                <input type="text" className="form-control" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'lastName')}}
                                value={this.state.lastName}/>
                            </div>

                            
                            <div className="form-group">
                                <label >Address</label>
                                <input type="text" className="form-control" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'address')}}
                                value={this.state.address}/>
                            </div>
                            
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="primary" 
                        onClick={() => {this.handleSaveUser()}}
                        className="px-3"

                    >
                            Edit user
                    </Button>{' '}
                    <Button 
                        color="secondary" 
                        onClick={() => {this.toggle()}}
                        className="px-3"
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);






   