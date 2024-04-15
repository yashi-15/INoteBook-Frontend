import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    return (
        <div className="container">
            <h1>Your Notes</h1>
            <div className="d-flex">
            {notes.map((note) => {
                return <NoteItem note={note} />;
            })}
            </div>
        </div>
    );
};

export default Notes;
