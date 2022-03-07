import React from "react";
import { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";

const NotesListPage = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        const res = await fetch(`http://localhost:8000/notes/`);
        const data = await res.json();
        setNotes(data);
    };

    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>

            <div className="notes-list">
                {notes.map((note, i) => (
                    <ListItem key={i} note={note} />
                ))}
            </div>

            <AddButton />
        </div>
    );
};

export default NotesListPage;
