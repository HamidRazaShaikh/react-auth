import React from 'react';
import firebase from './configuration.js';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";




import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class FilledTextFields extends React.Component {
    state = {

        email : "",
        password : "",
        message : false,
        mess : ""
    }

    constructor (props) {
        super (props)


    }

    handleChangeText = (e) => {
    this.setState ({[e.target.name] : e.target.value})
    }

    handleAddUser = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then (function (data) { console.log(data)})

            .catch
        (function(error) {
         alert(error.message)

        });
    }

    handleSignUpUser = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then (function (data)
        { console.log(data);

        })

            .catch
        (function(error) {
            alert(error.message)



        });
    }

    handleSignoutUser = () => {
        firebase.auth().signOut().then(function() {
        }).catch(function(error) {

            alert(error.message)

        });

        this.setState ({email : "" , password : ""})
    }

    handleGoogleAuth = ()=> {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        firebase.auth().signInWithPopup(provider)
            .then(function (data) {
                console.log(data);
            }).catch(function (error) {
                console.log(error);
                alert(error.message)
            });

    }

    handleFacebookAuth = () =>  {
        var provider = new firebase.auth.FacebookAuthProvider ();

        firebase.auth().signInWithPopup(provider)
            .then(function (data) {
                console.log(data);
            }).catch(function (error) {
                console.log(error);
                alert(error.message)
            });
    }



    render(){


        return (

            <div>



                    <div>
                        <TextField
                            id="filled-email-input"
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="filled"
                            onChange = {this.handleChangeText}
                            value = {this.state.email}
                            style = {{marginLeft: 300 , width : 490}}
                            />

                    </div>
                    <div>
                        <TextField
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            name = "password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="filled"
                            onChange = {this.handleChangeText}
                            value = {this.state.password}
                            style = {{marginLeft: 300 , width : 490}}
                            />

                    </div>

                    <div>
                        <Button variant="outlined" color="primary" onClick = {this.handleAddUser}  style = {{marginLeft: 300}}>
                            Register
                        </Button>
                        <Button variant="outlined" color="secondary"  onClick = {this.handleSignUpUser} style = {{marginLeft: 100}}>
                            Signup
                        </Button>
                        <Button variant="outlined" color="secondary"  onClick = {this.handleSignoutUser} style = {{marginLeft: 100}}>
                            Signout
                        </Button>
                    </div>

                    <FacebookLoginButton onClick={this.handleFacebookAuth} style = {{marginLeft: 300 , width : 470}} />
                     <GoogleLoginButton onClick={this.handleGoogleAuth} style = {{marginLeft: 300 , width : 470}} />





            </div>


        );

    }

}

export default FilledTextFields;