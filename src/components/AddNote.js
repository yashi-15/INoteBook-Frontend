import React, { useContext, useState, useRef } from "react";
import NoteContext from "../context/notes/noteContext";

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const HandleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showalert("Note added Successfully!", "success");
        refClose.current.click();
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };
    const refClose = useRef(null);

    return (
        <div>
            <div className="container m-5">
                <i class="fa-solid fa-plus fa-2xl text-light mx-5" style={{color: "#ffffff;"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                <div class="modal fade text-light" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog ">
                        <div class="modal-content bg-dark">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                                    Add a note
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">
                                            Title
                                        </label>
                                        <input type="text" className="form-control bg-black text-light" id="title" value={note.title} name="title" onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">
                                            Description
                                        </label>
                                        <input type="text" className="form-control bg-black text-light" id="description" value={note.description} name="description" onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">
                                            Tag
                                        </label>
                                        <input type="text" className="form-control bg-black text-light" id="tag" value={note.tag} name="tag" onChange={onChange} />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" class="btn btn-primary" disabled={note.title.length < 3 || note.description.length < 5} className="btn btn-primary" onClick={HandleClick}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNote;
