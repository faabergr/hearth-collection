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

       function getCard(id) {
           return $http.get('data/all-cards.json')
               .then(function(response) {
                   for (var c = 0; c < response.data.cards.length; c++) {
                       var card = response.data.cards[c];
                       if (card.id == id)
                       {
                           return card;
                       }
                   }
                   return null;
               });
       };

       return {
            getAllCards: getAllCards,
            getCard: getCard
       };
   };

    var app = angular.module('deckManagerApp');
    app.factory('hearthstoneRepo', hearthstoneRepo);
}());