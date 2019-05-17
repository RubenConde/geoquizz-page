import Repository from "../Repository";

const resource = "/series";

export default {
  get(params) {
    return Repository.get(resource, { params: params }).catch(
      error => error.response
    );
  },
  getSeries(seriesId) {
    return Repository.get(resource + "/" + seriesId).catch(
      error => error.response
    );
  },
  createSeries(data) {
    return Repository.post(resource, data).catch(error => error.response);
  },
  updateSeries(seriesId, data) {
    return Repository.put(resource + "/" + seriesId, data).catch(
      error => error.response
    );
  },
  deleteSeries(seriesId) {
    return Repository.delete(resource + "/" + seriesId).catch(
      error => error.response
    );
  }
};
