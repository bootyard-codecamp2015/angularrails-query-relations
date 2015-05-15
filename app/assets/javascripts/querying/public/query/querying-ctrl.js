( function() {
  'use strict';

  angular.module("public.ctrl.topicListCtrl", [])
  .controller('topicListController', [ '$scope', '$filter', 'Topic', 'Vote',
  	function($scope, $filter, Topic, Vote) {
  		$scope.topics = [];
      
      Topic.query().$promise.then(function(data) {
        $scope.topics = data;
      });

      $scope.upVote = function(topic_id){
        var newVote = new Vote({ topic_id: topic_id })
        newVote.$save(newVote, function(data) {
          if( data.success == false) {
            alert('You already vote to this topic!');
          } else {
            Topic.query().$promise.then(function(data) {
              $scope.topics = data;
            });
          }
        });
      }
  	}
  ]);
})();