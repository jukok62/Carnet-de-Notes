import axios from 'axios'

function getNote() {
    return axios.get("http://127.0.0.1:3000/note")
}

function getNoteById(id) {
    return axios.get("http://127.0.0.1:3000/note/"+id)
}
function getNoteByIdBis(id) {
    return axios.get("http://127.0.0.1:3000/note/"+id+'/note')
}
function AddCreation(note) {
    return axios.post("http://127.0.0.1:3000/note", note, {
        headers : {
        'Content-Type': 'application/json'
    }})
}

function updateNote(notes) {
    return axios.put(`http://127.0.0.1:3000/note/${notes.id_note}`, notes, {
        headers : {
        'Content-Type': 'application/json'
    }})
}

function DeleteNote(id) {
    return axios.delete(`http://127.0.0.1:3000/note/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export default {
    getNote,
    AddCreation,
    getNoteById,
    DeleteNote,
    updateNote,
    getNoteByIdBis
}