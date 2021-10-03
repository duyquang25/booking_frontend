import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
    }
    componentDidMount() {
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

    handleAddNewUser = () => {
        let isVald = this.checkValidateInput();
        if(isVald === true){
            this.props.createNewUser(this.state, 'abc')
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
                    Create a new user
                </ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row">
                            
                            <div className="form-group col-md-6">
                                <label >Email</label>
                                <input type="email" className="form-control" placeholder="Email" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'email')}}
                                
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Password</label>
                                <input type="password" className="form-control"placeholder="Password" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'password')}}
                                
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label >First Name</label>
                                <input type="text" className="form-control" 
                                onChange={(event) => {this.handleOnChangeInput(event, "firstName")}}
                                
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Last Name</label>
                                <input type="text" className="form-control" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'lastName')}}
                                />
                            </div>

                            
                            <div className="form-group">
                                <label >Address</label>
                                <input type="text" className="form-control" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'address')}}
                                />
                            </div>
                            
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="primary" 
                        onClick={() => {this.handleAddNewUser()}}
                        className="px-3"

                    >
                            Add user
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);






   