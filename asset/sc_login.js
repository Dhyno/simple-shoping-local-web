let bar_span=document.querySelectorAll(".image span");
let image=document.querySelector(".image");
let burger=document.querySelector(".image ul");
let click_burger=document.querySelector(".image .menu");

bar_span[1].classList.toggle("change");
bar_span.forEach(function(e,i){
    setInterval(() => {
        e.classList.toggle("change");
        if(bar_span[0].classList.contains("change")){
            image.style.backgroundImage="url('asset/image/bg2.png')";
        }
        else{
            image.style.backgroundImage="url('asset/image/bg1.png')";
        }
    }, 4000);
});

click_burger.addEventListener('click',function(){
    click_burger.classList.toggle("active");
    if(click_burger.classList.contains("active")){
        burger.style.opacity="1";
    }
    else{
        burger.style.opacity="0";
    }
});

