/*
A best practice is to use clojures for modules
*/
(function(){
  //Création du Module
  var app = angular.module('gemStore', [ ]);

  //Création du Model Object
  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'O IZ SHINING',
    soldOut: false
  };

  //Création du Controller
  var controller = app.controller('storeController', function(){
    //On passe le Model Object au Controller en créant un de ses attributs
    this.product = gem;
  });


})();
