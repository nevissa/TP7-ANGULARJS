'use strict';

angular.module('tp7AngularjsApp')

  .controller('homeCtrl', ['$scope', '$http', '$route', 'HomeFactory', function ($scope, $http, $route, HomeFactory) {
    HomeFactory.show().$promise.then(function (value) {
      $scope.Homes = value;
      console.log($scope.Homes);
    });

    $scope.createHome = function () {
      console.log('Creation home');
      console.log($scope.home)
      $http.post('http://localhost:9000/rest/hello_Homes/createHome/', $scope.home).then(function () {
        $route.reload();

      }, function (data) {
        document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
      })
    };

    $scope.deleteHome = function (id) {

      HomeFactory.delete({id:id}).$promise.then(function (value) {
        //console.log('home supprimé');
        $route.reload();
      });
    };

    $scope.editHome = function (id) {

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
      update: {method: 'PUT', params: {id: '@id'}},
      delete: {method: 'DELETE', params: {id: '@id'}}
    })
  });
