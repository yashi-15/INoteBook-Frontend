import React from "react";

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div>
            <div class="card m-3" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
