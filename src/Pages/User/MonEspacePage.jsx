import React, { useEffect , useState} from 'react'
import monEspaceService from '../../Services/monEspaceService'
import { useParams } from 'react-router-dom'
import MonEspaceComponent from '../../Components/MonEspace/MonEspaceComponent';

const MonEspacePage = () => {

    const [monCompte, setMonCompte] = useState([]);
    const {id} = useParams()
    const fetchMonCompteById = async () => {
        try {
            const response = await monEspaceService.GetMonEspace(id)
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