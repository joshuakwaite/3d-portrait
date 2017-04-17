var app = angular.module("3dportraitApp");

app.controller("productController", ["$scope", function($scope) {

    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        clientId: '933754b3d5c44b46925ed5294cfa17a1'
    });
    feed.run();

}]);