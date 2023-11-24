import React, { useEffect , useState, useContext} from 'react'
import monEspaceService from '../../Services/monEspaceService'
import { useParams } from 'react-router-dom'
import MonEspaceComponent from '../../Components/MonEspace/MonEspaceComponent';
import GlobalContext from '../../context/GlobalContext';

const MonEspacePage = () => {

    const [monCompte, setMonCompte] = useState([]);
    const {userId} = useContext(GlobalContext)
    const fetchMonCompteById = async () => {
        try {
            const response = await monEspaceService.GetMonEspace(userId)
            setMonCompte(response.data)
        } catch (e) {
          console.log(e)  
        }
    }

    useEffect(() => {
        fetchMonCompteById()
    },[])
    return <>
    <h1>mon compte</h1>
    {monCompte.map(compte => {
        return <MonEspaceComponent key={compte.email_user} espace={compte}/>
    })}
    </>;
}

export default MonEspacePage;