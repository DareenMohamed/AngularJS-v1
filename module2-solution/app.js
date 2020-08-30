(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    function ShoppingListCheckOffService() {
      var service = this;
      var boughtList = [];
      var toBuyList = [
          {
              name: "Cake",
              quantity: "2 pieces"
          },
          {
              name: "Sparkling water",
              quantity: "5 bottles"
          },
          {
              name: "Biscuits",
              quantity: "1 box"
          },
          {
              name: "Milk",
              quantity: "6 bottles"
          },
          {
              name: "Chips",
              quantity: "2 bags"
          }
      ];

      service.getToBuyList= function () {
          return toBuyList;
      };

      service.getBoughtList = function() {
          return boughtList;
      };

      service.removeItem = function (i) {
        var item = toBuyList[i];
        boughtList.push(item);
        toBuyList.splice(i , 1);
    };
  }
    /* ToBuyController */
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
      var list = this;
      list.toBuyList = ShoppingListCheckOffService.getToBuyList();
      list.removeItem = function(i) {
          ShoppingListCheckOffService.removeItem(i);
      };
  }
    
    /* AlreadyBoughtController */
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBought = this;
        alreadyBought.boughtList = ShoppingListCheckOffService.getBoughtList();
  }

    })();