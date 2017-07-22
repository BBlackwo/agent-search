import angular from 'angular';
import uiRouter from 'angular-ui-router';
import agentComponent from './agent.component';

let agentModule = angular.module('agent', [
  uiRouter
])

.component('agent', agentComponent)

.name;

export default agentModule;
