import React, { useState } from "react";
import NoteContext from "./noteContext";

const  NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "661d03ec0391f8f89b61d7b5",
          "user": "661d02ad0391f8f89b61d7a9",
          "title": "PUT",
          "description": "study for PUT exams",
          "tag": "College",
          "Date": "1713177580075",
          "__v": 0
        },
        {
          "_id": "661d04140391f8f89b61d7b7",
          "user": "661d02ad0391f8f89b61d7a9",
          "title": "Assignment",
          "description": "complete nptel assignment",
          "tag": "Nptel",
          "Date": "1713177620772",
          "__v": 0
        },
        {
          "_id": "661d04300391f8f89b61d7b9",
          "user": "661d02ad0391f8f89b61d7a9",
          "title": "React JS",
          "description": "complete React JS by tomorrow",
          "tag": "Personal",
          "Date": "1713177648380",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;