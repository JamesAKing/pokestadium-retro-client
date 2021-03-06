import React, { useState } from 'react';
import { loginURL } from '../../utilities/apiURLs';
import { useAuth } from '../../contexts/AuthContext';
import LoggedInRedirect from '../logged-in-redirect/LoggedInRedirect';
import { dashboardURL } from '../../utilities/routerURLs';

function LoginForm() {
    // Consider making this more succint with an object and {...}
    const [ username, setUsername ] = useState('');
    const [ usernameError, setUsernameError ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');

    const [ passwordVisible, setPasswordVisible ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const { user, loginUser } = useAuth();

    const handleSubmit = async e => {
        e.preventDefault();
        if (!formValid()) return console.log('form is not valid');
        setLoading(true);

        const loginData = {
            username: username,
            email: email,
            password: password
        };

        loginUser(loginURL, loginData)
        setLoading(false);
    };

    const resetForm = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        resetErrors();
    };

    const resetErrors = () => {
        setUsernameError('');
        setEmailError('');
        setPasswordError('');
    };

const formValid = () => {
    resetErrors();
    // Improve Error Handling
    if (usernameError || emailError || passwordError) return false;
    if (username.length === 0 || email.length === 0) return false;
    if (password.length < 6) {
        setPasswordError('Password must be at least 6 char\'s long');
        return false;
    };
    
    return true;
};

    if (user && !loading) return <LoggedInRedirect redirectTo={dashboardURL} />

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
            <div>
                <p>Email</p>
                <label htmlFor="email">
                    <input type="input" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <div>
                    {emailError && <p>error message</p>}
                </div>
            </div>
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
                <label htmlFor="togglePasswordVisibility">
                    <input type="checkbox" name="togglePasswordVisibility" onClick={() => setPasswordVisible(!passwordVisible)}/>
                </label>
            </div>
            <div>
                <button disabled={loading} type="submit">Login</button>
                <button type="button" onClick={resetForm}>Reset Form</button>
            </div>
        </form>
    )
}

export default LoginForm;