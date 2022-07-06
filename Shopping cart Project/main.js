let shop=document.getElementById('shop');


let  basket =JSON.parse(localStorage.getItem("joy")) || []
let generateshop = () => {
    return (shop.innerHTML=shopItemsData.map((x)=>{
        let {id,name,price,desc,img}=x;
        let search=basket.find((x)=>x.id===id)||[]
        return ` <div id=product-id-${id} class="item"> 
        <img  width="220" height="250px" src=${img}  alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="button">
                  <i  onclick="increment(${id})" class="bi bi-plus"></i>
                  <div id=${id} class="quantity">${search.item===undefined?0:search.item}</div>
                  <i  onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                </div>
            </div>
        </div>
      </div> `;
    }).join(""))
}

generateshop();

let increment =(id)=>{
    let select=id;
    let search =basket.find((x)=>x.id===select.id)
    if(search===undefined){
        basket.push({
            id:select.id,
            item:1,
        });
    }
   else{
       search.item+=1
   }
update(select.id);
localStorage.setItem("joy",JSON.stringify(basket));
}
let decrement =(id)=>{
    let select=id;
    let search =basket.find((x)=>x.id===select.id)
    if(search===undefined)
    return
   else if(search.item===0){
      return;
    }
   else{
       search.item-=1
   }
   update(select.id);
   basket=basket.filter((x)=>x.item!==0);

localStorage.setItem("joy",JSON.stringify(basket));
}
let update =(id)=>{
    let search=basket.find((x)=>x.id===id)
//    console.log(search.item);
   document.getElementById(id).innerHTML=search.item;
   claculation();
}

let claculation=()=>
{
    let cartIcon=document.getElementById("cartAmount");
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
    // console.log(basket.map((x)=>x.item).reduce((x,y)=>x+y,0));
}
claculation()