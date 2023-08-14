import axiosClient from "./request";

const movieApi = {
  getAll(params) {
    const url = "/List/";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/List/${id}`;
    return axiosClient.get(url, { id });
  },
  add(name) {
    const url = `/List/${name}`;
    return axiosClient.get(url, { name });
  },
  remove(id) {
    const url = `/List/${id}`;
    return axiosClient.get(url, { id });
  },
};

export default movieApi;
