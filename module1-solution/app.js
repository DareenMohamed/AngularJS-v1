(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        
        $scope.counter = function () {
        
        if($scope.lunch === undefined ){
            $scope.bonusMsg={'color': 'red'};
            $scope.bonusBox={'box-shadow': '0px 0px 15px 0px red'};
            $scope.msg="Please enter data first";
            return false;
        }
        const list = $scope.lunch.split(','); 
        console.log(list);
        var len = list.length;
        for (let i = 0; i < list.length; i++) {
          if(list[i]===""){
              len--;
          }
        }console.log(len);
        if (len===0 || $scope.lunch==="") {
            $scope.bonusMsg={'color': 'red'};
            $scope.bonusBox={'box-shadow': '0px 0px 15px 0px red'};
            $scope.msg="Please enter data first";
        } else {
            $scope.bonusMsg={'color': 'green'};
            $scope.bonusBox={'box-shadow': '0px 0px 15px 0px green'};
            if (len <=3) {
              $scope.msg="Enjoy!";
            }else {
              $scope.msg="Too much!";
          }
        }
        };
      }  
    })();