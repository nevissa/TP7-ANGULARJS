/*
  'use strict';

angular.module('tp7AngularjsApp')

  .controller('person',['$scope','$http','PersonFactory',function($scope, $http,HomeFactory) {
    HomeFactory.show().$promise.then(function(value) {
      $scope.Persons= value;
      console.log($scope.Homes);
    });
    $scope.createPerson = function(){
      $http.post('http://localhost:9000/rest/helloPerson/createPerson/' ,$scope.home).then(function() {
        alert("personne crée")

      },function(data) {
        document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
      })};

    $scope.deletePerson = function(id){
      HomeFactory.delete({ id:id});};
       $scope.editHome =function(id){
      };}])

    .factory('HomeFactory', function ($resource) {
    return $resource('http://localhost:9000/rest/helloPerson/:id', {}, {
      show: {
        url: 'http://localhost:9000/rest/helloPerson/',
        method: 'GET',
        cache: false,
        isArray: true
      },
      update: { method: 'PUT', params: {id: '@id'} },
      delete: { method: 'DELETE', params: {id: '@id'} }
    })
  });
*/
