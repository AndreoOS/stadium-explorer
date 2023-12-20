import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";
import CustomButton from "../Components/CustomButton";
import { onLogin } from "../Api/AuthApi";



const Login = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const handleSubmit = (email: string, password: string) => {
        navigate("/dashboard");
        onLogin(email, password)
          .then((res) => {
            localStorage.setItem("jwt", res.data.token);
            // setUser(res.data.user);
            navigate("/dashboard");
          })
          .catch((err) => {
            setMessage(err.response.data.info as string);
          });
    };

    // TODO Separate forms into components
    return (
        <Wrapper>
            <Container fluid className="d-flex container-fluid text-center vh-100 homeBackground m-0 p-0">
                <Container fluid className="d-flex vh-100 homeBackgroundLayer justify-content-center align-items-center">
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={Yup.object({
                            email: Yup.string()
                            .matches(
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                "This email is not valid"
                            )
                            .email("Field should contain a valid e-mail")
                            .max(255)
                            .required("E-mail is required"),
                            password: Yup.string()
                            .min(6, "Password should be longer than 6 characters")
                            .required("Password is required"),
                        })}
                        onSubmit={(values) => {
                            handleSubmit(values.email, values.password);
                        }}
                        >
                        {(formik) => (
                            <Form
                            onSubmit={formik.handleSubmit}
                            autoComplete="off"
                            className="d-flex flex-column align-self-center align-items-center p-5 loginForm customSize"
                            >
                            <div className="border-bottom border-black wrapp mb-2">
                                <BiEnvelope className="icon" />
                                <Field
                                placeholder="email"
                                name="email"
                                type="mail"
                                className="border-0 arcticBg"
                                />
                            </div>

                            <ErrorMessage
                                name="email"
                                component="h5"
                                className=" text-danger"
                            />
                            <div className="border-bottom border-black wrapp">
                                <BiLockAlt className="icon" />
                                <Field
                                placeholder="password"
                                name="password"
                                type="password"
                                className="border-0 arcticBg"
                                />
                            </div>
                            <ErrorMessage
                                name="password"
                                component="h5"
                                className="text-danger"
                            />
                            <Link to={"/forgot"} className="align-self-end pt-3" style={{color: "#091442"}}>
                                Forgot password?
                            </Link>
                            <Link to={"/register"} className="align-self-end pt-3" style={{color: "#091442"}}>
                                New member?
                            </Link>
                            <p className="mb-5 text-danger">{message}</p>
                            <CustomButton
                                className="button mt-5 mb-3 rounded-5"
                                text="Login"
                                click={() => {
                                if (!formik.errors.email && !formik.errors.password) {
                                    handleSubmit(formik.values.email, formik.values.password);
                                }
                                }}
                            />
                            </Form>
                        )}
                    </Formik>                    
                </Container>    
            </Container>
        </Wrapper>
    )
};

export default Login