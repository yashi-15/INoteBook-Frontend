import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    // GET ALL NOTES
    // API call 
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
          method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjYxZDAyYWQwMzkxZjhmODliNjFkN2E5IiwiaWF0IjoxNzEzMTc3Mjg0fQ.5UOcw2XQ7HCRrJwpWRSgA9vbyp5nEpSB_X6IGiuIGwg",
        }
        });
        const json = await response.json();
        setNotes(json)
    };


    // ADD A NOTE
    const addNote = async (title, description, tag) => {
      // API call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjYxZDAyYWQwMzkxZjhmODliNjFkN2E5IiwiaWF0IjoxNzEzMTc3Mjg0fQ.5UOcw2XQ7HCRrJwpWRSgA9vbyp5nEpSB_X6IGiuIGwg",
        },
        body: JSON.stringify({title, description, tag}),
    });
    // const json = response.json();
    const note = {
        "_id": "61322f119553781a8ca8d0e08",
        "user": "6131dc5e3e4037cd4734a0664",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2021-09-03T14:20:09.668Z",
        "__v": 0
      };
      setNotes(notes.concat(note))

      
    };

    // DELETE A NODE
    const deleteNote = async (id) => {
      // API call
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjYxZDAyYWQwMzkxZjhmODliNjFkN2E5IiwiaWF0IjoxNzEzMTc3Mjg0fQ.5UOcw2XQ7HCRrJwpWRSgA9vbyp5nEpSB_X6IGiuIGwg",
        },
        // body: JSON.stringify(title, description, tag),
    });  

        // client side 
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(newNotes);
    };

    // EDIT A NODE
    const editNote = async (id, title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjYxZDAyYWQwMzkxZjhmODliNjFkN2E5IiwiaWF0IjoxNzEzMzcyMjIyfQ._uHudelBiqfIwszlfRAMdWY6HzfxYIdgvru-lTr7-KM",
            },
            body: JSON.stringify({title, description, tag}),
        });
        const json = response.json();

        // client side
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
            let element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    };

    return <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>{props.children}</NoteContext.Provider>;
};

export default NoteState;
