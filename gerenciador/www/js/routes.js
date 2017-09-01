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
                controller: 'AddClienteCtrl'
              }
            }
          })
          .state('gerenciador.calculadora',{
            url:'/calculadora',
            views:{
              'menuContent': {
                templateUrl: 'pages/calculadora.html',
                controller: 'CalculadoraCtrl'
              }
            }
          })

          .state('gerenciador.clientes',{
            url:'/clientes',
            views:{
              'menuContent': {
                templateUrl: 'pages/allClients.html',
                controller: 'AddClienteCtrl'
              }
            }
          })
  $urlRouterProvider.otherwise('/URL/dice');
})
