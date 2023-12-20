import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import AppNavBar from "../Components/Navbar";
import { onLogin, onRegister } from "../Api/AuthApi";
import "../index.css";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";

const Home = () => {
    // const [loginOpen, setLoginOpen] = useState(false);
    // const [registerOpen, setRegisterOpen] = useState(false);
    // const handleClose = () => {
    //     if (loginOpen === true) {
    //         setLoginOpen(false);
    //     } else {
    //         setRegisterOpen(false);
    //     }
    // }
    // const handleLogin = (e: React.SyntheticEvent) => {
    //     e.preventDefault();
    //     const target = e.target as typeof e.target & {
    //         username: { value: string };
    //         password: { value: string };
    //     };
    //     const username = target.username.value;
    //     const password = target.password.value;
    //     onLogin(username, password)
    //         .then((res) => {
    //             localStorage.setItem("jwt", res.data.token); 
    //             console.log("Logged in");
    //         })
    //         .catch((err: Error) => {
    //             console.log(err)
    //         })
    //     setLoginOpen(false);
    // }

    // const handleRegister = (e: React.SyntheticEvent) => {
    //     e.preventDefault();
    //     const target = e.target as typeof e.target & {
    //         username: { value: string };
    //         email: {value: string};
    //         password: { value: string };
    //     };
    //     const username = target.username.value;
    //     const password = target.password.value;
    //     const email = target.email.value;
    //     onRegister(username, password, email)
    //         .then((res) => {
    //             console.log("Registered");
    //         })
    //         .catch((err: Error) => {
    //             alert(`ERROR ${err.message}`);
    //         })
    //     setRegisterOpen(false);
    // }
    const navigate = useNavigate();

    // TODO Separate forms into components
    return (
        <Container fluid className="container-fluid text-center vh-100 homeBackground m-0 p-0">
            {/* <AppNavBar setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen}/> */}
            <Container fluid className="vh-100 homeBackgroundLayer">
                {/* <Modal show={loginOpen || registerOpen} backdrop="static" centered>
                    <Modal.Title className="align-content-center p-2 text-center">
                        {loginOpen ? 'Log In' : 'Register'}
                    </Modal.Title>
                    <Modal.Body className="align-items-center flex-column">
                        {
                            (loginOpen === true) ? <LoginForm submitFunction={handleLogin} /> : <RegisterForm submitFunction={handleRegister} />
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="primary" form="loginForm">Submit</Button>
                        <Button onClick={handleClose} variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal> */}
                <Container fluid className="vh-100 d-flex justify-content-center align-items-center flex-column">
                    <span className="landingPageTitle">Made for the fans, by the fans</span>
                    <span className="landingPageDesc">Experience the history of football excellence</span>
                    <CustomButton className="getStarted py-2 px-4 my-4" text="Get Started" click={() => {navigate("/login")}} />
                </Container>
            </Container>    
        </Container>
    )
};

export default Home