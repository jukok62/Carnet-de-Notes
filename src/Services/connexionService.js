import axios from 'axios'

function GetConnexion () {
    return axios.get("http://127.0.0.1:3000/connexion")
}

function AddConn(email,password) {
    return axios.post("http://127.0.0.1:3000/connexion",{email,password}, {
        headers : {
        'Content-Type': 'application/json'
    }})
}

export default {
    GetConnexion,
    AddConn
}