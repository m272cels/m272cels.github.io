var portfolio = angular.module('portfolio', ['ngRoute']);

portfolio.config( function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main.html',
    })
    .when('/projects/:name', {
      templateUrl: '/partials/project.html',
      controller: 'projectsController'
    })
    .otherwise({
      redirectTo: '/'
    });
});