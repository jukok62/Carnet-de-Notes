import axios from 'axios'

function getDateById (id) {
    return axios.get("http://127.0.0.1:3000/categorie/"+id)
}



export default {
    getDateById
}