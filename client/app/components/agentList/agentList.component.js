import template from './agentList.html';
import controller from './agentList.controller';
import './agentList.scss';

const agentListComponent = {
  bindings: {
    agentList: '<'
  },
  template,
  controller
};

export default agentListComponent;
