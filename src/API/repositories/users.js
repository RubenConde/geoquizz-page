import Repository from '../Repository';

export default {
   getUser() {
      return Repository.get('/user').catch((error) => error.response);
   },
   login(data) {
      return Repository.post('/login', data).catch((error) => error.response);
   },
   register(data) {
      return Repository.post('/register', data).catch((error) => error.response);
   },
   logout() {
      const token = atob(localStorage.getItem(btoa('token')));
      return Repository.get('/logout', { headers: { Authorization: `Bearer ${token}` } }).catch(
         (error) => error.response
      );
   },
};
