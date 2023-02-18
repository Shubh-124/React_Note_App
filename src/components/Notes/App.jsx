import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from './Footer';
import TextArea from "./TextArea";
//import "./styles.css";

function App() {
    //creating an array of notes
    const [note, createNote] = useState([]);
    function addNote(newNote) {
        //adding new note to array of notes

        createNote((prevVal) => {
            return [...prevVal, newNote];
        });
    }
    function deleteNote(id) {
        createNote((prevItem) => {
            return prevItem.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return <div className="notecontent">

        <Header />
        <TextArea onAdd={addNote} />
        <div>{
            //iterating through the notes array and display them
            note.map((item, index) => {
                return <Note onDelete={deleteNote} id={index} title={item.title} content={item.content} />
            })
        }
        </div>
        <Footer />
    </div>
}
export default App;