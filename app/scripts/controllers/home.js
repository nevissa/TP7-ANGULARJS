'use strict';

/**
 * @ngdoc function
 * @name tp7AngularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp7AngularjsApp
 */
angular.module('tp7AngularjsApp')

  .controller('home',['$scope','$http',function($scope, $http) {
    $http.get('http://localhost:9000/rest/hello_Homes/Homes/').
    then(function(values) {
      $scope.Homes = values.data;
      console.log($scope.Homes);
    },function(data) {
      document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
    });
    $scope.deleteHome = function(home){
      console.log(home);
      var id = home.id;
      $http.delete('http://localhost:9000/rest/hello_Homes/Homes/'+id).then(function() {

      },function(data) {
        document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
      });

    }
  }]);


