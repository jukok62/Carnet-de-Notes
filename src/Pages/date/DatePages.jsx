import React, { useEffect, useState } from 'react'
import dateService from '../../Services/dateService'
import { useParams } from 'react-router-dom';
import DateComponent from '../../Components/date/DateComponent';

const datePage = () => {

    const {id} = useParams()
    const [dates, setDates] = useState([]);
    const fetchDateById = async () => {
        try {
          const response = await dateService.getDateById(id)
          setDates(response.data)  
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchDateById()
    },[])
    
    return <>
    <div id='center-card'>
        <div className='container'>
        {notes.map(dt => {
        return  <DateComponent key={dt.id_note} date={dt}/>
        })}
        </div>
    </div>
    </>;
}
 
export default datePage;