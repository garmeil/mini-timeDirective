angular.module("app").controller("mainCtrl", function($scope, $interval) {
  $scope.name = "Cody";
  $scope.time = new Date().toString();
  $scope.startTime = function() {
    $interval(() => {
      $scope.time = new Date().toString();
    }, 1000);
  };
});
