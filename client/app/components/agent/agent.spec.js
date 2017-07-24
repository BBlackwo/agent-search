import AgentModule from './agent';
import AgentController from './agent.controller';
import AgentComponent from './agent.component';
import AgentTemplate from './agent.html';

describe('Agent', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AgentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AgentController();
    };
  }));

  describe('Controller', () => {
    it('should exist', () => {
      expect(makeController()).to.not.be.undefined;
    })
  });

  describe('Component', () => {
    let component = AgentComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AgentTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AgentController);
    });
  });
});
