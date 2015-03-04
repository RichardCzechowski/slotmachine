'use strict';

/**
 * @ngdoc function
 * @name slotsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the slotsApp
 */
angular.module('slotsApp')
.controller('MainCtrl', ['$scope', '$timeout', '$location', 'MoneyFactory', function ($scope, $timeout, $location, MoneyFactory) {
  $scope.bet = 20;
  //Initialize money with factory
  $scope.total = MoneyFactory.get();
  $scope.cols = {
    col0: [
      "images/col1/coffee.jpg",
      "images/col1/esspresso.jpg",
      "images/col1/tea.jpg"
    ],
    col1: [
      "images/col2/coffee.jpg",
      "images/col2/esspresso.jpg",
      "images/col2/tea.jpg"
    ],
    col2: [
      "images/col3/coffee.jpg",
      "images/col3/esspresso.jpg",
      "images/col3/tea.jpg"
    ]
  };
  $scope.alert = [
    "images/result/coffee.jpg",
    "images/result/esspresso.jpg",
    "images/result/tea.jpg",
    "images/result/starbucks.jpg"
  ];
  //each result is tracked by its index for scaleability
  $scope.results = [ 0, 1, 2 ];
  $scope.spun = false;

  $scope.spin = function(){
    //subtract bet
    if ($scope.total >= $scope.bet){
      //animate and disable 'spin' button
      $scope.spinning = true;
      $scope.spun = true;
      //set results
      $scope.results= [ $scope.result(), $scope.result(), $scope.result() ];
      $scope.total -= $scope.bet;
      //let it spin for a while, then calculate results
      $timeout( function(){
        $scope.spinning = false;
        $scope.showResults = true;
        if ($scope.results[0] ==$scope.results[1] && $scope.results[1]== $scope.results[2]){
          $scope.winner();
        }
        else{
          $scope.loser();
        }
      }, (Math.random() * 3000) + 1000);
    }
  };

  $scope.result = function(){
    return Math.floor(Math.random() * $scope.results.length);
  };

  //set positions of spinning elements.
  $scope.position = function(col, index){
    if ($scope.spinning){
      return "spinning" + index;
    }
    else if($scope.spun){
      if (index === $scope.results[col]){
        return "start1";
      }
      else{
        return "start0"
      }
    }
    else {
      return "start" + index;
    }
  };

  $scope.winner = function(){
    console.log("winner", $scope.results);
    $scope.won = true;
    $scope.hideResults();
    if ($scope.result[0] === 0){
      $scope.beverage = 'Coffee';
    }
    else if ($scope.result[0] === 1){
      $scope.beverage = 'Esspresso';
    }
    else{
      $scope.beverage = 'Tea';
    }
    //Slowly count money up, because people like that kind of thing
    var winnings = 20 + (40 * $scope.results[0]);
    for (var i = 0; i< winnings; i++){
      $timeout(function(){
        $scope.total += 1;
      }, i * 120);
    }
  };

  $scope.loser = function(){
    $scope.won = false;
    $scope.hideResults();
    console.log("loser", $scope.results);
  };

  $scope.reset = function(){
    $scope.total = 100;
    MoneyFactory.set(100);
  }

  $scope.hideResults = function(){
    $timeout(function(){
      $scope.showResults = false;
      MoneyFactory.set($scope.total);
    }, 2000);
  }

  $scope.go = function ( path ) {
    $location.path( path );
  };
}]);
