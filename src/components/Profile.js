import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import UserContext from "../context/user/userContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const usercontext = useContext(UserContext);
    const { user, getUser } = usercontext;
    var navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            getUser();
        } else {
            navigate("/login");
        }
    }, []);
    return (
        <div className="text-center">
            <div className="m-5">
                {" "}
                <img className="rounded-circle" src="https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1718939402~exp=1718943002~hmac=56958e0094b174958a41e2bb7e93d591aac1913f769b7820676562022ba5b6d0&w=740" width={"100rem"} height={"100rem"}></img>{" "}
            </div>
            <h3 className="text-capitalize text-primary m-3">{user.name}</h3>
            <h6 className="text-capitalize text-light m-3">{user.email}</h6>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit Profile
            </button>

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
                                <input type="text" className="form-control bg-black text-light" id="name" name="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <input type="email" className="form-control bg-black text-light" id="email" aria-describedby="emailHelp" name="email" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" class="btn btn-primary">
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
