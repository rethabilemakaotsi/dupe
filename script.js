let product = [
    {
        id: 0,
        image: 'OIP.jpg',
        title: 'Jagermister',
        price: 120,
    },
    {
        id: 1,
        image: 'OIP.jpg',
        title: 'Remmy Martin',
        price: 120,

    },
    {
        id: 2,
        image: 'OIP.jpg',
        title: 'Ballianto',
        price: 120,
  
    },
    {
        id: 3,
        image: 'OIP.jpg',
        title: 'Donjlio',
        price: 120,
  
    },
    {
        id: 4,
        image: 'OIP.jpg',
        title: 'Azul',
        price: 120,
  
    }

];
let categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML =categories.map((item)=>
   {
    let {image , title, price} = item;
    return(
        `<div class='box'>
           <div class= 'img-box'>
              <img class='images' src=${image}></img>
              </div>
              <p>${title}</p>
              <h2>R ${price}.00</h2>`+
              "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
              `</div>
              </div>`
    )
   } ).join('')
   let cart =[];

   function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
   }
   function delElement(a){
    cart.splice(a, 1);
    displaycart();

   }

   function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "your cart is empty";
        document.getElementById("total").innerHTML = "R" +0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            let {image, title , price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "R"+total+".00"
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                  <img class='rowing' src=${image}>
                  </div>
                  <p style='font-size:12px;'>${title}</p>
                  <h2 style='font-size: 15px;'>R ${price}.00</h2>`+
                  "<i class='fa-solid fa-trash' onclick='delElemengt("+(j++) +")'></i></div>"

            );
        }).join('');
    }
   }