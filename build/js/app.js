(function() {
    "use strict";
    var exampleApp = angular.module('exampleApp', ['exampleApp.controllers']);

    function fetchConfigs() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");

        return $http.get("http://33.33.33.10:8003/configs", {params: {access_token: true}}).then(function(response) {
            exampleApp.constant("config", response.data);
        }, function(errorResponse) {
            // Handle error case
        });
    }

    exampleApp.constant("host", 'http://33.33.33.10');
    fetchConfigs().then(function() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ["exampleApp"]);
        });
        exampleApp.service('urls', function(host, config) {
            this.monitoring = {
                url: /*config.api.monitoring.host ||*/ host + ':' + config.api.monitoring.port
            };
            this.admin = {
                url: /*config.api.admin.host ||*/ host + ':' + config.api.admin.port
            };
            this.trading = {
                url: /*config.api.trading.host ||*/ host + ':' + config.api.trading.port
            };
        });
    });
}());
