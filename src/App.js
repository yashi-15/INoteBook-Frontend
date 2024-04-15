import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
function App() {
    return (
        <>
            <NoteState>
                <Router>
                    <NavBar />
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<Home />}></Route>
                            <Route exact path="/about" element={<About />}></Route>
                        </Routes>
                    </div>
                </Router>
            </NoteState>
        </>
    );
}

export default App;
