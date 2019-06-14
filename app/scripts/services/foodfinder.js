/* eslint-disable no-invalid-this */
/* eslint-env angular*/

'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
  .service('foodFinder', function () {
    this.getMenu = function() {
      return $.get('/menu/menu.json');
    };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
