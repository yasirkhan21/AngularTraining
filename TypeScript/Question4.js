var Item = /** @class */ (function () {
    function Item(itemId, itemName, price, category) {
        this.Display = function () {
            console.log(item.itemId, item.itemName, item.price, item.category);
        };
        this.itemId = itemId;
        this.itemName = itemName;
        this.price = price;
        this.category = category;
    }
    return Item;
}());
var item = new Item(1, "Mobile", 20000, "Elec");
item.Display();
