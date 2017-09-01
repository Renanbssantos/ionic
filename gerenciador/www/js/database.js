angular.module('gerenciador.db',['ionic','gerenciador.controller'])

//db = new Dexie("banco_de_clientes");

.factory("DBService", function($q,$ionicPopup,$state){
  var db = null;

  function createDB(){
    var deferred = $q.defer;
    var version = 1;
    var request = window.indexedDB.open("ClienteDB",version);

    request.onupgradeneeded = function(e){
      db = e.target.result;
      e.target.transaction.onerror = indexedDB.onerror;

      if(db.objectStoreNames.contains("clienteData")) {
                db.deleteObjectStore("clienteData");
      }

      var store = db.createObjectStore("clienteData", { keyPath: "id", autoIncrement:true });

    }

    request.onsuccess = function(e){
      alert("DB acessado com sucesso!");
      db = e.target.result;
      //deferred.resolve();
    }

    request.onerror = function(e){
            deferred.reject("Error creating database.");
            console.dir(e);
        };

        return deferred.promise;

  }

  function setCliente(cliente){
    var nome_cliente = cliente.nome;
    var endereco_cliente = cliente.endereco;


      console.log(nome_cliente);
      console.log(endereco_cliente);

    var deferred = $q.defer();

    if(db === null){
            deferred.reject("IndexedDB ainda não foi aberto!");
    }
    else{
      var trans = db.transaction(["clienteData"],"readwrite");
      var store = trans.objectStore("clienteData");

      var request = store.add({
        "nome_cliente": nome_cliente,
        "endereco_cliente": endereco_cliente
      })

      request.onsuccess = function(e){
        deferred.resolve();
        $ionicPopup.alert({
          title:'Sucesso!',
          message: 'Cliente adicionado com sucesso.'
        })
      }

      request.onerror = function(e){
        deferred.reject("Erro ao salvar cliente");
        console.log(e.value);
      }
    }
    return deferred.promise;
  }


  function getCliente(){
    var deferred = $q.defer();

    if(db === null){
            deferred.reject("IndexedDB ainda não foi aberto!");
    }
    else{
      var trans = db.transaction(["clienteData"], "readwrite");
      var store = trans.objectStore("clienteData");
      var clientes = [];

      //pega tudo que está salvo
      var keyRange = IDBKeyRange.lowerBound(0);
      var cursorRequest = store.openCursor(keyRange);

      cursorRequest.onsuccess = function(e) {
                var result = e.target.result;
                if(result === null || result === undefined){
                    deferred.resolve(clientes);
                }
                else{
                    clientes.push(result.value);
                    result.continue();
                }
      }

      cursorRequest.onerror = function(e){
        deferred.reject("Erro ao acessar os dados: " + e.value);
      }
    }

    return deferred.promise;
  }


return{
  setup: function(){
    return createDB();
  },
  salvarCliente: function(cliente){
    return setCliente(cliente);
  },
  getCliente: function(){
    return getCliente();
  }
}
})
