/**
 * Created by faabergr on 10/21/2014.
 */
(function() {
    "use strict";

    var deckManagerApp = angular.module('deckManagerApp');

    deckManagerApp.controller('CardListCtrl', ['$scope', 'hearthstoneRepo', function($scope, hearthstoneRepo) {
        hearthstoneRepo.getAllCards()
            .then(function(response) {
                $scope.cards = response;
            },
            function() {
                console.log('failure');
            });
    }]);

    deckManagerApp.filter('filterCards', function() {
       return function(arr, filterText) {
           var outArr = [];
           var filterText = filterText || "";
           angular.forEach(arr, function(item) {
               if (item.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1)
               {
                   this.push(item);
               }
           }, outArr);
           return outArr;
       };
    });
}());