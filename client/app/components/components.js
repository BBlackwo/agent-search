import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import AgentPage from './agentPage/agentPage';
import AgentList from './agentList/agentList';
import Agent from './agent/agent';

let componentModule = angular.module('app.components', [
  Home,
  About,
  AgentPage,
  AgentList,
  Agent
])

.name;

export default componentModule;
