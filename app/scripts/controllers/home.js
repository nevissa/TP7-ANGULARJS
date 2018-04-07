'use strict';

angular.module('tp7AngularjsApp')

  .controller('home',['$scope','$http','HomeFactory',function($scope, $http,HomeFactory) {
           HomeFactory.show().$promise.then(function(value) {
      $scope.Homes= value;
      console.log($scope.Homes);
    });
    $scope.createHome = function(){
      console.log('hhh');
      $http.post('http://localhost:9000/rest/hello_Homes/createHome/' ,$scope.home).then(function() {
        alert("home crée")

      },function(data) {
        document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
      })};

      $scope.deleteHome = function(id){
        console.log('delete');
        console.log('home.id');
        HomeFactory.delete({ id:id});};


      $scope.editHome =function(id){




      };




  }])


  .factory('HomeFactory', function ($resource) {
    return $resource('http://localhost:9000/rest/hello_Homes/:id', {}, {
    show: {
      url: 'http://localhost:9000/rest/hello_Homes/',
        method: 'GET',
        cache: false,
        isArray: true
    },
      update: { method: 'PUT', params: {id: '@id'} },
      delete: { method: 'DELETE', params: {id: '@id'} }
    })
  });
