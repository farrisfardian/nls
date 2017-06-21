/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('loginForm', loginForm);

  /** @ngInject */
  function loginForm() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/loginForm/loginForm.html',
      controller: 'LoginFormCtrl as vm'
    };
  }

})();