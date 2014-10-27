/**
 * Created by faabergr on 10/21/2014.
 */
(function() {
    "use strict";

    var deckManagerApp = angular.module('deckManagerApp');

    deckManagerApp.controller('CardListCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('data/all-cards.json')
            .success(function(data, status, headers, config ) {
                $scope.cards = data.cards;
            })
            .error(function(data, status, headers, config) {
                console.log('error');
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