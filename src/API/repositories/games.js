import Repository from '../Repository';

const resource = '/games';

export default {
   get(params) {
      return Repository.get(resource, { params: params }).catch((error) => error.response);
   },
   getGame(gameId) {
      return Repository.get(resource + '/' + gameId).catch((error) => error.response);
   },
   createGame(data) {
      return Repository.post(resource, data).catch((error) => error.response);
   },
   updateGame(gameId, data) {
      return Repository.put(resource + '/' + gameId, data).catch((error) => error.response);
   },
   deleteGame(gameId) {
      const token = atob(localStorage.getItem(btoa('token')));

      Repository.delete(resource + '/' + gameId, { headers: { Authorization: `Bearer ${token}` } });
   },
};
