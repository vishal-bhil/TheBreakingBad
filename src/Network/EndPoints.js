import APPConfig from '../Helper/APPConfig';

const EndPoints = {
  getCharacters: APPConfig.API_URL + 'api/characters',
  searchCharacters: APPConfig.API_URL + 'api/characters?name=',
};

export default EndPoints;
