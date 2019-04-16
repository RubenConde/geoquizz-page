import Repository from '../Repository'


export default {
    getUser() {
        return Repository.get('/user').catch(error => error.response);
    },
    login(data) {
        return Repository.post('/login', data).catch(error => error.response);
    },
    register(data) {
        return Repository.post('/register', data).catch(error => error.response);
    },
    logout() {
        return Repository.get('/logout').catch(error => error.response);
    }
}