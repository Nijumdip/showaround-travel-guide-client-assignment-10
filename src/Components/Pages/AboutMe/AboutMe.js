import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className=" header container  mb-3">
      <div className="d-lg-flex container justify-content-between align-items-center p-5 mt-5">
        <div className="w-100 me-5 d-flex justify-content-center align-items-center">
          <div>
            <h1 className="text-dark">About Me</h1>
            <div>
              <h1>Shamima Akter</h1>
              <h3>Web developer</h3>
            </div>
            <p>
              I allow myself to take a break and do something I enjoy. I can
              show kindness to others. I'm not sure what will happen tomorrow,
              but I'll take care of myself so I am strong enough to face it. I
              choose to approach my problems with a calm heart and mind.
            </p>
            <h6 className="text-dark">
              I am following my heart and intuition.I have realistic
              expectations of myself.I love challenges . That's why ..
            </h6>
            <p>
              I enrolled complete web-development by Jhankar Mahbub and Learn to
              understand myself. Be persistent despite obstacles. Learn to
              accept  new opportunities. Learn how to make effective decisions.
              Practice gratitude I will be a successful skilled web developer in 2023
              <h6>In-Sha-Allah</h6>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="rounded-3"
            width={"350px"}
            height={"450px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC6mg2TQSwaKp70HpURYwh8m9OoLxfgtK9ZVkoEBNfJrD4zG5j_CXfXV3tvoqFp-cNss&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <hr />

      <div className="d-lg-flex container justify-content-between align-items-center p-5 mt-5">
        <div className="w-100 me-5 d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <h3>Personal Information:</h3>
              <p> Address :</p>
              <p> Gender : </p>
              <p> Date of birth:</p>
              <p> Nationality :</p>
            </div>
          </div>
        </div>
        <div className="header-contact">
          <h3>Contact Information:</h3>
          <p>
            <a href="mailto:nijumdip019911@gmail.com">
              {" "}
              Email : nijumdip019911@gmail.com
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/nizum.nizum.1481/">
              Facebook : https://www.facebook.com/nizum.nizum.1481/
            </a>
          </p>
          <p>
            <a href="/">Website : #########</a>
          </p>
          <p>
            <a href="tel:+01991139298">Phone : 01991139298</a>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AboutMe;
