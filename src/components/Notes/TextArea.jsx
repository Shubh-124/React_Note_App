import React, { useState } from "react";

function TextArea(props) {

    // changing the state 
    const [notes, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        // adding a new note in an array of previous notes
        setNote((prevNote) => {
            return {
                ...prevNote, [name]: value
            }
        });
    }
    function submitNote(event) {
        event.preventDefault();
        //on click,the note to be added in the array
        props.onAdd(notes);
        setNote({ title: "", content: "" });
    }
    return <div>
        <form className="formy">
            <input name="title" placeholder="Enter Title" onChange={handleChange} value={notes.title} />
            <textarea name="content" onChange={handleChange
            } value={notes.content} placeholder="Take note..." rows='3' />
            <button onClick={submitNote}><i class="fa-solid fa-plus"></i></button>
        </form>
    </div>
}
export default TextArea;