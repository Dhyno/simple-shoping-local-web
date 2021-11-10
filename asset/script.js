let transparent=document.querySelectorAll(".to-transparent");
let list=document.querySelector(".list");

for(let i=0; i<transparent.length; i++){
    transparent[i].addEventListener("mouseenter", function(){
        transparent[i].classList.add("active");
    });
    transparent[i].addEventListener("mouseleave", function(){
        transparent[i].classList.remove("active");
    });
}


let btn_login=document.querySelectorAll(".log-in");
let _modal=document.querySelector(".modal-box");
let modal_=document.getElementById("myModal");
let close=document.querySelector(".modal-content #close");

for(let i=0; i<btn_login.length; i++){
    btn_login[i].addEventListener("click",function(){
        _modal.style.display='flex';
    });
}

window.addEventListener("click", function(e){
    if(e.target==myModal){
        modal_.style.display='none';
    }
});

close.addEventListener("click",function(){
    modal_.style.display='none';
});
