angular.module('gerenciador.routes',['gerenciador.controller'])

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('gerenciador', {
            url:'/URL',
            abstract: true,
            templateUrl:'pages/menu.html'
          })
    .state('gerenciador.dice', {
            url: '/dice',
            views: {
            'menuContent' :{
            templateUrl: 'pages/dice.html',
            controller: 'RollinCtrl'
                          }
                    }
          })
    .state('gerenciador.about', {
            url: '/about',
            views: {
              'menuContent' :{
                templateUrl: 'pages/about.html'
              }
            }
          })
          .state('gerenciador.creation', {
            url:'/creation',
            views: {
              'menuContent': {
                templateUrl: 'pages/creation.html',
                controller: 'DBController'
              }
            }
          })
  $urlRouterProvider.otherwise('/URL/dice');
})
