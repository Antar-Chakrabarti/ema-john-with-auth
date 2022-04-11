import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmpassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = (e) => {
        setConfirmpassword(e.target.value);
    }
    if(user){
        navigate('/shop')
    }
    const handleCreateUser = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match')
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('user created')
            })
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name='password' id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name='password' id='' required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    {/*                     <p style={{ color: 'red' }}>{hookError}</p> */}
                    <input className='form-submit' type="submit" value="Signup" />
                </form>
                <p>
                    Already Have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
                <div className="hr-area"><hr /><p className='or'>or    </p></div>
                <button className='form-btn'>Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;