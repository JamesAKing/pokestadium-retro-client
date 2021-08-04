import React, { useState } from 'react';
import axios from 'axios';
import LoggedInRedirect from '../logged-in-redirect/LoggedInRedirect';
import { loginURL } from '../../utilities/routerURLs';
import { createUserURL } from '../../utilities/apiURLs';

function RegisterForm() {

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
    const [ passwordVisible, setPasswordVisible ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ registered, setRegistered ] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        if (!formValid()) return console.log('form is not valid');
        setLoading(true);
        // Do I need to create an object here? 
        const createUserObj = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        try {
            const resp = await axios.post(createUserURL, createUserObj);
            console.log(resp);
            // resetForm();
            setRegistered(true);
        } catch (err) { 
            console.log(err);
            // Add Form Error Message? 
            // Add logic for is username or email is taken - update error messages.
            setLoading(false);
        };

        setLoading(false);
    };

    const resetForm = () => {
        setUsername('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        resetErrors();
    };

    const resetErrors = () => {
        setUsernameError('');
        setFirstNameError('');
        setLastNameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
    };

    const formValid = () => {
        resetErrors();
        // Improve Error Handling
        if (usernameError || firstNameError || lastNameError || emailError || passwordError || confirmPasswordError) {
            return false;
        }
        if (username.length === 0 || firstName.length === 0 || lastName.length === 0 || email.length === 0) {
            return false;
        }
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 char\'s long');
            return false;
        };
        if (password !== confirmPassword) {
            setConfirmPasswordError('Password\'s do not match');
            return false
        };
        
        return true;
    };

    if (registered && !loading) return <LoggedInRedirect redirectTo={loginURL} />

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
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <div>
                    {emailError && <p>error message</p>}
                </div>
            </div>
            <fieldset>
                <div>
                    <p>Password</p>
                    <label htmlFor="password">
                        <input type={passwordVisible ? "text" : "password"} name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <div>
                        {passwordError && <p>{passwordError}</p>}
                    </div>
                </div>
                <div>
                    <p>Confirm Password</p>
                    <label htmlFor="confirmPassword">
                        <input type={passwordVisible ? "text" : "password"} name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                    </label>
                    <div>
                        {confirmPasswordError && <p>{confirmPasswordError}</p>}
                    </div>
                </div>
                <div>
                    <label htmlFor="togglePasswordVisibility">
                        <input type="checkbox" name="togglePasswordVisibility" onClick={() => setPasswordVisible(!passwordVisible)}/>
                    </label>
                </div>
            </fieldset>
            <div>
                <button disabled={loading} type="submit">Register</button>
                <button type="button" onClick={resetForm}>Reset Form</button>
            </div>
        </form>
    );
}

export default RegisterForm;