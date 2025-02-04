class Cart{
    item;
    #localstorageKey;
    constructor(localstorageKey){

      this.#localstorageKey=localstorageKey;

      this.#loadFromStorage();
      
    }
    #loadFromStorage(){
        
        this.item=JSON.parse(localStorage.getItem(this.#localstorageKey));
        if(!this.item){
        this.item=[{
           productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
           quantity:2,
           deliveryOptionId:'1'
        
        },{
           productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
           quantity:1,
           deliveryOptionId:'2'
        }];
     }
   }
   saveToStorage(){
    localStorage.setItem(this.#localstorageKey,JSON.stringify(this.item));
 }
 addtocart(productId){
    let matchingItem;
       this.item.forEach((item)=>{
        if(productId===item.productId){
           matchingItem=item;
        }
       });
       if(matchingItem){
        matchingItem.quantity+=1;
       }else{
        this.item.push({
          productId:productId,
          quantity:1,
          deliveryOptionId:'1'
        });
       }
       this.saveToStorage();
  }
  removeFromcart(productId){
    const newcart=[];
    this.item.forEach((item)=>{
       if(item.productId!==productId){
          newcart.push(item);
       }
 
    });
    this.item=newcart;
    this.saveToStorage();
 
   }
    
   updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem;
        this.item.forEach((item)=>{
         if(productId===item.productId){
            matchingItem=item;
         }
       });
       matchingItem.deliveryOptionId=deliveryOptionId;
       this.saveToStorage();
   }
}


const cart=new Cart('cart-oop');
const businesscart=new Cart('cart-business');

console.log(cart);
console.log(businesscart);







   
   







   
   