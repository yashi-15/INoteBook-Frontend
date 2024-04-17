import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote } = context;

    const  [note, setNote] = useState({title:"", description:"", tag:""});
const HandleClick = (e)=>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title:"", description:"", tag:""})
}

const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
}

  return (
    <div>
      <div className="container">
                <h1>Add a note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input type="text" className="form-control" id="title" value={note.title} name= "title" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                        Description
                        </label>
                        <input type="text" className="form-control" id="description" value={note.description} name="description" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">
                        Tag
                        </label>
                        <input type="text" className="form-control" id="tag" value={note.tag} name="tag" onChange={onChange} />
                    </div>
                    <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-primary" onClick = {HandleClick}>
                        Submit
                    </button>
                </form>
            </div>
    </div>
  )
}

export default AddNote
