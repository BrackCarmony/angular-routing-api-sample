angular.module("starwars").controller("starshipCtrl",
                                      function($scope, $stateParams, starshipsSrvc){
  // $scope.id = $stateParams.id;
  starshipsSrvc.getStarship($stateParams.id).then(data=>{
    $scope.starship = data;
  })
})
