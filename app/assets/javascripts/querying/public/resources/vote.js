(function() {
  'use strict';

  angular.module('public.resource.vote', ['ngResource'])
  .factory("Vote", [
    '$resource', function($resource) {
      return $resource("/api/public/votes/:id.json", {
        id: "@id"
      },{
        update: { method: 'PUT' }
      });
  }]);

})();