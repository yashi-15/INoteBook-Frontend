import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        const { name, email, password } = credentials;
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem("token", json.authtoken);
            navigate("/");
            props.showalert("Sign up successful!","success")
        } else {
          props.showalert("Invalid credentials!","success")
        }
    };
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input type="text" className="form-control" id="name" onChange={onChange} name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange} name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" id="password" onChange={onChange} name="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">
                        Confirm Password
                    </label>
                    <input type="password" className="form-control" id="cpassword" onChange={onChange} name="cpassword" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Signup;
