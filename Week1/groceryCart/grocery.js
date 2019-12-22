var shoppingList = {
    item1: "Turkey",
    item2 : "Apples",
    item3 : true,
    item4 : function() {
      return this.item1 + "" + this.item3;
    }
  };
console.log(shoppingList)