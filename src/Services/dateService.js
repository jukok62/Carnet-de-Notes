import axios from 'axios'

function getDateById (id) {
    return axios.get("http://127.0.0.1:3000/date/"+id)
}



export default {
    getDateById
}