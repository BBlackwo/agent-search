import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import Search from './search/search';

const commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  Search
])

.name;

export default commonModule;
