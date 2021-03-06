import React from "react";
import { Button } from "react-bootstrap";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const navigateUrl = location?.state?.from || "/home";
  let errorElement;

  if (loading || githubLoading) {
    return <Loading></Loading>;
  }

  if (error || githubError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message}
          {githubError?.message}
        </p>
      </div>
    );
  }
  if (user || githubUser) {
    navigate(navigateUrl);
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-primary w-50"></div>
        <p className="mt-2 p-3">or</p>
        <div style={{ height: "2px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div>
          <Button
            onClick={() => signInWithGoogle()}
            style={{ width: "350px" }}
            className="m-2 d-block mx-auto"
            variant="info"
          >
            <img
              style={{ width: "30px" }}
              src="https://cdn3.iconfinder.com/data/icons/inside/PNG/256x256/icontexto-inside-google.png"
              alt=""
            />
            <span className="px-3">Google Sign In</span>
          </Button>
          <Button 
            style={{ width: "350px" }}
            className="m-2 d-block mx-auto" 
            variant="primary">
            <img
              style={{ width: "30px" }}
              src="https://cdn.pixabay.com/photo/2019/04/17/17/40/facebook-4134867_1280.png"
              alt=""
            />
            <span className="px-3">Facebook Sign In</span>
          </Button>
          <Button
            onClick={() => signInWithGithub()}
            style={{ width: "350px" }}
            className="m-2 d-block mx-auto"
            variant="secondary"
          >
            <img
              style={{ width: "30px" }}
              src="https://octodex.github.com/images/Professortocat_v2.png"
              alt=""
            />
            <span className="px-3">Github Sign In</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
