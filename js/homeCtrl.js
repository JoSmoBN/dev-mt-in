angular.module('devMtIn')
  .controller('homeCtrl', function($scope) {



    $scope.myProfile = {

        friends: [{name: 'Paul'}, {name: 'Jeremy'},{name: 'Wifey'},{name: 'Rachel'},{name: 'Lindsay'}]

      };

    $scope.sortOptions = [
      {
        display: 'Ascending'
      , value: false
      },
      {
        display: 'Descending'
      , value: true
      }
    ];

  });
