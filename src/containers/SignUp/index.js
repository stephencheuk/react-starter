import { useState } from "react";
//import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
//import CheckButton from "react-validation/build/button";
//import { isEmail } from "validator";

import AuthService from "../../services/auth.service";

import './SignUp.css';

//const required = value => {
//  if (!value) {
//    return (
//      <div className="alert alert-danger" role="alert">
//        This field is required!
//      </div>
//    );
//  }
//};
//
//const email = value => {
//  if (!isEmail(value)) {
//    return (
//      <div className="alert alert-danger" role="alert">
//        This is not a valid email.
//      </div>
//    );
//  }
//};
//
//const vusername = value => {
//  if (value.length < 3 || value.length > 20) {
//    return (
//      <div className="alert alert-danger" role="alert">
//        The username must be between 3 and 20 characters.
//      </div>
//    );
//  }
//};
//
//const vpassword = value => {
//  if (value.length < 6 || value.length > 40) {
//    return (
//      <div className="alert alert-danger" role="alert">
//        The password must be between 6 and 40 characters.
//      </div>
//    );
//  }
//};

const SignUp = (props) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState(null);
  const [checkBtn, setCheckBtn] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    //form.validateAll();
    console.log(form);
    console.log(checkBtn);

    //if (checkBtn.context._errors.length === 0)
    if (true) {
      AuthService.register(
        username || form.username.value,
        email || form.email.value,
        password || form.password.value,
      ).then(
        response => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        {
          /*
          onSubmit={ e => handleRegister(e) }
          ref={c => {
            setForm(c);
          }}
          */
        }
        <form
          onSubmit={e => handleRegister(e)}
          ref={
            c => {
              setForm(c);
            }
          }
        >
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
                {/* validations={[required, vusername]} */}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                {/* validations={[required, email]} */}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                {/* validations={[required, vpassword]} */}
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful
                    ? "alert alert-success"
                    : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <input type='checkbox'
            style={{ display: "none" }}
            ref={
              c => {
                setCheckBtn(c);
              }
            }
          />
          {
            /*
            ref={c => {
              setCheckBtn(c);
            }}
            */
          }
        </form>
      </div>
    </div>
  )
}

export default SignUp;
