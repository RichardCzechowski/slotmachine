'use strict';

/**
 * @ngdoc function
 * @name slotsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the slotsApp
 */
angular.module('slotsApp')
.controller('AboutCtrl', function ($scope) {
  $scope.cols = {
    col0: [
      "images/col1/coffee.jpg",
      "images/col2/coffee.jpg",
      "images/col3/coffee.jpg",
      "images/result/coffee.jpg"
    ],
    col1: [
      "images/col1/esspresso.jpg",
      "images/col2/esspresso.jpg",
      "images/col3/esspresso.jpg",
      "images/result/esspresso.jpg"
    ],
    col2: [
      "images/col1/tea.jpg",
      "images/col2/tea.jpg",
      "images/col3/tea.jpg",
      "images/result/tea.jpg"
    ]
  };
});
