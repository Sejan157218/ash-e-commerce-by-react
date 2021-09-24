const AddLocalStorage = key => {
    const shopingCart = getKey();
    let Cart ={}
    if(!shopingCart){
        Cart[key] = 1;
    }
    else{
        Cart = JSON.parse(shopingCart);
        if(Cart[key]){
            const newCart = Cart[key] +1;
            Cart[key] = newCart;
        }
        else{
            Cart[key] = 1;
        }
    }
    updateData(Cart)
};
const getKey =()=> localStorage.getItem('cart');

const updateData = Cart=>{
    localStorage.setItem('cart',JSON.stringify(Cart))
   }
const getStorageData = ()=>{
    const shopingCart = getKey();
    return shopingCart? JSON.parse(shopingCart):{};
}

export {AddLocalStorage,getStorageData};