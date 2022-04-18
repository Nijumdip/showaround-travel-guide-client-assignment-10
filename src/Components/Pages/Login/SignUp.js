import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    return (
        <div className="container w-50 mx-auto m-5">
            <h2 className="text-primary text-center"> Please SignUp</h2>
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control" name='name' id="exampleInputName1" placeholder="Your Name" required/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" required/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" name='password' id="exampleInputPassword1" placeholder="Password" required/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" name='terms'  id="exampleCheck1" />
                   
                    <label htmlFor="exampleCheck1">Accept Showaround Travel Guide Terms and Conditions</label>
                </div>
                <button type="submit" className="btn btn-primary d-block mx-auto w-50 mb-3">Register</button>
                
            </form>
            <p>Already Have an Account ? <Link to='/login' className='text-primary text-decoration-none'>Please Login</Link></p>
            <SocialLogin></SocialLogin>  
        </div>
    );
};

export default SignUp;