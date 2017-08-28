'use strict';

/**
 * @ngdoc function
 * @name homepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homepageApp
 */
 angular
  .module('homepageApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'about',
      'hghg',
      'Karma'
    ];
  })
  .directive('swipers',swipers);

  swipers.$inject = ['$timeout'];
  function swipers($timeout) {
    return {
      restrict: 'EA',
      template: '<div class="swiper-container silder">'+
                    '<ul class="swiper-wrapper">'+
                    '<li class="swiper-slide">'+
                    '<a href="/"><img ng-src="images/mainimages/1.jpg" alt="" /></a>'+
                    '<a href="/"><img ng-src="images/mainimages/2.jpg" alt="" /></a>'+
                    '<a href="/"><img ng-src="images/mainimages/3.jpg" alt="" /></a>'+
                    '</li>'+
                    '</ul>'+
                    '<div class="swiper-pagination"></div>'+
                    '</div>',
      link: function(scope,element,attrs) {
        $timeout(function(){
                 var swiper = new Swiper('.swiper-container', {   //轮播图绑定样式名
                      pagination: '.swiper-pagination',
                      paginationClickable: true,
                      autoplay: 2500,
                });
        },100);
      }
    }
  }
