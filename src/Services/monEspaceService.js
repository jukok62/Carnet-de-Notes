import axios from 'axios'

function GetMonEspace (id) {
    return axios.get("http://127.0.0.1:3000/MonCompte/"+id)
}

export default {
    GetMonEspace
}