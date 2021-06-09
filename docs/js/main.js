//global
var products  = [];
var cartItems = [];
var cart_n= document.getElementById('cart_n');

if (localStorage.getItem('positions')) {
    var positions= [JSON.parse(localStorage.getItem('positions'))];
} else {
    var positions=[];
}

//DIVS
var fruitDIV = document.getElementById('fruitDIV');
var juiceDIV = document.getElementById('juiceDIV');
var saladDIV = document.getElementById('saladDIV');

//INFORMATION
var FRUIT= [
    {id:1,cart:false,img:'img/fruits/fruit1.jpeg',quantity:1,total:0,name:'Apple',price:1},
    {id:2,cart:false,img:'img/fruits/fruit2.jpeg',quantity:1,total:0,name:'Orange',price:1},
    {id:3,cart:false,img:'img/fruits/fruit3.jpeg',quantity:1,total:0,name:'Cherry',price:1},
    {id:4,cart:false,img:'img/fruits/fruit4.jpeg',quantity:1,total:0,name:'Strawberry',price:1},
    {id:5,cart:false,img:'img/fruits/fruit5.jpeg',quantity:1,total:0,name:'Kiwi',price:1},
    {id:6,cart:false,img:'img/fruits/fruit6.jpeg',quantity:1,total:0,name:'Banana',price:1},
    {id:7,cart:false,img:'img/fruits/fruit7.jpeg',quantity:1,total:0,name:'Grape',price:1},
    {id:8,cart:false,img:'img/fruits/fruit8.jpeg',quantity:1,total:0,name:'Apple',price:1}
];
var JUICE= [
    {id:9,cart:false,img:'img/juice/juice1.jpeg',quantity:1,total:0,name:'Juice #1',price:10},
    {id:10,cart:false,img:'img/juice/juice2.jpeg',quantity:1,total:0,name:'Juice #2',price:11},
    {id:11,cart:false,img:'img/juice/juice3.jpeg',quantity:1,total:0,name:'Juice #3',price:12},
    {id:12,cart:false,img:'img/juice/juice4.jpeg',quantity:1,total:0,name:'Juice #4',price:13}
];

var SALAD= [
    {id:13,cart:false,img:'img/salads/salad1.jpeg',quantity:1,total:0,name:'Salad #1',price:11},
    {id:14,cart:false,img:'img/salads/salad2.jpeg',quantity:1,total:0,name:'Salad #2',price:12},
    {id:15,cart:false,img:'img/salads/salad3.jpeg',quantity:1,total:0,name:'Salad #3',price:15},
    {id:16,cart:false,img:'img/salads/salad4.jpeg',quantity:1,total:0,name:'Salad #4',price:12}
];

//HTML
function HTMLfruitProduct(con) {
    let btn= `btnFruit${con}`;
    if (FRUIT[con-1].cart) {
        return `
        <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
            <div class="card">
                <div class="card-image">
                    <img src="${FRUIT[con-1].img}">
                    <a onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green">
                        <i class="material-icons">shopping_cart</i>
                    </a>
                </div>
                <div class="card-content">
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <span class="card-title">${FRUIT[con-1].name}</span>
          <p>Price: $${FRUIT[con-1].price}.00</p>
         
          </div>
            </div>
        </div>    
        `
    }else{
        return `
        <div class="col s3 wow fadeInUp data-wow-delay="3s"  data-wow-offset="300" ">
        <div class="card">
          <div class="card-image">
            <img src="${FRUIT[con-1].img}">
            
            <a id="${btn}" onclick="cart('${FRUIT[con-1].id}','${FRUIT[con-1].cart}','${FRUIT[con-1].img}','${FRUIT[con-1].quantity}','${FRUIT[con-1].total}','${FRUIT[con-1].name}','${FRUIT[con-1].price}','${btn}')" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
            <a id="${btn}alert" style="display:none" onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">shopping_cart</i></a>
          </div>
          <div class="card-content">
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <i style="color:orange;" class="fa fa-star"  ></i>
          <span class="card-title">${FRUIT[con-1].name}</span>
          <p>Price: $${FRUIT[con-1].price}.00</p>
         
          </div>
        </div>
      </div>
        `
    }
}

