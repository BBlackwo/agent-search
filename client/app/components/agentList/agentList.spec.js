import AgentListModule from './agentList';
import AgentListController from './agentList.controller';
import AgentListComponent from './agentList.component';
import AgentListTemplate from './agentList.html';

describe('AgentList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AgentListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AgentListController();
    };
  }));

  describe('Component', () => {
    const component = AgentListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AgentListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AgentListController);
    });
  });
});
