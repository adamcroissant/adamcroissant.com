'use strict';

var app = angular.module('acroiss', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	var home = {
		name: 'home',
		url: '/',
		templateUrl: 'js/views/home.html',
		controller: 'HomeController',
		controllerAs: 'homeVm'
	};

	$stateProvider.state(home);
});
