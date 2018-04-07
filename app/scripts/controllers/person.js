'use strict';

angular.module('tp7AngularjsApp')

  .controller('PersonCtrl', ['$scope', '$http', '$route', 'personFactory', function ($scope, $http, $route, personFactory) {
    personFactory.show().$promise.then(function (value) {
      $scope.persons = value;
      console.log($scope.persons);
    });

    $scope.createPerson = function () {
      console.log('Creation person');
      console.log($scope.person);
      $http.post('http://localhost:9000/rest/hello_Person/createPerson/', $scope.person).then(function () {
        $route.reload();

      }, function (data) {
        document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
      })
    };

    $scope.deletePerson = function (id) {

      personFactory.delete({id:id}).$promise.then(function (value) {
        //console.log('home supprimé');
        $route.reload();
      });
    };

    $scope.editPerson = function (id) {
    };

  }])

  .factory('personFactory', function ($resource) {
    return $resource('http://localhost:9000/rest/hello_Person/:id', {}, {
      show: {
        url: 'http://localhost:9000/rest/hello_Person/',
        method: 'GET',
        cache: false,
        isArray: true
      },
      update: {method: 'PUT', params: {id: '@id'}},
      delete: {method: 'DELETE', params: {id: '@id'}}
    })
  });
