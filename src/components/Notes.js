import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        getNotes();
    }, []);

    const  [note, setNote] = useState({id:"" ,etitle:"", edescription:"", etag:"default"});

    const HandleClick = (e)=>{
        console.log("updating the note", note)
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        // addNote(note.title, note.description, note.tag);
    }
    
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
    };
    const ref = useRef(null)
    const refClose = useRef(null)
    return (
        <>
            <AddNote />
            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
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
                        <input type="text" className="form-control" id="etitle" name= "etitle" value={note.etitle} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                        Description
                        </label>
                        <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">
                        Tag
                        </label>
                        <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                    </div>
                </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={HandleClick}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1>Your Notes</h1>
                <div className="d-flex">
                    {notes.map((note) => {
                        return <NoteItem note={note} updateNote={updateNote} key={note._id} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default Notes;
