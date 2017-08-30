angular.module('gerenciador.db',['ionic','gerenciador.controller'])

//db = new Dexie("banco_de_clientes");

.factory("DBService", function($q,$ionicPopup,$state){

  function createDB() {
    var db = null;
    db = new Dexie("banco_de_clientes");
    db.version(1).stores({
              clientes: 'nome,localidade'
          });

          //db.clientes.put({})

          //
               // Put some data into it
               //
               /*db.friends.put({name: "Nicolas", shoeSize: 8}).then (function(){
                   //
                   // Then when data is stored, read from it
                   //
                   return db.friends.get('Nicolas');
               }).then(function (friend) {
                   //
                   // Display the result
                   //
                   alert ("Nicolas has shoe size " + friend.shoeSize);
               }).catch(function(error) {
                  //
                  // Finally don't forget to catch any error
                  // that could have happened anywhere in the
                  // code blocks above.
                  //
                  alert ("Ooops: " + error);
               });*/

  }

  return {
          setup: function() {
              return createDB();
          }

      }

})

.controller('DBController', function($scope,$ionicPopup){
  $scope.teste = function($scope){
    alert('teste');
    $ionicPopup.alert({
                      title: "AAAAAAAAQUI",
                      template: ""+$scope+""
                    })
                    console.log('chegou aqui')
  }
})
