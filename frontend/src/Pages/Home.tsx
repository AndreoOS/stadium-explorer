import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./Home.css"
import AppNavBar from "../Components/Navbar";


const Home = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const handleLoginClose = () => setLoginOpen(false);
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
        };
        const username = target.username.value;
        const password = target.password.value;
        console.log("FORM DATA", username, password);
        setLoginOpen(false);
    }

    // TODO Separate forms into components
    return (
        <Container fluid className="container-fluid text-center vh-100 homeBackground m-0 p-0">
            <AppNavBar setLoginOpen={setLoginOpen}/>
            <Container fluid className="vh-100 homeBackgroundLayer">
                <Modal show={loginOpen} backdrop="static" centered>
                    <Modal.Title className="align-content-center p-2 text-center">
                        Log In
                    </Modal.Title>
                    <Modal.Body className="align-items-center flex-column">
                    <form onSubmit={handleSubmit} id="loginForm">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" name="username" defaultValue=""/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" defaultValue=""/>
                        </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="primary" form="loginForm">Submit</Button>
                        <Button onClick={handleLoginClose} variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal>
            </Container>      
        </Container>
    )
};

export default Home