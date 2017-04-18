var app = angular.module("myapp", ['ngRoute','ngSanitize', 'ui.select']); 

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/contact", {
        templateUrl : "contact.html"
        
    })
    .when("/temple", {
        templateUrl : "temple.html"
       
    });
});

app.controller('bad', function($scope) {
   $scope.itemArray = [
        {id: 1, name: 'first'},
        {id: 2, name: 'second'},
        {id: 3, name: 'third'},
        {id: 4, name: 'fourth'},
        {id: 5, name: 'fifth'},
    ];
});