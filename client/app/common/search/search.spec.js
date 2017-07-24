import SearchService from './search.service';
import { Endpoints } from '../../common/constants';

let instance, stubHttp;

describe('Search Service', () => {

  beforeEach(() => {
    stubHttp = {
      get: () => {}
    };
    sinon.spy(stubHttp, 'get');

    instance = new SearchService(stubHttp);
  });

  describe('getAgents', () => {
    it('should make get call with correct url', () => {
      const searchTerm = 'Harvey';
      const expectedUrl = `${Endpoints.AGENTS_SEARCH}?SearchTerm=${searchTerm}`;
      instance.getAgents(searchTerm);

      assert(stubHttp.get.calledWith(expectedUrl));
    })
  });

});
