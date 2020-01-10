import axios from 'axios'

export default {
    getAllData:(callback) => {        
        let urlBaseApi = 'https://jsonplaceholder.typicode.com/photos'
        axios.get(urlBaseApi).then((data) => {
            if(callback) {
                callback(data)
            }
        })
    }
}