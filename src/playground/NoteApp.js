import React, { useState, useEffect } from "react"

export const NoteApp = () => {
    const notesData = JSON.parse(localStorage.getItem('notes'));
    const [note, setNote] = useState('')
    const [notes, setNotes] = useState(notesData || [])

    const AddNote = (e) => {
        e.preventDefault();
        setNotes([...notes, note])
        setNote('');
    }

    const removeNote = (title) => {
        setNotes(notes.filter((note) => note !== title))
    }

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <div>
            <h1>TWIST</h1>
            <h3>Minhas notas</h3>
            {notes.map((note) => (
                <div key={note}>
                    <p>{note}</p>
                    <button onClick={() => removeNote(note)}>x</button>
                </div>
            ))}
            <form onSubmit={AddNote}>
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)}/>
                <button>adicionar</button>
            </form>
        </div>
    )
}