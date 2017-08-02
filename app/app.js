angular.module("starwars", ['ui.router'])

angular.module("starwars").config(($stateProvider, $urlRouterProvider)=>{
  $stateProvider
    .state("home", {
      url:"/",
      templateUrl:"app/views/home/homeTemplate.html",
      controller:"homeCtrl"
    })
    .state("starships", {
      url:'/starships',
      templateUrl:"app/views/starships/starshipsTemplate.html",
      controller:"starshipsCtrl"
    })
    .state("starship", {
      url:'/starships/:id',
      templateUrl:"app/views/starship/starshipTemplate.html",
      controller:"starshipCtrl"
    })


  $urlRouterProvider.otherwise('/')
})