function HTMLjuiceProduct(con){
    let btn = `btnJuice${con}`;
      if (JUICE[con-1].cart) {
        return  `
     
        <div class="col s3 wow fadeInUp data-wow-delay="3s"  data-wow-offset="300" ">
          <div class="card">
            <div class="card-image">
              <img src="${JUICE[con-1].img}">
              
              <a id="${btn}alert"  onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">shopping_cart</i></a>
            </div>
            <div class="card-content">
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <span class="card-title">${JUICE[con-1].name}</span>
            <p>Price: $${JUICE[con-1].price}.00</p>
           
            </div>
          </div>
        </div>
        `
      } else {
        return  `
     
        <div class="col s3 wow fadeInUp data-wow-delay="3s"  data-wow-offset="300" ">
          <div class="card">
            <div class="card-image">
              <img src="${JUICE[con-1].img}">
              
              <a id="${btn}" onclick="cart('${JUICE[con-1].id}','${JUICE[con-1].cart}','${JUICE[con-1].img}','${JUICE[con-1].quantity}','${JUICE[con-1].total}','${JUICE[con-1].name}','${JUICE[con-1].price}','${btn}')" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
              <a id="${btn}alert" style="display:none" onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">shopping_cart</i></a>
            </div>
            <div class="card-content">
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <span class="card-title">${JUICE[con-1].name}</span>
            <p>Price: $${JUICE[con-1].price}.00</p>
           
            </div>
          </div>
        </div>
        `
      }
     
  }
  function HTMLsaladProduct(con){
     
      let btn = `btnSalad${con}`;
      if (SALAD[con-1].cart) {
        return  `
     
        <div class="col s3 wow fadeInUp data-wow-delay="3s"  data-wow-offset="300" ">
          <div class="card">
            <div class="card-image">
              <img src="${SALAD[con-1].img}">
              <a id="${btn}alert"  onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">shopping_cart</i></a>
              
            </div>
            <div class="card-content">
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <span class="card-title">${SALAD[con-1].name}</span>
            <p>Price: $${SALAD[con-1].price}.00</p>
           
            </div>
          </div>
        </div>
        `
      } else {
        return  `
     
        <div class="col s3 wow fadeInUp data-wow-delay="3s"  data-wow-offset="300" ">
          <div class="card">
            <div class="card-image">
              <img src="${SALAD[con-1].img}">
              
              <a id="${btn}" onclick="cart('${SALAD[con-1].id}','${SALAD[con-1].cart}','${SALAD[con-1].img}','${SALAD[con-1].quantity}','${SALAD[con-1].total}','${SALAD[con-1].name}','${SALAD[con-1].price}','${btn}')" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
              <a id="${btn}alert" style="display:none" onclick="alertCart()" class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">shopping_cart</i></a>
            </div>
            <div class="card-content">
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <i style="color:orange;" class="fa fa-star"  ></i>
            <span class="card-title">${SALAD[con-1].name}</span>
            <p>Price: $${SALAD[con-1].price}.00</p>
           
            </div>
          </div>
        </div>
        `
      }
  }
  //ANIMATION 
  function animation(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000
    });
    
    Toast.fire({
      icon: 'success',
      title: 'Added to shopping cart'
    })
  
      
  }
  //Alert Cart
  function alertCart() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000
    });
    
    Toast.fire({
      icon: 'info',
      title: 'Product already added to shopping cart'
    })
  }
  // CART FUNCTIONS
  function cart(id,cart,img,quantity,total,name,price,btncart){
      var item={
        id:id,cart:true,img:img,quantity:quantity,total:total,name:name ,price:price
      }
      positions.push(id);
      localStorage.setItem("positions",JSON.stringify(positions));
      cartItems.push(item);
      let storage= JSON.parse(localStorage.getItem("cart"));
      if (storage==null) {
              products.push(item);
              localStorage.setItem("cart",JSON.stringify(products));
      } else {
          products= JSON.parse(localStorage.getItem("cart"));
          products.push(item);
          localStorage.setItem("cart",JSON.stringify(products));
      }
      products= JSON.parse(localStorage.getItem("cart"));
      cart_n.innerHTML=`[${products.length}]`;
      document.getElementById(btncart).style.display="none";
      document.getElementById(btncart+'alert').style.display="block";
      animation();
  }
  
  //RENDER
  $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
    $(document).ready(function(){
      $('.modal').modal();
    });
  function render(){
    new WOW().init();
    if (localStorage.getItem('positions')) {
      var localProductsCart = JSON.parse(localStorage.getItem('positions'));
    } else {
      var localProductsCart = [];
      localStorage.setItem('positions',JSON.stringify(localProductsCart));
      var localProductsCart = JSON.parse(localStorage.getItem('positions'));
    }
      
      for (let index = 0; index < localProductsCart.length; index++) {
         //FRUIT
        for (let index2 = 0; index2 < FRUIT.length; index2++) {
              if (localProductsCart[index] == FRUIT[index2].id) {
                  FRUIT[index2].cart= true;
                  
              }else{
               
              }
          }
        //JUICE
        for (let index2 = 0; index2 < JUICE.length; index2++) {
          if (localProductsCart[index] == JUICE[index2].id) {
              JUICE[index2].cart= true;
              
          }else{
           
          }
      }
      //SALAD
      for (let index2 = 0; index2 < SALAD.length; index2++) {
        if (localProductsCart[index] == SALAD[index2].id) {
            SALAD[index2].cart= true;
            
        }else{
         
        }
    }
      
      
        }
  
  
      for (let index = 1; index <= 8; index++) {
          fruitDIV.innerHTML+=`${HTMLfruitProduct(index)}`;
      }
      for (let index = 1; index <= 4; index++) {
          juiceDIV.innerHTML+=`${HTMLjuiceProduct(index)}`;
          saladDIV.innerHTML+=`${HTMLsaladProduct(index)}`;
      }
      if (localStorage.getItem("cart")==null) {
          
      } else {
          products=JSON.parse(localStorage.getItem("cart"));
          cart_n.innerHTML=`[${products.length}]`;
      }
  
  }