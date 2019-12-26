var shopper= {
    name:"Joshua",
    age: 29,
    groceryCart:['Apples','Celery','Pizza','Fish','Coffee'],
  isHungry:true,
    item:function() {
      return this.name + "" + this.age + this.groceryCart +""+this.item;
    }
  };
console.log(shopper)