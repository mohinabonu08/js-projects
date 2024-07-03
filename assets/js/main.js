'use strict'
let div=document.getElementById("div")
let headingg=document.getElementById("heading")
let paragraphh=document.getElementById("paragraph")
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
btn1.addEventListener("click",function(){
    document.getElementById("headingg").innerHTML="new heading",
    document.getElementById("paragraphh").innerHTML="new paragraph"
})
btn2.addEventListener("click",function(){
    let parag=document.createElement("p")
    let paragraph=document.createTextNode("another new paragraph")
    parag.appendChild(paragraph)
    div.appendChild(parag);

    let head=document.createElement("h3")
    let heading=document.createTextNode("another new heading")
    head.appendChild(heading)
    div.appendChild(head)
})


btn3.addEventListener("click",function(){
    let parag=document.createElement("p")
    let paragraph=document.createTextNode("another new paragraph")
    parag.appendChild(paragraph)
    div.appendChild(parag);
    parag.remove(paragraph)
    div.remove(parag)

    // let head=document.createElement("h2")
    // let heading=document.createTextNode("another new heading")
    // head.appendChild(heading)
    // div.appendChild(head)
    // head.remove("heading")
    // div.remove("head")
})
