import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""})
    let navigate = useNavigate();
    const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password}),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        localStorage.setItem('token', json.authtoken)
        navigate("/");
        props.showalert("Logged in Successfully!","success")
    }
    else{
        props.showalert("Invalid credentials!","success")
    }
}
const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}

    return (
        <div>
            <form onSubmit={handleSubmit} className="text-light">
                <h1 className="mb-5">Login with your credentials</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input type="email" className="form-control bg-dark text-light" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control bg-dark text-light" id="password" name="password" value={credentials.password} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
