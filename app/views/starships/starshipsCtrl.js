angular.module("starwars").controller("starshipsCtrl", function($scope, starshipsSrvc){
  $scope.name = "starships are awesome"
  // $scope.data = starshipsSrvc.staticData;
  starshipsSrvc.getStarships().then(data=>{
    $scope.data = data;
  })
})
