import React, { useContext, useEffect, useState, useRef } from "react";
import UserContext from "../context/user/userContext";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
    const usercontext = useContext(UserContext);
    const { user, getUser, editUser } = usercontext;
    var navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            getUser();
        } else {
            navigate("/login");
        }
    }, []);
    const [userinfo, setUserinfo] = useState({id:"",name:"", email:"", Date:""})
    useEffect(() => {
        if (user) {
            setUserinfo({id:user._id, name: user.name, email: user.email, Date:user.Date});
        }
    }, [user]);
    const HandleClick = (e) => {
        editUser(userinfo.id, userinfo.name, userinfo.email, userinfo.Date);
        props.showalert("User Details Updated Successfully!", "success");
        refClose.current.click();
    };
    const onChange = (e) => {
        setUserinfo({ ...userinfo, [e.target.name]: e.target.value });
    };

    const ref = useRef(null);
    const refClose = useRef(null);

    return (
        <div>
            <div className="m-5 text-center">
                {" "}
                <img className="rounded-circle" src="https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1718939402~exp=1718943002~hmac=56958e0094b174958a41e2bb7e93d591aac1913f769b7820676562022ba5b6d0&w=740" width={"100rem"} height={"100rem"}></img>{" "}
            </div>
            <h3 className="text-capitalize text-primary m-3 text-center">{user.name}</h3>
            <h6 className="text-light m-3 text-center">{user.email}</h6>
            <h6 className="fw-light text-light m-3 text-center">Created on: {new Date(parseInt(user.Date)).toLocaleDateString("en-GB")}</h6>
            <div className="text-center">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit Profile
            </button>
            </div>

            <div class="modal fade text-light" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content bg-dark">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                Edit Profile
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="mb-3"> 
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input type="text" className="form-control bg-black text-light" value={userinfo.name} onChange={onChange} id="name" name="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <input type="email" className="form-control bg-black text-light" value={userinfo.email} onChange={onChange} id="email" aria-describedby="emailHelp" name="email" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" class="btn btn-primary" onClick={HandleClick}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
