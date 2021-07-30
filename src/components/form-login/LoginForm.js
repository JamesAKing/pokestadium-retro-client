import React, { useState } from 'react';

function LoginForm() {
    const [ username, setUsername ] = useState('');
    const [ usernameError, setUsernameError ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('submitted');
        if (!formValid()) return console.log('frm is not valid');
    };

    const formValid = () => {
        if (usernameError || emailError || passwordError) {
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
                    <input type="input" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    {passwordError && <p>error message</p>}
                </div>
            </div>
            <div>
                <button type="submit">Register</button>
                <button type="button">Reset Form</button>
            </div>
        </form>
    )
}

export default LoginForm;