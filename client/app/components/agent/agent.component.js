import template from './agent.html';
import controller from './agent.controller';
import './agent.scss';

const agentComponent = {
  bindings: {
    agent: '<'
  },
  template,
  controller
};

export default agentComponent;
