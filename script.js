fetch("/nav.html")
.then(response => response.text())
.then(data => {

document.getElementById("nav").innerHTML = data;

/* NAV load hone ke baad code run hoga */
initNav();

})
.catch(error => console.error("Nav load error:", error));

function initNav(){

let isOpen = false;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const click = document.getElementById("click");

if(!click) return;

click.addEventListener("click", function(){

if (!isOpen) {

btn1.classList.remove("hidden");
btn2.classList.remove("hidden");
btn3.classList.remove("hidden");

setTimeout(()=>{
btn1.classList.add("visible");
btn2.classList.add("visible");
btn3.classList.add("visible");
},50);

isOpen = true;

}else{

btn1.classList.remove("visible");
btn2.classList.remove("visible");
btn3.classList.remove("visible");

setTimeout(()=>{
btn1.classList.add("hidden");
btn2.classList.add("hidden");
btn3.classList.add("hidden");
},300);

isOpen = false;

}

});

btn1.onclick = tele;
btn2.onclick = arattai;
btn3.onclick = whats;

}

function whats(){
window.location.href="https://wa.me/918938870794";
}

function tele(){
window.location.href="https://t.me/sabkacode";
}

function arattai(){
window.location.href="https://chat.arattai.in/groups/n43545f313238383531313639383036383535383136355f32303030353332363533342d47437c3031303134303039303132333137363136323533383832353530";
}


// Show popup on load
window.onload = function() {
    setTimeout(() => {
        document.getElementById("popup").classList.add("active");
    }, 500); // 0.5 sec delay
}

// Close button
document.getElementById("closeBtn").onclick = function() {
    document.getElementById("popup").classList.remove("active");
}

// Close on outside click
document.getElementById("popup").onclick = function(e) {
    if(e.target === this) {
        this.classList.remove("active");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("closeBtn").onclick = function() {
        document.getElementById("popup").classList.remove("active");
    };
});
