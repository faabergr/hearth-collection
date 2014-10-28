/**
 * Created by faabergr on 10/28/14.
 */
(function() {
    'use strict';
    var app = angular.module('deckManagerApp');

    app.controller('CardCtrl', ['$scope', 'hearthstoneRepo', '$routeParams', function($scope, hearthstoneRepo, $routeParams) {
        var id = $routeParams.id;
        console.log('id is ' + id);
        hearthstoneRepo.getCard(id)
            .then(function(card) {
                $scope.card = card;
            });
    }]);
}());