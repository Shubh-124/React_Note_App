import React from "react";



function Note(props) {

    function deleteNote() {

        props.onDelete(props.id);
    }
    return <div className="note">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <p>{props.date}</p>
        <button type="submit" onClick={deleteNote}><i class="fa-solid fa-trash"></i></button>
    </div >
}
export default Note;