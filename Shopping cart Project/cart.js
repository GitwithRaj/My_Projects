let label = document.getElementById('label')
let shoppingcart = document.getElementById('shopping-cart')
let basket = JSON.parse(localStorage.getItem("joy")) || []
let claculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
}
claculation()

let generateCartItems = () => {
    if (basket.length !== 0) {
        return shoppingcart.innerHTML = basket.map((x) => {
            let { id, item } = x;
            let search = shopItemsData.find((y) => y.id === id) || []
            let { img, name, price } = search;
            return `
        <div class="cart-item" ><img width="315px" height="200px" src=${img} alt=""/>
        <div class ="details">
        <div class ="title-price-x">
        <h4 class="title-price">
        <p>${name}</p>
        <p class="cart-item-price">$ ${price}</p>
        </h4>
        <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
        </div>
        <div class="button">
        <i  onclick="increment(${id})" class="bi bi-plus"></i>
        <div id=${id} class="quantity">${item}</div>
        <i  onclick="decrement(${id})" class="bi bi-dash-lg"></i>
      </div>
        <h3>${item * search.price}</h3>
        </div>
        </div>
        `
        }).join(" ")
    }
    else {
        shoppingcart.innerHTML = ``
        label.innerHTML = `
        <h2> Cart is empty</h2>
        <a href="Shopping_cart.html">
    <button class="Homebtn"> Back to home</button>
    </a>`;
    }
}
generateCartItems()
let increment = (id) => {
    let select = id;
    let search = basket.find((x) => x.id === select.id)
    if (search === undefined) {
        basket.push({
            id: select.id,
            item: 1,
        });
    }
    else {
        search.item += 1
    }
    generateCartItems()
    update(select.id);
    localStorage.setItem("joy", JSON.stringify(basket));
}
let decrement = (id) => {
    let select = id;
    let search = basket.find((x) => x.id === select.id)
    if (search === undefined)
        return
    else if (search.item === 0) {
        return;
    }
    else {
        search.item -= 1
    }
    update(select.id);
    basket = basket.filter((x) => x.item !== 0);
    generateCartItems()
    localStorage.setItem("joy", JSON.stringify(basket));
}
let update = (id) => {
    let search = basket.find((x) => x.id === id)
    //    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    claculation();
    totalAmount();
}

let removeItem = (id) => {
    let selectedItem = id
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateCartItems();
    totalAmount();
    claculation();
    localStorage.setItem("joy", JSON.stringify(basket));
}

let clearCart = () => {
    basket = []
    generateCartItems();
    claculation();
    localStorage.setItem("joy", JSON.stringify(basket));
}
let totalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket.map((x) => {
            let { item, id } = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            return item * search.price;
        }).reduce((x, y) => x + y, 0);
        // console.log(amount);
        label.innerHTML = `
        <h2>Total Bill : $ ${amount}</h2>
        <button class="checkout">Checkout</button>
        <button onclick="clearCart()" class="removeAll">Clear cart</button>
        `

    } else return;
}
totalAmount();