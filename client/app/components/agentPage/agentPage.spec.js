import AgentPageModule from './agentPage';
import AgentPageController from './agentPage.controller';
import AgentPageComponent from './agentPage.component';
import AgentPageTemplate from './agentPage.html';

import { Messages } from '../../common/constants';

describe('AgentPage', () => {
  let $rootScope, makeController, $state, $location;
  let stubSearchService, resolveGetAgents, rejectGetAgents, stubPromise;

  beforeEach(window.module(AgentPageModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $location = $injector.get('$location');

    stubPromise = {
      then: (cb) => {
        resolveGetAgents = cb;
        return stubPromise;
      },
      catch: (cb) => {
        rejectGetAgents = cb;
        return stubPromise;
      }
    };

    stubSearchService = {
      getAgents: () => {
        return stubPromise;
      }
    };
    sinon.spy(stubSearchService, 'getAgents');

    makeController = () => {
      return new AgentPageController(stubSearchService);
    }
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('AgentPage component should be visible when navigating to /agents', () => {
      $location.url('/agents');
      $rootScope.$digest();
      expect($state.current.component).to.eq('agentPage');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;

    beforeEach(() => {
      controller = makeController();
    });

    describe('initialisation', () => {
      it('it should reset agent list and error message', () => {
        expect(controller.agentList).to.eql([]);
        expect(controller.errorMessage).to.eq('');
      });
    });

    describe('submit', () => {

      it('it should reset agent list and error message', () => {
        controller.agentList = [1, 2, 3];
        controller.errorMessage = 'some error';

        controller.submit();

        expect(controller.agentList).to.eql([]);
        expect(controller.errorMessage).to.eq('');
      });

      it('should pass searched name to get agents', () => {
        const agentSearch = 'Harvey';
        controller.agentSearch = agentSearch;

        controller.submit();

        assert(stubSearchService.getAgents.calledWith(agentSearch));
      });

      it('should set agent list on successful result', () => {
        controller.submit();
        resolveGetAgents({
          data: {
            Results: [1, 2, 3]
          }
        });

        expect(controller.agentList).to.eql([1, 2, 3]);
      });

      it('should show error message on error', () => {
        controller.submit();
        rejectGetAgents();

        expect(controller.errorMessage).to.eq(Messages.Error.GENERIC_ERROR);
      });
    })
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('should call submit function on form submittion', () => {
      expect(AgentPageTemplate).to.match(/ng-submit="\$ctrl\.submit\(\)"/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AgentPageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AgentPageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AgentPageController);
    });
  });
});
