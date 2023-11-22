import axios from 'axios'

function GetInscription () {
    return axios.get("http://127.0.0.1:3000/inscription")
}

function AddInscription(user) {
    return axios.post("http://127.0.0.1:3000/inscription", user, {
        headers : {
        'Content-Type': 'application/json'
    }})
}

export default {
    GetInscription,
    AddInscription
}