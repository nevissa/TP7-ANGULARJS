'use strict';

angular.module('tp7AngularjsApp')

  .controller('DeviceCtrl', ['$scope', '$http', '$route', 'deviceFactory', function ($scope, $http, $route, deviceFactory) {

    deviceFactory.show().$promise.then(function (value) {
      $scope.devices = value;
      console.log($scope.devices);
    });

    $scope.createDevice = function () {
      console.log('Creation Device');
      console.log($scope.device);
      $http.post('http://localhost:9000/rest/hello_Devices/createElectro/', $scope.device).then(function () {
        $route.reload();

      }, function (data) {
        document.getElementById("erreur").innerHTML = "Erreur lors de l'appel du json"
      })
    };

    $scope.deleteDevice = function (id) {

      deviceFactory.delete({id: id}).$promise.then(function (value) {
        //console.log('home supprimé');
        $route.reload();
      });
    };

    $scope.editDevice = function (id) {
      console.log('pas encore implementé')
    };

  }])


  .factory('deviceFactory', function ($resource) {
    return $resource('http://localhost:9000/rest/hello_Devices/:id', {}, {
      show: {
        url: 'http://localhost:9000/rest/hello_Devices/',
        method: 'GET',
        cache: false,
        isArray: true
      },
      update: {method: 'PUT', params: {id: '@id'}},
      delete: {method: 'DELETE', params: {id: '@id'}}
    })
  });
