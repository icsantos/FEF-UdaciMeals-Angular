/* eslint-disable valid-jsdoc */
/* eslint-disable capitalized-comments */
/* eslint-disable no-invalid-this */
/* eslint-env angular */

'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', ['foodFinder', 'orderManager', function (menu, manager) {
    var vm = this;

    menu.getMenu().then(function(data) {
      vm.items = data;
    });

    this.chooseItem = function(menuCategory, menuItemName) {
      manager.chooseMenuOption(menuCategory, menuItemName);
    };

    this.increment = function(item) {
      // item.rating += 0.1;
      item.rating = ((item.rating * 10) + 1) / 10;
    };

    this.decrement = function(item) {
      // item.rating -= 0.1;
      item.rating = ((item.rating * 10) - 1) / 10;
    };
  }
]);
