import React, { useEffect, useState, useContext } from 'react'
import noteService from '../../Services/noteService'
import NoteComponentById from '../../Components/Note/NoteComponentById'
import '../../Styles/page.css'
import GlobalContext from '../../context/GlobalContext'


const NotePageById = () => {

    const {userId} = useContext(GlobalContext)
    const [notes, setNotes] = useState([]);

    const fecthNoteById = async () => {
        try {
            const response = await noteService.getNoteById(userId)
            console.log(response)
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