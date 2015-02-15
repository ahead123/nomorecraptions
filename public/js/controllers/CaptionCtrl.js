var re = /=(\w+)/,
    data,
    id;
angular.module('CaptionCtrl', [])
  .controller('CaptionController', ['$scope', '$http', 'Caption', function($scope, $http, Caption) {
      $scope.onSearch = function() {
        id = $scope.videoUrl.match(re);
        $scope.resourceID = 'youtube' + id[1];
        $http.get('/captions/' + $scope.resourceID)
            .success(function(data) {
              console.log(data);
              $scope.title = data.title;
        });
        console.log($scope.resourceID)
      }

      $scope.testLog = function() {
        console.log($scope.title);
      }
  }]);