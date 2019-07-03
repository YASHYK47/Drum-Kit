document.querySelectorAll(".drum").forEach(item=>{
    item.addEventListener("click",function(){
        var key=this.innerHTML;
        makeSound(key);
});
});

document.addEventListener("keypress",function(item){
    makeSound(item.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
            break;
        case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
            break;
        case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
            break;
        case "j":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
            break;
        case "k":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
            break;
        case "l":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
            break;
        default:console.log(key);
            break;
    }
    buttonAnimation(key);
}

function buttonAnimation(key){
    var btn=document.querySelector("."+key);
    btn.classList.add("pressed");
    setTimeout(function(){
        btn.classList.remove("pressed")
    },100);
}