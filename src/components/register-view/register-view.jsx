import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';
import './register-view.scss';
import axios from 'axios';

export function RegistrationView(porps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    // Declare hook for each input
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    // Validate user input
    const validate = () => {
        let isReq = true;
        if (!username) {
            setUsernameError("Username is required");
            isReq = false;
        } else if (username.length < 4) {
            setUsernameError("Username must be 5 characters long");
            isReq = false;
        }
        if (!password) {
            setPasswordError("Password is required");
            isReq = false;
        } else if (username.length < 4) {
            setPasswordError("Password must be 5 characters long");
            isReq = false;
        }
        if (!email) {
            setEmailError("Add Email");
            isReq = false;
        } else if (email.indexOf("@") === -1) {
            setEmail("Email must be a valid email address");
            isReq = false;
        }
        return isReq;
    };


    const handleRegister = (e) => {
        e.preventDefault();
        console.log(username, password, email, birthday);
        /* Send a request to the server for authentication
           then call props on registerd user (username) */
        const isReq = validate();
        if (isReq) {
            axios.post('https://movie-api-21197.herokuapp.com/users', {
                Username: username,
                Password: password,
                Email: email,
                Birthday: birthday
            }).then(response => {
                const data = response.data;
                console.log(data);
                alert("Successfully registreation. You can now precced to login.");
                window.open('/', '_self');
                // The Second argument '_self' is necessary so that the page will open inthe current tab.
            }).catch((response) => {
                console.error(response);
                alert('ERROR user registering');
            });
        }
    };

    return (
        <Container className='container-style'>
            <Row>
                <Col>
                    <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Title>Create an account for free</Card.Title>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}
                                            placeholder='Enter a username'
                                            required
                                        />
                                        {/* code added here to display validation error */}
                                        {usernameError && <p>{usernameError}</p>}
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control
                                            type='password'
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            minLength='6'
                                            placeholder='Your password must be 6 or more characters'
                                            required
                                        />
                                        {/* code added here to display validation error */}
                                        {passwordError && <p>{passwordError}</p>}
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Date of Birth:</Form.Label>
                                        <Form.Control
                                            type='date'
                                            value={birthday}
                                            onChange={e => setBirthday(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control
                                            type='email'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder='Enter a valid Email address'
                                            required
                                        />
                                        {/* code added here to display validation error */}
                                        {emailError && <p>{emailError}</p>}
                                    </Form.Group>

                                    <Button variant='warning'
                                        type='submit'
                                        onClick={handleRegister}>
                                        Sign Up
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    )
}

RegistrationView.propTypes = {
    onRegistration: PropTypes.func.isRequired
};
