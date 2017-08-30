'use strict';

angular
.module('homepageApp')
.controller('leftCtrl', function ($scope) {
    $scope.i=1;
    $scope.isActive=function(i){
       $scope.i=i;
    }
  });
