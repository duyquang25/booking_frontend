import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
// import { FormattedMessage } from 'react-intl';

import {handleLoginApi}  from '../../services/userService'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'abc',
            password: '123',
            errMessage: '',
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

    handleLogin = async () => {
        this.setState({
            errMessage: '',
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if(data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message,
                })
            }
            if(data && data.errCode === 0){
                // todo
                this.props.userLoginSuccess(data.user)
                console.log('login success')
            }

        } catch (e){
            if(e.response){
                if(e.response.data){
                    this.setState({
                        errMessage: e.response.data.message,
                    })
                }
            }
        }
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
                        <div className="col-12" style={{color: 'red'}}>
                            {this.state.errMessage}
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
     //  adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
