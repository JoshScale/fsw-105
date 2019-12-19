var shoppingList = {
    item1:"Apples",
    item2:"Celery",
    item3:"chicken",
    item4:[5,true],
    item5: function(){
        return this.item1 + "item2" + item3 + this
    }
 }
 function shoppingCart(params,another)  {
     return params + " " + another 
 }
console.log(shoppingList)
console.log(shoppingCart("blue","another"))
