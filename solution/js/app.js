(function() {
  angular.module('LunchCheck', []).controller(
    'LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = [ '$scope' ];
  function LunchCheckController($scope) {
    $scope.userInput = '';
    $scope.message = 'What do you usually have for lunch?';
    $scope.messageStyle = '';

    $scope.checkit = function () {
      if ( $scope.userInput == '') {
        $scope.message = 'Please enter data first';
        $scope.messageStyle = 'message-baddata';
      }
      else {
        var items = $scope.userInput.split(',');
        var count = 0;
        for (var i = 0; i < items.length; i++)
          if (items[i].trim() != '')
            count++;

        if ( count <= 3)
          $scope.message = 'Enjoy!';
        else
          $scope.message = 'Too much!';
        $scope.messageStyle = 'message-ok';
      }
    }

  }


})();
