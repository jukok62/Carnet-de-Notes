import React, { useEffect, useState} from 'react'
import noteService from '../../Services/noteService'
import '../../Styles/page.css'
import NoteComponent2 from '../../Components/Note/NoteComponent2';
import NoteComponent from '../../Components/Note/NoteComponent';

const NotePage = () => {

    const [notes, setNotes] = useState([]);
    const fetchNote = async () =>{
        try {
            const response = await noteService.getNote()
            setNotes(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchNote()
    },[])
    return <>
    <div id='center-card'>
        <div className='container'>
        {notes.map(nt => {
        return  <NoteComponent2 key={nt.id_note} note={nt}/>
        })}
        </div>
    </div>
    </>;
}
 
export default NotePage;