import { useState } from 'react';
import { useNavigate } from "react-router-dom";

//import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
//import CheckButton from "react-validation/build/button";

import AuthService from "../../services/auth.service";

import './index.css';

//const required = value => {
//  if (!value) {
//    return (
//      <div className="alert alert-danger" role="alert">
//        This field is required!
//      </div>
//    );
//  }
//};

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');
  const [message, setMessage] = useState('');

  const [form, setForm] = useState(null);
  const [cb, setcb] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    //form.validateAll();
    console.log(form);

    console.log(cb);
    //if (cb.context._errors.length === 0)
    if (true) {
      AuthService.login(username || form.username.value, password || form.password.value).then(
        () => {
          navigate("/Dashboard");
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  }

  //  const handleReset = () => {
  //    setUsername('');
  //    setPassword('');
  //  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <form
          onSubmit={e => handleLogin(e)}
          ref={c => setForm(c)}
        >
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            {/* validations={[required]} */}
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
            {/* validations={[required]} */}
          </div>

          <div className="form-group">
            <button
              className="btn btn-primary btn-block"
              disabled={loading}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <input type='checkbox'
            style={{ display: "none" }}
            ref={c => setcb(c)}
          />
        </form>
      </div>
    </div>
  )
}

export default Login