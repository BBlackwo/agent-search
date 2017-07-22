import angular from 'angular';
import uiRouter from 'angular-ui-router';
import agentListComponent from './agentList.component';

let agentListModule = angular.module('agentList', [
  uiRouter
])

.component('agentList', agentListComponent)

.name;

export default agentListModule;
