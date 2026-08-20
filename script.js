serviceList = [
    {
        id: 1,
        name: "Dry Cleaning",
        price: 200,
        image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=500"
    },
    {
        id: 2,
        name: "Washing Machine Service",
        price: 500,
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500"
    },
    {
        id: 3,
        name: "Laundry Service",
        price: 150,
        image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=500"
    },
    {
        id: 4,
        name: "Dishwasher Cleaning",
        price: 350,
        image: "https://images.unsplash.com/photo-1626806787928-6b3e2b4f2a6c?w=500"
    },
    {
        id: 5,
        name: "Ironing Service",
        price: 100,
        image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=500"
    },
    {
        id: 6,
        name: "Carpet Cleaning",
        price: 600,
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500"
    },
    {
        id: 7,
        name: "Sofa Cleaning",
        price: 800,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"
    },
    {
        id: 8,
        name: "Curtain Cleaning",
        price: 400,
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500"
    },
    {
        id: 9,
        name: "Home Deep Cleaning",
        price: 1200,
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500"
    },
    {
        id: 10,
        name: "Mattress Cleaning",
        price: 700,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
    }
];
let cartItem  =[];
let currentItem = 0;
let total = 0;
let rows = document.getElementById("rows");
let image = document.getElementById("service-image");
let name = document.getElementById("service-name");
let price = document.getElementById("service-price");
let skipBtn = document.getElementById("skip-btn");
let addBtn = document.getElementById("add-btn");
let totalAmount = document.getElementById("total-amount");
let bookNow = document.getElementById("book-now");
let bookNowFooter = document.getElementById("book-now-footer");
skipBtn.addEventListener("click", () => {
    showCurrentItem(currentItem+1);
    currentItem++;
});

addBtn.addEventListener("click", () => {
   showCurrentItem(currentItem);
    cartItem.push(serviceList[currentItem]);
    rows.innerHTML = "";
 
    for (let i = 0; i < cartItem.length; i++) {
        total += cartItem[i].price;
        rows.innerHTML += `
         <div id="list-body">
                           <div class="col-1">${i+1}</div>
                           <div class="col-2">${cartItem[i].name}</div>
                           <div class="col-3">${cartItem[i].price}</div>
                       </div>
       
        `;
    }
    totalAmount.innerText = total;

    currentItem++;
});

function showCurrentItem(currentItem) {
    image.src = serviceList[currentItem].image;
    name.innerText = serviceList[currentItem].name;
    price.innerText = serviceList[currentItem].price;
}
onLoad();
function onLoad() {
       if(!cartItem.length){
       rows.innerHTML += `
    <div style="height:100%; width:100%; text-align:center;">
        No Item in Cart
    </div>
`;
    }   
    showCurrentItem(currentItem);
}

bookNow.addEventListener("click", () => {
    if(name.value == "" || email.value == "" || password.value == ""){
        alert("Please fill all the fields");
        return;
    }
    bookNowFooter.innerText = "Thank you for contacting us. we will get back to you soon.";
   
})
