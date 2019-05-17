import Repository from "../Repository";

const resource = "/photos";

export default {
  get(params) {
    return Repository.get(resource, { params: params }).catch(
      error => error.response
    );
  },
  getPhoto(photoId) {
    return Repository.get(resource + "/" + photoId).catch(
      error => error.response
    );
  },
  createPhoto(data) {
    return Repository.post(resource, data).catch(error => error.response);
  },
  updatePhoto(photoId, data) {
    return Repository.put(resource + "/" + photoId, data).catch(
      error => error.response
    );
  },
  deletePhoto(photoId) {
    Repository.delete(resource + "/" + photoId);
  }
};
