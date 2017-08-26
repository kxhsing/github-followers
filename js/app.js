'use strict';

angular.module('myApp', [])
  .controller('GitHubController', function($scope, $http){
    $scope.searchUser = function() {
      fetch();
    }

    function fetch(){
      $http.get("https://api.github.com/users/" + $scope.search)
        .then(function(response){ 
          if (response.statusText=="Not Found") {
            $scope.details = {};
          }
          $scope.details = response.data; 
          console.log($scope.response);
        });
        // .catch(function (error) {
        //   console.log('Request failed', error);
          
        //   });
      

      $http.get("https://api.github.com/users/" + $scope.search+"/followers")
        .then(function(response){ 
          if (response.statusText=="Not Found") {
              $scope.details = {};
          }
          console.log(response);
          $scope.followers = response.data; 
          $scope.search="";
        });
        // .catch(function (error) {
        //   console.log('Request failed', error);
        //   $scope.details = {};
        //   });
    }

    $scope.update = function(login){
      $scope.search = login;
      fetch();
    };

  });
