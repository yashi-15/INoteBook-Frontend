import React,{useContext} from "react";
import NoteContext from "../context/notes/noteContext";


const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const {deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div>
            <div className="card m-3" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-file-pen m-2" onClick={()=>{updateNote(note)}}></i>
                    <i className="fa-sharp fa-solid fa-trash m-2" onClick={()=>{deleteNote(note._id)}}></i>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
