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
