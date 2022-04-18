import { updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/home";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    //   const agree = event.target.terms.checked;
 
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  return (
    <div className="container w-50 mx-auto m-5">
      <h2 className="text-primary text-center"> Please SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            id="exampleInputName1"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email address"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            id="exampleInputPassword1"
            placeholder="Password"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            onClick={()=>setAgree(!agree)}
            type="checkbox"
            className="form-check-input"
            name="terms"
            id="exampleCheck1"
          />

          <label
            className={`ps-2 ${agree ? '' : 'text-danger'}`}
           htmlFor="exampleCheck1">
            Accept Showaround Travel Guide Terms and Conditions
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary d-block mx-auto w-50 mb-3"
        >
          Register
        </button>
      </form>
      <p>
        Already Have an Account ?
        <Link to="/login" className="text-primary text-decoration-none">
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
