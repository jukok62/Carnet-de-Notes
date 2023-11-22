import React, { useEffect , useState} from 'react'
import categorieService from '../../Services/categorieService'
import CategorieComponent from '../../Components/categorie/CategorieComponent';
import '../../Styles/page.css'
import { useParams } from 'react-router-dom';

const CategoriePage = () => {

    const {id} = useParams()
    const [categories, setCategories] = useState([]);

    const fetchCategorieById = async () => {
        try {
            const response = await categorieService.GetCategorieById(id)
            setCategories(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchCategorieById()
    },[])
    return <>
        <div id='center-card'>
        <div className='container'>
        {categories.map(cat => {
        return  <CategorieComponent key={cat.id_note} categ={cat}/>
        })}
        </div>
    </div>
    </>;
}

export default CategoriePage;