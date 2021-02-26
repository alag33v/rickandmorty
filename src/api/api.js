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
  async search(searchCharacter) {
    const response = await instance.get(`character/?name=${searchCharacter}`);
    return response.data.results;
  }
};

export const locationsAPI = {
  async fetchCharacters() {
    const response = await instance.get(`location?page=1`);
    return response.data;
  },
  async fetchMoreLocations(url) {
    const response = await instance.get(`${url}`);
    return response.data;
  },
  async search(searchPlanet) {
    const response = await instance.get(`location/?name=${searchPlanet}`);
    return response.data.results;
  }
};

export const episodesAPI = {
  async fetchEpisodes() {
    const response = await instance.get(`episode?page=1`);
    return response.data;
  },
  async fetchMoreEpisodes(url) {
    const response = await instance.get(`${url}`);
    return response.data;
  },
  async search(searchEpisode) {
    const response = await instance.get(`episode/?name=${searchEpisode}`);
    return response.data.results;
  }
};
