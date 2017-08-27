'use strict';
// var GITHUB_KEY = process.env.GITHUB_KEY;

// Helper function to parse for last page of followers result if more than 30
function findLastPage(header) {
    if (header.length === 0) {
        throw new Error("input must not be of zero length");
    }
    // Split parts by comma
    var parts = header.split(',');
    var links = {};
    // Parse each part into a named link
    for(var i=0; i<parts.length; i++) {
        var section = parts[i].split(';');
        if (section.length !== 2) {
            throw new Error("section could not be split on ';'");
        }
        var url = section[0].replace(/<(.*)>/, '$1').trim();
        var name = section[1].replace(/rel="(.*)"/, '$1').trim();
        links[name] = url;
    }
    if (links.last) {
      return links.last.match(/page=(\d+).*$/)[1];
    }
    else {
      return 0; //in case there is no "last" in API response headers - Link
    }
}

// Define Angular app module and controller
angular.module('myApp', [])
  .controller('GitHubController', function($scope, $http){
    $scope.searchUser = function() {
      fetch();
    }

    var followerPageCount = 0;
    var lastPage;

    function fetch(){
      $http.get("https://api.github.com/users/" + $scope.search)
        .then(function(response){ 
          $scope.details = response.data; 
          followerPageCount = 1;
          $scope.followercount = response.data.followers;
          $scope.loadbtn = 0; // enable load more button from disabled state when making a new search
        })
        .catch(function (error) {
          console.log('Request failed', error);
          $scope.details = {"message": "Not Found"};
          $scope.followers = null;
          
          });
      
      $http.get("https://api.github.com/users/" + $scope.search+"/followers")
        .then(function(response){ 
          $scope.followers = response.data; 
          if (response.headers('Link')) {
            var responseHeaders = response.headers('Link').toString();
            lastPage = findLastPage(responseHeaders);
            console.log(lastPage);
          }
          
          // $scope.search="";
        })
        .catch(function (error) {
          console.log('Request failed', error);
          $scope.details = {"message": "Not Found"};
          });
    }

    // If user clicks on a follower, search query for username will be updated to the follower, 
    // kicking off another search
    $scope.update = function(login){
      $scope.search = login;
      fetch();
    }

    function fetchMoreFollowers(page) {
      $http.get("https://api.github.com/users/" + $scope.search+"/followers?page="+page)
        .then(function(response){ 
          $scope.followers = response.data; 
          if (response.headers('Link')) {
            var responseHeaders = response.headers('Link').toString();
            var lastPage = findLastPage(responseHeaders);
            console.log(lastPage);
          }
        });
    }

    // If user clicks on Load More button, will query API for more followers 
    // using the fetchMoreFollowers function
    $scope.loadMoreFollowers = function() {
      followerPageCount++;
      console.log(followerPageCount);
      if (followerPageCount <= lastPage) {
        fetchMoreFollowers(followerPageCount);
      }
      else {
        $scope.loadbtn = 1;
        console.log("No more followers to load");
      }

    }

  });
