import { Messages } from '../../common/constants';

class AgentPageController {

  constructor(searchService) {
    "ngInject";
    this.searchService = searchService;

    this.reset();
  }

  reset() {
    this.agentList = [];
    this.errorMessage = '';
  }

  submit() {
    this.reset();

    this.searchService.getAgents(this.agentSearch)
      .then((res) => {
        this.agentList = res.data.Results;
      })
      .catch(() => {
        this.errorMessage = Messages.Error.GENERIC_ERROR;
      });
  }
}

export default AgentPageController;
