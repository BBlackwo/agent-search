import { Endpoints } from '../constants'

class SearchService {

  constructor($http) {
    "ngInject";
    this.$http = $http;
  };

  getAgents(searchTerm) {
    const url = `${Endpoints.AGENTS_SEARCH}?SearchTerm=${searchTerm}`;
    return this.$http.get(url);
  }

}

export default SearchService;
