var app = angular.module("3dportraitApp");

app.controller("productController", ["$scope", "$location", function ($scope, $location) {

    var feed = new Instafeed({
        get: 'user',
        userId: 4794233868,
        accessToken:  '4794233868.911d299.3d42fceb8414437a8e3d6f098b6d163a',
        resolution: 'standard_resolution',
        limit: 8
    });

    feed.run();

}]);
