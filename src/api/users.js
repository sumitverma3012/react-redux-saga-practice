import axios from 'axios';

export const getUsers = () => {
    return axios.get('/users', {
        params: {
            limit: 1000 // api is paginated, fetching a list of 1000 users
        }
    })
}

export const createUser = ({firstName, lastName}) => {
    return axios.post('/users', {
        firstName, 
        lastName
    })
}

export const deleteUser = (userId) => {
    return axios.delete('/users/'+ userId)
}
