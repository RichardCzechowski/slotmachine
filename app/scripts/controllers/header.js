/**
 * @ngdoc function
 * @name slotsApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the slotsApp
 */
angular.module('slotsApp')
.controller('HeaderCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.isActive = function(route) {
    return route === $location.path();
  }
}]);
