var app = angular.module('myApp', ['ngLoadingSpinner']);

app.controller('indexController', function ($scope, $http) {

    $scope.Name = '';

    $scope.callApi = function () {

        $http({
            method: 'GET',
            url: 'http://localhost:13028/api/default'
        }).then(function (response) {
            // With the data succesfully returned, call our callback
            $scope.Name = response.data;
        });

    };

});