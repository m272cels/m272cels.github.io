var portfolio = angular.module('portfolio', ['ngRoute']);

portfolio.config( function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main.html',
      controller: 'projectsController'
    })
    .otherwise({
      redirectTo: '/'
    });
});