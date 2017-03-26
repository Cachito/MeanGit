// mean clase 2 js
var app = angular.module('CachoApp', ['ngMaterial', 'ngMdIcons']);

app.controller('cachoCtrl', ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog',
    function($scope, $mdBottomSheet, $mdSidenav, $mdDialog){
        $scope.toggleSidenav = function(menuId){
            $mdSidenav(menuId).toggle();
        };

    $scope.menu =[
        {
            link:'',
            title: 'Inicio',
            icon: 'dashboard'
        },
        {
            link:'',
            title: 'Rockers',
            icon: 'group'
        },
        {
            link:'',
            title: 'Mensajes',
            icon: 'message'
        }
    ];

    $scope.admin =[
        {
            link:'',
            title: 'Borrar',
            icon: 'delete'
        },
        {
            link:'',
            title: 'Configuración',
            icon: 'settings'
        }
    ];
}]);
