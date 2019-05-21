import React from 'react';
import firebase from './configuration.js';


import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class FilledTextFields extends React.Component {
    state = {

        email : "",
        password : ""
    }

    constructor (props) {
        super (props)
    }

    //handleChangeText = (e) => {
    //    this.setState ({[e.target.name] : e.target.value})
    //
    //}

    handleAddUser = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then (function (data) { console.log(data)})

            .catch
        (function(error) {
            console.log(error)

        });
    }

    handleSignUpUser = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then (function (data) { console.log(data)})

            .catch
        (function(error) {
            console.log(error)

        });
    }



    render() {


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
                            //onChange = {this.handleChangeText}
                            value = {this.state.email}
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
                            //onChange = {this.handleChangeText}
                            value = {this.state.password}
                            />

                    </div>

                    <div>
                        <Button variant="outlined" color="primary" onClick = {this.handleAddUser}>
                            Register
                        </Button>
                        <Button variant="outlined" color="secondary"  onClick = {this.handleSignUpUser}>
                            Signup
                        </Button>
                    </div>

            </div>


        );

    }

}

export default FilledTextFields;