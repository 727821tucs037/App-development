import React from "react";
import * as Components from "./Components.js";
import useForm from "./Hooks/useForm";

const App = () => {
  const toggleLogin = React.useRef(null);
  const toggleSignup = React.useRef(null);
  const signupForm = React.useRef(null);
  const loginForm = React.useRef(null);
  const [slideUp, toggle] = React.useState(false);

  const [signupValues, signupFormChange, resetSignupForm] = useForm({
    name: "",
    email: "",
    password: ""
  });

  const [signinValues, signinFormChange, resetSigninForm] = useForm({
    email: "",
    password: ""
  });

  const handleSignup = () => {
    console.log(signupValues);
    resetSignupForm();
  };

  const handleSignin = () => {
    console.log(signinValues);
    resetSigninForm();
  };

  return (
    <React.Fragment>
      <Components.GlobalStyle />
      <Components.Root>
        <Components.SignupContainer signUp ref={signupForm} slideUp={slideUp}>
          <Components.SignupFormTitle
            ref={toggleSignup}
            onClick={() => {
              toggle(false);
              resetSignupForm();
            }}
            slideUp={slideUp}
          >
            Sign Up
          </Components.SignupFormTitle>
          <Components.SignupForm slideUp={slideUp}>
            <Components.SignupInput
              type="text"
              placeholder="Name"
              name="name"
            />
            <Components.SignupInput
              type="email"
              placeholder="Email"
              name="email"
            />
            <Components.SignupInput
              type="password"
              placeholder="Password"
              name="password"
            />
                    <Components.SignupInput
              type="Number"
              placeholder="Weigth"
              name="Weight"
            />
             <Components.SignupInput
              type="Number"
              placeholder="Height"
              name="Height"
            />
          </Components.SignupForm>
          <Components.SignupButton
            slideUp={slideUp}
            onClick={() => handleSignup()}
          >
            Sign Up
          </Components.SignupButton>
        </Components.SignupContainer>
        <Components.LoginContainer ref={loginForm} slideUp={slideUp}>
          <Components.CenterWrapper slideUp={slideUp}>
            <Components.LoginTitle
              ref={toggleLogin}
              slideUp={slideUp}
              onClick={() => {
                toggle(true);
                resetSigninForm();
              }}
            >
              Login
            </Components.LoginTitle>
            <Components.LoginFormContainer slideUp={slideUp}>
              <Components.LoginInput
                type="email"
                placeholder="Email"
                name="email"
              />
              <Components.LoginInput
                type="password"
                placeholder="Password"
                name="password"

              />
            </Components.LoginFormContainer>
            <Components.LoginButton
              slideUp={slideUp}
              onClick={() => handleSignin()}
            >
              Login
            </Components.LoginButton>
          </Components.CenterWrapper>
        </Components.LoginContainer>
      </Components.Root>
    </React.Fragment>
  );
};
export default App;