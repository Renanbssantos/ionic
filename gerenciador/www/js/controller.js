var gerenciador = angular.module('gerenciador.controller',['ionic','gerenciador.db'])

gerenciador.controller('MainCtrl', function($scope,$ionicSideMenuDelegate,DBService)
{

  $scope.toggleLeft = function(){
    $ionicSideMenuDelegate.toggleLeft()
  }

DBService.setup();

})

//var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
gerenciador.controller('RollinCtrl', function($scope,$ionicPopup){

$scope.luck = 1;

  $scope.roll6 = function(){
    var randomnumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    console.log(randomnumber);
    $ionicPopup.alert({
                        title: "Resultado",
                        template: ""+randomnumber+""
                      })
  }

  $scope.roll20 = function(){
    var randomnumber = Math.floor(Math.random() * (20 - $scope.luck + 1)) + $scope.luck;
    console.log(randomnumber);
    $ionicPopup.alert({
                        title: "Resultado",
                        template: ""+randomnumber+""
                      })

  }

  $scope.increaseLuck = function(){

    $scope.luck +=1;
    if($scope.luck < 20){
      $ionicPopup.alert({
                          title: "Sorte aumentada!",
                          template: ""+$scope.luck+""
                        })
      $scope.luck = sorte;
    }
    else{
      $ionicPopup.alert({
        title: "Alerta!",
        template: "Sorte já atingiu o valor máximo"
      })
    }
  }

  $scope.resetLuck = function(){
    $scope.luck = 1;
    $ionicPopup.alert({
                        title: "Sorte resetada!",
                        template: ""+$scope.luck+""
                      })
  }

})

gerenciador.controller('AddClienteCtrl', function($scope,$ionicPopup,DBService){

$scope.salvar = function(cliente){

  DBService.salvarCliente(cliente);
}

$scope.select = function(){
  DBService.getCliente().then(function(results){

    if(results.length === 0){
      $ionicPopup.alert({
          title: "Aviso",
          template: "Sem clientes registrados."
      });
      }
      else{
      $scope.clientes = results;
      }
  })
}

$scope.select();

})

gerenciador.controller('CalculadoraCtrl', function($scope){
  $scope.produtos = [
    {
      nome: 'Casca de soja 20kg',
      preco: 18,
      qtd: 0
    },
    {
      nome: 'Casca de soja 25kg',
      preco: 20,
      qtd: 0
    },
    {
      nome: 'Soja moída',
      preco: 30,
      qtd: 0
    },
    {
      nome: 'Farelo de trigo',
      preco: 19,
      qtd: 0
    },
    {
      nome: 'Milho',
      preco: 22,
      qtd: 0
    },
    {
      nome: 'Aveia',
      preco: 18,
      qtd: 0
    },
    {
      nome: 'Feno',
      preco: 10,
      qtd: 0
    }
  ];

  $scope.somaTotal = 0;

  $scope.plusOne = function(index){
    $scope.somaTotal += $scope.produtos[index].preco;
    $scope.produtos[index].qtd++;
  }
  $scope.minusOne = function(index){
    if($scope.produtos[index].qtd > 0){
      $scope.somaTotal -= $scope.produtos[index].preco;
      $scope.produtos[index].qtd--;
    }
  }
})
