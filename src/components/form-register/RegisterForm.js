import React, { useState } from 'react';
import axios from 'axios';
import FormInput from '../form-input/FormInput';

function RegisterForm() {

    // DATA to be passed from frontend: 
    // {
    //     "username": "HotGuy94",
    //     "firstName": "James",
    //     "lastName": "King",
    //     "email": "test@test.com",
    //     "password": "password"
    // }

    const [ username, setUsername ] = useState('');
    const [ usernameError, setUsernameError ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ firstNameError, setFirstNameError ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ lastNameError, setLastNameError ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ confirmPasswordError, setConfirmPasswordError ] = useState('');



    const handleSubmit = async e => {
        e.preventDefault();
        console.log('submitted');
        if (!formValid()) return console.log('frm is not valid');
    };

    const formValid = () => {
        if (usernameError || firstNameError || lastNameError || emailError || passwordError || confirmPassword) {
            return false;
        }
        return true;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>Username</p>
                <label htmlFor="username">
                    <input type="input" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
                </label>
                <div>
                    {usernameError && <p>error message</p>}
                </div>
            </div>
            <fieldset>
                <div>
                    <p>First Name</p>
                    <label htmlFor="firstName">
                        <input type="input" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </label>
                    <div>
                        {firstNameError && <p>error message</p>}
                    </div>
                </div>
                <div>
                    <p>Last Name</p>
                    <label htmlFor="lastName">
                        <input type="input" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    </label>
                    <div>
                        {lastNameError && <p>error message</p>}
                    </div>
                </div>
            </fieldset>
            <div>
                <p>Email</p>
                <label htmlFor="email">
                    <input type="input" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <div>
                    {emailError && <p>error message</p>}
                </div>
            </div>
            <fieldset>
                <div>
                    <p>Password</p>
                    <label htmlFor="password">
                        <input type="input" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <div>
                        {passwordError && <p>error message</p>}
                    </div>
                </div>
                <div>
                    <p>Confirm Password</p>
                    <label htmlFor="confirmPassword">
                        <input type="input" name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                    </label>
                    <div>
                        {confirmPasswordError && <p>error message</p>}
                    </div>
                </div>
            </fieldset>
            <div>
                <button type="submit">Register</button>
                <button type="button">Reset Form</button>
            </div>
        </form>
    );
}

export default RegisterForm;