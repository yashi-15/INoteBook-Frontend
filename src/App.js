import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import UserState from "./context/user/UserState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Profile from "./components/Profile";
import { useState } from "react";
function App() {
    const [alert, setAlert] = useState(null);
    const showalert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };
    return (
        <>
            <UserState>
                <NoteState>
                    <Router>
                        <NavBar showalert={showalert} />
                        <Alert alert={alert} />
                        <div className="container">
                            <Routes>
                                <Route exact path="/" element={<Home showalert={showalert} />}></Route>
                                <Route exact path="/about" element={<About />}></Route>
                                <Route exact path="/login" element={<Login showalert={showalert} />}></Route>
                                <Route exact path="/signup" element={<SignUp showalert={showalert} />}></Route>
                                <Route exact path="/profile" element={<Profile showalert={showalert} />}></Route>
                            </Routes>
                        </div>
                    </Router>
                </NoteState>
            </UserState>
        </>
    );
}

export default App;
