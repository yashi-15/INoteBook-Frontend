import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, addNote } = context;
    return (
        <>
        <AddNote/>
        <div className="container">
            <h1>Your Notes</h1>
            <div className="d-flex">
            {notes.map((note) => {
                return <NoteItem note={note} key={note._id} />;
            })}
            </div>
        </div>
        </>
    );
};

export default Notes;