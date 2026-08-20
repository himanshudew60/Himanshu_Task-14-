let serviceList = [
    {
        id: 1,
        name: "🧽 Dry Cleaning",
        price: 200,
        image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=500"
    },
    {
        id: 2,
        name: "🧽 Washing Machine Service",
        price: 500,
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500"
    },
    {
        id: 3,
        name: "🥼 Laundry Service",
        price: 150,
        image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=500"
    },
    {
        id: 4,
        name: "🧼 Dishwasher Cleaning",
        price: 350,
        image: "https://images.unsplash.com/photo-1626806787928-6b3e2b4f2a6c?w=500"
    },
    {
        id: 5,
        name: "🧇 Ironing Service",
        price: 100,
        image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=500"
    },
    {
        id: 6,
        name: "👣 Carpet Cleaning",
        price: 600,
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500"
    },
    {
        id: 7,
        name: "🪑 Sofa Cleaning",
        price: 800,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"
    },
    {
        id: 8,
        name: "🪟 Curtain Cleaning",
        price: 400,
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500"
    },
    {
        id: 9,
        name: "🏡 Home Deep Cleaning",
        price: 1200,
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500"
    },
    {
        id: 10,
        name: "🛏️ Mattress Cleaning",
        price: 700,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
    }
];

let cartItem = [];
let rows = document.getElementById("rows");
let rBody = document.getElementById("r-body");
let totalAmount = document.getElementById("total-amount");
let bookNow = document.getElementById("book-now");
let bookNowFooter = document.getElementById("book-now-footer");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");


function showServices() {
    rBody.innerHTML = "";
    for (let i = 0; i < serviceList.length; i++) {
        let service = serviceList[i];
        let isAdded = cartItem.some(item => item.id === service.id);
        rBody.innerHTML += `
            <div id="row-${service.id}" class="row">
                <div class="name-price">
                    <span class="service-name">
                        ${service.name}
                    </span>
                    <span>-</span>
                    <span class="service-price">
                        <i class="fa-solid fa-indian-rupee-sign"></i>
                        ${service.price}
                    </span>
                </div>
                <button 
                    class="${isAdded ? "remove-btn" : "add-btn"}"
                    onclick="toggleCart(${service.id})"
                >
                    ${isAdded ? "Remove Item" : "Add Item"}
                    <i class="fa-solid ${isAdded ? "fa-circle-minus" : "fa-circle-plus"}"></i>
                </button>
            </div>
        `;
    }
}


function toggleCart(id) {
    let service = serviceList.find(item => item.id === id);
    let cartIndex = cartItem.findIndex(item => item.id === id);
    if (cartIndex === -1) {
        cartItem.push(service);
    } else {
        cartItem.splice(cartIndex, 1);
    }
    showCart();
    showServices();
}

function showCart() {
    rows.innerHTML = "";
    let total = 0;
    if (cartItem.length === 0) {
        rows.innerHTML = `
            <div style="height:100%;width:100%;text-align:center;padding:20px;">
                No Item in Cart
            </div>
        `;
        totalAmount.innerText = "00";
        return;
    }
    for (let i = 0; i < cartItem.length; i++) {
        total += cartItem[i].price;
        rows.innerHTML += `
            <div id="list-body">
                <div class="col-1">
                    ${i + 1}
                </div>
                <div class="col-2">
                    ${cartItem[i].name}
                </div>
                <div class="col-3">
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    ${cartItem[i].price}
                </div>
            </div>
        `;
    }
    totalAmount.innerText = total;
}

bookNow.addEventListener("click", () => {
    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value.trim() === ""
    ) {

        alert("Please fill all the fields");
        return;
    }

    if (cartItem.length === 0) {

        alert("Please add at least one service to the cart");
        return;
    }
    bookNowFooter.innerText =
        "Thank you for contacting us. We will get back to you soon.";
});

showServices();
showCart();