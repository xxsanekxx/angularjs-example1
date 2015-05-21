(function() {
    "use strict";
    var controllers = angular.module('exampleApp.controllers',[]);

    controllers.controller('HeartbeatCtrl', function($scope, $http, urls) {
        $scope.services = [
            {name: 'Monitoring', status: 'Checking...'},
            {name: 'Admin', status: 'Checking...'},
            {name: 'Trading', status: 'Checking...'}
        ];
        $http.get(urls.monitoring.url + '/status').success(function() {
            $scope.services[0].status = 'Online';
        }).error(function() {
            $scope.services[0].status = 'Offline';
        });
        $http.get(urls.admin.url + '/status').success(function() {
            $scope.services[1].status = 'Online';
        }).error(function() {
            $scope.services[1].status = 'Offline';
        });
        $http.get(urls.trading.url + '/status').success(function() {
            $scope.services[2].status = 'Online';
        }).error(function() {
            $scope.services[2].status = 'Offline';
        });

    });
    controllers.controller('MonitoringCtrl', function($scope, $http, urls) {
        $scope.monitoring = {
            data: ''
        };
        $http.get(urls.monitoring.url + '/ticket', {params: {access_token: true}}).success(function(data) {
            $scope.monitoring.data = data;
        }).error(function() {

        });
    });
    controllers.controller('AdminCtrl', function($scope, $http, urls) {
        $scope.admin = {
            data: ''
        };
        $http.get(urls.admin.url + '/service', {params: {access_token: true}}).success(function(data) {
            $scope.admin.data = data;
        }).error(function() {

        });
    });
    controllers.controller('TradingCtrl', function($scope, $http, urls) {
        $scope.trading = {
            data: ''
        };
        $http.get(urls.trading.url + '/jobs', {params: {access_token: true}}).success(function(data) {
            $scope.trading.data = data;
        }).error(function() {

        });
    });
}());
