let home1=document.querySelector('.home1')
let home2=document.querySelector('.home2')
let home3=document.querySelector('.home3')
let guest1=document.querySelector('.guest1')
let guest2=document.querySelector('.guest2')
let guest3=document.querySelector('.guest3') 
let newGame= document.querySelector('.new-btn')

let homeEl=document.querySelector('.home-count')
let guestEl=document.querySelector('.guest-count')

let homeCount = 0
let guestCount = 0


function addhome1(){
    console.log(255);
    homeCount++
    homeEl.textContent=homeCount
}
function addhome2(){
    homeCount+=2
    homeEl.textContent=homeCount
}
function addhome3(){
    homeCount+=3
    homeEl.textContent=homeCount
}
function addguest1(){
    guestCount++
    guestEl.textContent=guestCount
}
function addguest2(){
    guestCount+=2
    guestEl.textContent=guestCount
}
function addguest3(){
    guestCount+=3
    guestEl.textContent=guestCount
}
function reset(){
    homeCount=0
    guestCount=0
    homeEl.textContent=homeCount
    guestEl.textContent=guestCount
}


home1.addEventListener('click',addhome1)
home2.addEventListener('click',addhome2)
home3.addEventListener('click',addhome3)

guest1.addEventListener('click',addguest1)
guest2.addEventListener('click',addguest2)
guest3.addEventListener('click',addguest3)

newGame.addEventListener('click',reset)