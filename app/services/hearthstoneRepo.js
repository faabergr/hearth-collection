/**
 * Created by faabergr on 10/28/14.
 */
(function() {
   var hearthstoneRepo = function($http) {
        function getAllCards() {
            return $http.get('data/all-cards.json')
                .then(function(response) {
                    return response.data.cards;
                });
        }

       return {
            getAllCards: getAllCards
       };
   };

    var app = angular.module('deckManagerApp');
    app.factory('hearthstoneRepo', hearthstoneRepo);
}());