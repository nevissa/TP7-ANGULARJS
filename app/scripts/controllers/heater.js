'use strict';

angular.module('tp7AngularjsApp')

  .controller('HeaterCtrl', ['$scope', '$http', '$route', 'HeaterFactory', function ($scope, $http, $route, HeaterFactory) {

    HeaterFactory.show().$promise.then(function (value) {
      $scope.heaters = value;
      console.log($scope.heaters);
    });

    $scope.createHeater = function () {
      console.log('Creation Heater');
      console.log($scope.heater);
      $http.post('http://localhost:9000/rest/hello_Heaters/CreateHeater/', $scope.heater).then(function () {
        $route.reload();

      }, function (data) {
        document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
      })
    };

    $scope.deleteHeater = function (id) {

      HeaterFactory.delete({id: id}).$promise.then(function (value) {
        //console.log('home supprimé');
        $route.reload();
      });
    };

    $scope.editHeater = function (id) {
      console.log('pas encore implementé')
    };

  }])


  .factory('HeaterFactory', function ($resource) {
    return $resource('http://localhost:9000/rest/hello_Heaters/:id', {}, {
      show: {
        url: 'http://localhost:9000/rest/hello_Heaters/',
        method: 'GET',
        cache: false,
        isArray: true
      },
      update: {method: 'PUT', params: {id: '@id'}},
      delete: {method: 'DELETE', params: {id: '@id'}}
    })
  });
