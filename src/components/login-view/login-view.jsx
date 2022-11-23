import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
import { BASE_URL, setUser, validateInput } from '../../actions/actions';
import { connect } from 'react-redux';
import "./login-view.scss";
import { Link } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

function LoginView({ user, setUser, validateInput, onLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Declare hook for each input
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  //Validate user input
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameError('Username Required');
      isReq = false;
    } else if (username.length < 2) {
      setUsernameError('Username must be at least 3 characters long.');
      isReq = false;
    }
    if (!password) {
      setPasswordError('Password Required');
      isReq = false;
    } else if (password.length < 4) {
      setPasswordError('Password must be at least 5 characters long.')
    }
    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios
        .post(BASE_URL+'/login', {
          username: username,
          password: password,
        })
        .then((response) => {
          const data = response.data;
          onLoggedIn(data);
      
        })
        .catch((e) => {
          console.log(e.response);
          alert(
            'Wrong Username or Password. If you are new here, please register first.'
          );
        });
    }
  };

  return (
    <Form className="login-form__style">
      <Form.Group className="mb-3 form-group" controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
        {/* code added here to display validation error */}
        {usernameError && <p>{usernameError}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        {/* code added here to display validation error */}
        {passwordError && <p>{passwordError}</p>}
      </Form.Group>
      <div class='login_buttons_container'>
        <div class='login_buttons_container_divs'>
          <Button variant="warning" type="submit" onClick={handleSubmit}>
            Log In
          </Button>
        </div>
        <div class='login_buttons_container_divs'>
          <p style={{marginTop: '5px'}}>OR</p>
        </div>
        <div class='login_buttons_container_divs'>
          <Link to={`/register`} class='btn btn-info'>
           Sign Up
          </Link>
        </div>
      </div>
    </Form>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }),
  onLoggedIn: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { setUser, validateInput })(LoginView);
