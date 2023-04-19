import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');

    const {createUser} = useContext(AuthContext);

    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        setError('');
        if(password !== confirm){
            setError('your password didnot match');
            return;
        }
        else if(password.length < 6){
            setError('password must be 6 letters');
            return;
        }

        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign up</h2>
        <form onSubmit={handleSignUp} >
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
            </div>
            <div className="form-control">
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="" required/>
            </div>
            <div className="form-control">
                <label htmlFor="confirm">confirm password</label>
                <input type="password" name="confirm" id="" required/>
            </div>
            <input className='btn-submit' type="submit" value="signup" />          
        </form>
        <p><small>already have an account?  <Link to='/login'>login</Link> </small></p>
        <p>{error}</p>
    </div>
    );
};

export default SignUp;