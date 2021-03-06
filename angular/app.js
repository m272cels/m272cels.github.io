angular.module('portfolio', ['ngRoute'])

.config( function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/about.html',
    })
    .when('/projects', {
      templateUrl: '/partials/main.html',
      controller: 'controller'
    })
    .when('/projects/:id', {
      templateUrl: '/partials/project.html',
      controller: 'controller'
    })
    .otherwise({
      redirectTo: '/'
    });
})

.controller('controller', ['$scope', '$routeParams', function ($scope, $routeParams) {
  console.log("$routeParams == ", $routeParams);

  if ($routeParams.id) {
    $scope.data = projects[$routeParams.id];
  }
  else {
    $scope.projects = projects;
  }

  console.log("$scope.data == ", $scope.data);
  console.log("$scope.projects == ", $scope.projects);
}]);

var projects = {
  devFinders: {
    id: "devFinders",
    name: "DevFinders",
    description: "Social networking website for connecting developers " +
      "and potential clients. Three person group project. Clients can post " +
      "projects and invite developers to work with them, while developers can" +
      " request to work on projects they are interested in.",
    responsibilities: "Responsible for ERD, development of client-" + 
      "developer interactions, deployment on Heroku.",
    tools: "Ruby, Rails, jQuery, Bootstrap, PostgreSQL, ActiveRecord, Heroku",
    codeLink: "https://github.com/monarajhans/Devinder",
    appLink: "https://devinder.herokuapp.com/"
  },
  enjCo: {
    id: "enjCo",
    name: "EnJ Co.",
    description: "E-commerce website with everything except the items in stock." +
      " Four person group project. Customer interface includes Ajax search on" +
      " the front page and functional credit-card payment using Stripe API. " + 
      "Admin interface features all CRUD operations for managing inventory.",
    responsibilities: "Responsible for ERD, development of Controllers layer," +
      " coordination between back and front ends, integration of Stripe API," +
      " deployment on Amazon EC2.",
    tools: "PHP, CodeIgniter, MySQL, Ajax, Stripe API, Amazon EC2, jQuery, Bootstrap",
    codeLink: "https://github.com/m272cels/cd_ecommerce",
    appLink: "http://ec2-52-26-73-35.us-west-2.compute.amazonaws.com/"
  },
  superBowser: {
    id: "superBowser",
    name: "Super Bowser",
    description: "2D action-adventure game in the style of the original Legend" +
      " of Zelda. Four person group project. As Bowser in this Super Mario-" +
      "inspired universe, the player can explore the world, collect items, " +
      "talk to friends and destroy their enemies. Basic framework completed in" +
      " five weeks as final project for Software Engineering Methodologies class.",
    responsibilities: "Responsible for design of class architecture, development" +
      " of player and enemy core mechanics, including statistics, movement and" +
      " attack system.",
    tools: " Java, Slick2D, Eclipse, GitHub, eGit, JUnit, Agile, Scrum",
    codeLink: "https://github.com/m272cels/super-bowser",
    appLink: "n/a",
    WIP: true
  },
  lettuceEat: {
    id: "lettuceEat",
    name: "Lettuce Eat",
    description: " Current project, work in progress. Social networking website" +
    " for connecting lonely eaters. Solo project. Features multiple " +
    "authentication strategies, restaurant finding using Yelp API with plans" +
    " to integrate built-in chat function.",
    tools: "Node.js, Express.js, AngularJS, MongoDB, Mongoose, Passport (Local" +
    " Login, Facebook Login), Yelp API, jQuery, Bootstrap",
    codeLink: "https://github.com/m272cels/lettuce_eat",
    appLink: "n/a",
    WIP: true
  }
}