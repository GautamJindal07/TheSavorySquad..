

let cart = document.querySelectorAll('.add-cart');

let products =[
    {
        name: 'Formaggio',
        tag: 'cart1',
        price :200,
        inCart : 0
    },
    {
        name: 'PASTA',
        tag: 'cart2',
        price :250,
        inCart : 0
    },
    {
        name: 'Ravioli',
        tag: 'cart3',
        price :300,
        inCart : 0
    },
    {
        name: 'Spaghetti ',
        tag: 'cart4',
        price :350,
        inCart : 0
    },
    {
        name: 'Soup',
        tag: 'cart5',
        price :150,
        inCart : 0
    },
    {
        name: 'Bruschetta',
        tag: 'cart6',
        price :250,
        inCart : 0
    },
    {
        name: 'Garlic bread',
        tag: 'cart7',
        price :350,
        inCart : 0
    },
    {
        name: 'Risotto',
        tag: 'cart8',
        price :500,
        inCart : 0
    },
    {
        name: 'Lasagna ',
        tag: 'cart9',
        price :400,
        inCart : 0
    },
    {
        name: ' Pizza',
        tag: 'cart10',
        price :200,
        inCart : 0
    },
    {
        name: ' Carpaccio',
        tag: 'cart11',
        price :300,
        inCart : 0
    },
    {
        name: ' Tiramisu',
        tag: 'cart11',
        price :400,
        inCart : 0
    },
];

for(let i=0; i < cart.length ; i++)
{
    cart[i].addEventListener('click', () =>{
         numberCart(products[i]);
         setItem(products[i]);
        totalCost(products[i]);
    })
}

function onLoadNumberCart(){
    let productNumber = localStorage.getItem('numberCart');

    if(productNumber){
        document.querySelector('.cart span').textContent = productNumber ;
    }
}

 function numberCart(product){
    let productNumber = localStorage.getItem('numberCart');
    productNumber = parseInt(productNumber);

    if(productNumber){
        localStorage.setItem('numberCart',productNumber + 1);
        document.querySelector('.cart span').textContent = productNumber + 1;
    } 
    else{
    localStorage.setItem('numberCart',1);
    document.querySelector('.cart span').textContent = 1;
    } 
 }

 function setItem(product)
 {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null)
    {
        if(cartItems[product.tag] == undefined)
        {
            cartItems ={
            ...cartItems,
            [product.tag]:product
            }
        }
        cartItems[product.tag].inCart  += 1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
    }
}
    localStorage.setItem('productInCart',JSON.stringify(cartItems));
 }
 
function totalCost(product)
{
    let cartCost= localStorage.getItem('totalCost');
    
    if(cartCost !=null)
    {
        cartCost = parseInt(cartCost);

        localStorage.setItem("totalCost",cartCost + product.price);
    }else{
        localStorage.setItem("totalCost",product.price);
    }
   
}

function displayCart()
{
    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost= localStorage.getItem('totalCost');
    
    if(cartItems && productContainer )
    {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="products">
            <div class="img">
            <img src="./images/${item.tag}.jpg"></div><br>
            <div class="name">
            <span>${item.name}</span>
            </div>
            <div class="price" >${item.price}</div>
            <div class="quantity">
            <span>${item.inCart}</span>
            </div>
            </div>
            `;
        });
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">Basket Total</h4>
        <h4 class="basketTotal">
            ${cartCost}
        </h4>
        </div>
        `;
    }
}

const close = document.querySelector('.close');



 onLoadNumberCart();
 displayCart();


