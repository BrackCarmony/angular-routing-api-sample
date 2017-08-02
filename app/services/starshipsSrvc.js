// starshipsSrvc.js
angular.module("starwars").service("starshipsSrvc", function($http){

  this.getStarships = function(){
    return $http.get('https://swapi.co/api/starships/').then((response)=>{
      return response.data.results.map(e => {
        // url "https://swapi.co/api/starships/5/""
        // This is to get ids from the url property
        e.id = e.url.slice(31, e.url.length-1) * 1;

        return e;
      })
    }).catch(err=>console.log(err));
  }
  this.getStarship = function(id){
    return $http.get(`https://swapi.co/api/starships/${id}/`).then((response)=>{
      //Great place to do other data transformations
      return response.data;
    }).catch(err=>console.log(err));
  }
})
