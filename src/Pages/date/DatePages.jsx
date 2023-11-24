import React, { useEffect, useState, useContext } from 'react'
import dateService from '../../Services/dateService'
import DateComponent from '../../Components/date/DateComponent';
import GlobalContext from '../../context/GlobalContext';
import '../../Styles/page.css'


const DatePage = () => {

    const {userId} = useContext(GlobalContext)
    const [dates, setDates] = useState([]);
    const fetchDateById = async () => {
        try {
          const response = await dateService.getDateById(userId)
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
        {dates.map(dt => {
        return  <DateComponent key={dt.id_note} date={dt}/>
        })}
        </div>
    </div>
    </>;
}
 
export default DatePage;