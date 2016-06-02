module.exports = function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('root', {
      url: "/",
      templateUrl: "views/main.html",
      controller: 'MainController'
    })
    .state('test', {
      url: "/test",
      templateUrl: "views/test.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    });

}