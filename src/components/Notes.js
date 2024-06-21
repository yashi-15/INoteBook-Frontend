import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import UserContext from "../context/user/userContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
    const usercontext = useContext(UserContext);
    const { user, getUser } = usercontext;

    const Notescontext = useContext(NoteContext);
    const { notes, getNotes, editNote } = Notescontext;
    var navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            getNotes();
            getUser();
        } else {
            navigate("/login");
        }
    }, []);

    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

    const HandleClick = (e) => {
        console.log("updating the note", note);
        editNote(note.id, note.etitle, note.edescription, note.etag);
        props.showalert("Note Updated Successfully!", "success");
        refClose.current.click();
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    };
    const ref = useRef(null);
    const refClose = useRef(null);

    return (
        <>
            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade text-light" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Edit Note
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">
                                        Title
                                    </label>
                                    <input type="text" className="form-control bg-black text-light" id="etitle" name="etitle" value={note.etitle} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">
                                        Description
                                    </label>
                                    <input type="text" className="form-control bg-black text-light" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">
                                        Tag
                                    </label>
                                    <input type="text" className="form-control bg-black text-light" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">
                                Close
                            </button>
                            <button disabled={note.etitle.length < 3 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={HandleClick}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1 className="text-light mb-5">
                    <span className="text-capitalize">{user.name}</span>'s Notes 📝
                </h1>
                <div className="text-light">
                {notes.length === 0 && "No notes to display..."}
                <div className="d-flex flex-wrap m-3 align-items-center">
                    {notes.map((note) => {
                        return <NoteItem note={note} updateNote={updateNote} showalert={props.showalert} key={note._id} />;
                    })}
                    <AddNote showalert={props.showalert} />
                </div>
                </div>
            </div>
        </>
    );
};

export default Notes;
