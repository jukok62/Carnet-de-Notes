import React, { useEffect , useState, useContext} from 'react'
import categorieService from '../../Services/categorieService'
import CategorieComponent from '../../Components/categorie/CategorieComponent';
import '../../Styles/page.css'
import GlobalContext from '../../context/GlobalContext';

const CategoriePage = () => {

    const {userId} = useContext(GlobalContext)
    const [categories, setCategories] = useState([]);

    const fetchCategorieById = async () => {
        try {
            const response = await categorieService.GetCategorieById(userId)
            console.log(response)
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