var portfolio = angular.module('portfolio', ['ngRoute']);

portfolio.config( function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main.html',
      controller: 'projectsController'
    })
    .when('/projects/:id', {
      templateUrl: '/partials/project.html',
      controller: 'projectsController'
    })
    .when('/about', {
      templateUrl: '/partials/about.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});