//starshipComp.js
angular.module("starwars").component("starship", {

  controller:function(){
    this.goToHyperSpace = ()=>{
      alert(`The ${this.details.name} is going to hyperspace`);
    }
  },
  bindings:{
    owner:'@', // This is string binding
    details:'<', // One way binding
    onPurchase:'&', // Action bindings
    fullDetails:'<'
  },
  controllerAs:'ship',
  // template:'<div>Comp</div>',
  templateUrl:'app/components/starship/starshipTemplate.html',
  // transclude:true

})
