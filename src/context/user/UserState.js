import React, { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
    const host = "http://localhost:5000";
    const [user, setUser] = useState("Null");

    // GET USER
    // API call
    const getUser = async () => {
            const response = await fetch(`${host}/api/auth/getuser`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
            });
        const json = await response.json();
        setUser(json);
        console.log(json);
    };

    //EDIT USER DETAILS
    const editUser = async (_id, name, email, Date) => {
        // API call
        const response = await fetch(`${host}/api/auth/updateuser`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify({ name, email }),
        });
        const json = response.json();
        console.log(json)

        // client side
        setUser({...user, name, email, Date})
    };

    return <UserContext.Provider value={{ user, getUser, editUser }}>{props.children}</UserContext.Provider>;
};

export default UserState;
