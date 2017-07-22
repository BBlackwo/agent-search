import angular from 'angular';
import uiRouter from 'angular-ui-router';
import agentPageComponent from './agentPage.component';

const agentPageModule = angular.module('agentPage', [
    uiRouter
  ])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('agents', {
        url: '/agents',
        component: 'agentPage'
      });
  })

.component('agentPage', agentPageComponent)

.name;

export default agentPageModule;
