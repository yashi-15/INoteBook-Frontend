import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login  from './components/Login';
import SignUp  from './components/Signup';
import { useState } from "react";
function App() {
    const [alert, setAlert] = useState(null);
    const showalert = (message, type)=>{
        setAlert({
          msg:message,
          type:type
        });
        setTimeout(()=>{setAlert(null)},2000);
      };
    return (
        <>
            <NoteState>
                <Router>
                    <NavBar />
                    <Alert alert= {alert}/>
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<Home showalert = {showalert} />}></Route>
                            <Route exact path="/about" element={<About />}></Route>
                            <Route exact path="/login" element={<Login showalert = {showalert}/>}></Route>
                            <Route exact path="/signup" element={<SignUp showalert = {showalert}/>}></Route>
                        </Routes>
                    </div>
                </Router>
            </NoteState>
        </>
    );
}

export default App;
