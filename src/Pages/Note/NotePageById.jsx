import React, { useEffect, useState } from 'react'
import noteService from '../../Services/noteService'
import { useParams } from 'react-router-dom'
import NoteComponentById from '../../Components/Note/NoteComponentById'
import '../../Styles/page.css'

const NotePageById = () => {

    const {id} = useParams()
    const [notes, setNotes] = useState([]);

    const fecthNoteById = async () => {
        try {
            const response = await noteService.getNoteById(id)
            setNotes(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fecthNoteById()
    },[])
    return <>
     <div id='center-card'>
        <div className='container'>
        {notes.map(nt => {
        return  <NoteComponentById key={nt.id_note} note={nt}/>
        })}
        </div>
    </div>
    </>;
}
 
export default NotePageById;