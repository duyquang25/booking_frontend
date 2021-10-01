import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
// import { FormattedMessage } from 'react-intl';




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'abc',
            password: '123',
        }
    }

    handleOnChangeUserName = (event) => {
        this.setState({
            username: event.target.value
        })

        console.log(event.target.value)

    }
    
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })

        console.log(event.target.value)

    }

    handleLogin = () => {
        console.log(this.state.username, this.state.password)
    }

    render(){

        // JSX




        return(
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content ">
                        <div className="col-12 text-center mb-5 login">Login
                        </div>
                        <div className="col-12 form-group">
                            <label>Username</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUserName(event)}
                            />
                        </div>
                        <div className="col-12 mt-3 form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                value={this.state.password}
                                onChange={(event) => this.handleOnChangePassword(event)}
                            />
                        </div>
                        <div className="col-12 mt-4">
                           <button 
                           className="btn btn-primary w-100 "
                           onClick = {this.handleLogin}
                           >
                               Login
                           </button> 
                        </div>
                        
                        <div className="col-12 mt-3 text-center">
                            <span>Forgot your password </span>
                        </div>
                        <div className="col-12 text-center m-3 ">
                            <span>Login with: </span>
                        </div>
                        <div className="col-12 text-center social-login">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fab fa-facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
