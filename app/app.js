(function() {
    var deckManagerApp = angular.module('deckManagerApp', ["ngRoute"]);

    deckManagerApp.config(function($routeProvider) {
       $routeProvider
           .when("/cardList", {
               templateUrl: 'app/views/cardlist.html',
               controller: "CardListCtrl"
           })
           .otherwise({redirectTo: "/cardList"});
    });
}());