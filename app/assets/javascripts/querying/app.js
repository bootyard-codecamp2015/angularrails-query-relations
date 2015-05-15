( function() {
  'use strict';

  angular.module('querying', [
    // Libraries
    'templates',
    'ngRoute',

    // Resources
    'public.resource.topic',
    'public.resource.vote',

    // Controllers
    'public.ctrl.topicListCtrl' 
  ])
  .config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'querying/public/query/querying.html'
        });
    }
  ]);
})();