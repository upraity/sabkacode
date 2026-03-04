
let isOpen=false;

const mainBtn=document.getElementById("click");
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");

mainBtn.addEventListener("click",function(){

if(!isOpen){

btn1.classList.add("visible");
btn2.classList.add("visible");
btn3.classList.add("visible");

mainBtn.querySelector("i").style.color="#0d47a1";

isOpen=true;

}else{

btn1.classList.remove("visible");
btn2.classList.remove("visible");
btn3.classList.remove("visible");

mainBtn.querySelector("i").style.color="#34495e";

isOpen=false;

}

});


/* LINKS */

btn1.onclick=function(){
window.location.href="https://t.me/sabkacode";
}

btn2.onclick=function(){
window.location.href="https://chat.arattai.in/groups/n43545f313238383531313639383036383535383136355f32303030353332363533342d47437c3031303134303039303132333137363136323533383832353530";
}

btn3.onclick=function(){
window.location.href="https://wa.me/918938870794";
}

