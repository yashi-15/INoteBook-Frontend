import React, { useContext, useRef } from "react";
import NoteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    const ref = useRef(null);
    const refClose = useRef(null);
    return (
        <div>
            <div className="card m-2 bg-dark" style={{ width: "18rem" }}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title text-primary">{note.title}</h5> <span className="text-capitalize bg-opacity-25 text-secondary p-1 rounded-3 fs-6 fw-light">{note.tag}</span>
                    </div>
                    <p className="card-text text-light">{note.description}</p>
                    <i
                        className="fa-solid fa-file-pen m-2 text-light"
                        onClick={() => {
                            updateNote(note);
                        }}
                    ></i>
                    <i className="fa-sharp fa-solid fa-trash m-2 text-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop2"></i>
                    <div class="modal fade text-light" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content bg-dark">
                                <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">  Delete Note</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">This note wil be deleted permanently. Are you sure?</div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        onClick={() => {
                                            deleteNote(note._id);
                                            refClose.current.click();
                                            props.showalert("Note deleted Successfully!", "success");
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
