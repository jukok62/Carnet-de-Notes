import axios from 'axios'

function GetCategorie () {
    return axios.get("http://127.0.0.1:3000/categorie")
}

function GetCategorieById (id) {
    return axios.get("http://127.0.0.1:3000/categorie/"+id)
}



export default {
    GetCategorie,
    GetCategorieById
}