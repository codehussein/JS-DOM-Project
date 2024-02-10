let colors = ["red","blue","chan","green","white","pink","purple"];
let bodyElement = document.body;
let buttonElement = document.getElementById("btn")


buttonElement.addEventListener("click",function(){
    let random = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[random];
})