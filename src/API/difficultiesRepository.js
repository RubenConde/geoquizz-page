import Repository from '../API/Repository'

const resource = '/difficulties';

export default {
    get(params) {
        return Repository.get(resource, {params: params}).catch(error => error.response);
    },
    getDifficulty(difficultyId) {
        return Repository.get(resource + '/' + difficultyId).catch(error => error.response)
    },
    createDifficulty(data) {
        return Repository.post(resource, data).catch(error => error.response);
    },
    updateDifficulty(difficultyId, data) {
        return Repository.put(resource + '/' + difficultyId, data).catch(error => error.response);
    },
    deleteDifficulty(difficultyId) {
        Repository.delete(resource + '/' + difficultyId);
    }
}