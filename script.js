const items = document.querySelectorAll('.item');
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const count = document.querySelectorAll('.num');

let total = document.getElementById('Total');
let Shipping = document.getElementById('shipping');
let add = 0;
let total_price = 0;
let itemsArr = []

let prices = document.querySelectorAll('.price')




for(let i = 0; i < items.length; i++){
    itemsArr.push({
        num: 1,
        price: parseFloat(prices[i].innerHTML.slice(1)) 
    })


    plus[i].addEventListener('click', function(){
        itemsArr[i].num += 1;
        count[i].innerHTML = itemsArr[i].num
        updatePrice()
    });

    minus[i].addEventListener('click', function(){
        if(itemsArr[i].num === 1){
            itemsArr[i].num = 1
            count[i].innerHTML = itemsArr[i].num
        }
        else{
            itemsArr[i].num -= 1;
            count[i].innerHTML = itemsArr[i].num
        }
        updatePrice()
    });

    // updatePrice()

}

function updatePrice(){
    let total_price = 0;
    for(var obj of itemsArr){
        total_price +=  itemsArr.length * (obj.num * obj.price)
    }
    total.innerHTML ='$' + total_price
    Shipping.innerHTML = '$' + Math.floor(total_price * 0.08)

}
// updatePrice()









