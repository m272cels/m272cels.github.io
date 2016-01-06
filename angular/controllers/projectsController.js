var data = {
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
  }
}

portfolio.controller('projectsController', ['$scope', '$routeParams', function ($scope, $routeParams) {
  $scope.data = data[$routeParams.id];
}])