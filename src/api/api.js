import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/'
});

export const charactersAPI = {
  async fetchCharacters() {
    const response = await instance.get(`character?page=1`);
    return response.data;
  },
  async fetchMoreCharacters(url) {
    const response = await instance.get(`${url}`);
    return response.data;
  },
  async search(searchName) {
    const response = await instance.get(`character/?name=${searchName}`);
    return response.data.results;
  }
};
