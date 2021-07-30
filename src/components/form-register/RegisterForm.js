import React, { useState } from 'react';
// import axios from 'axios';

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
    const [ passwordVisible, setPasswordVisible ] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('submitted');
        if (!formValid()) return console.log('form is not valid');
    };

    const resetForm = () => {
        setUsername('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setUsernameError('');
        setFirstNameError('');
        setLastNameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
    };

    const formValid = () => {
        if (usernameError || firstNameError || lastNameError || emailError || passwordError || confirmPasswordError) {
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
                        {passwordError && <p>error message</p>}
                    </div>
                </div>
                <div>
                    <p>Confirm Password</p>
                    <label htmlFor="confirmPassword">
                        <input type={passwordVisible ? "text" : "password"} name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                    </label>
                    <div>
                        {confirmPasswordError && <p>error message</p>}
                    </div>
                </div>
                <div>
                    <label htmlFor="togglePasswordVisibility">
                        <input type="checkbox" name="togglePasswordVisibility" onClick={() => setPasswordVisible(!passwordVisible)}/>
                    </label>
                </div>
            </fieldset>
            <div>
                <button type="submit">Register</button>
                <button type="button" onClick={resetForm}>Reset Form</button>
            </div>
        </form>
    );
}

export default RegisterForm;