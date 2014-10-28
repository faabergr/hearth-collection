(function() {
    var deckManagerApp = angular.module('deckManagerApp', ["ngRoute"]);

    deckManagerApp.config(function($routeProvider) {
       $routeProvider
           .when("/cardList", {
               templateUrl: 'app/views/cardlist.html',
               controller: 'CardListCtrl'
           })
           .when("/card/:id", {
               templateUrl: 'app/views/card.html',
               controller: 'CardCtrl'
           })
           .otherwise({redirectTo: "/cardList"});
    });
}());