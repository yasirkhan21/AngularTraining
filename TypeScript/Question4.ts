class Item{
     itemId:number;
     itemName:string;
     price:number;
     category:string;
     constructor(itemId:number, itemName:string, price:number,category:string){
        this.itemId=itemId;
        this.itemName=itemName;
        this.price=price;
        this.category=category;
     }
     Display=()=>{
        console.log(item.itemId,item.itemName,item.price,item.category);
    }
   
}

let item = new Item(1,"Mobile",20000,"Elec");
item.Display();
