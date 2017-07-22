import angular from 'angular';
import SearchService from './search.service';

const searchModule = angular.module('search', [])

.service('searchService', SearchService)

.name;

export default searchModule;
