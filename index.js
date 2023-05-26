let i;
for(i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        // detecting button pressed
        let buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
        doColor(buttonInnerHTML);
    });

}
// detecting keybord pressed
document.addEventListener("keydown", function(event)
{
      makeSound(event.key);
      addAnimation(event.key);
      doColor(event.key);
    });

function makeSound(key)
{
    switch(key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3'); 
            audio.play();
        break;

        case "a":
            var audio = new Audio('sounds/tom-2.mp3'); 
            audio.play();
        break;

        case "s":
            var audio = new Audio('sounds/tom-3.mp3'); 
            audio.play();
        break;

        case "d":
            var audio = new Audio('sounds/tom-4.mp3'); 
            audio.play();
        break;
        
        case "j":
            var audio = new Audio('sounds/snare.mp3'); 
            audio.play();
        break;

        case "k":
            var audio = new Audio('sounds/kick-bass.mp3'); 
            audio.play();
        break;

        case "l":
            var audio = new Audio('sounds/crash.mp3'); 
            audio.play();
        break;

        default:
            colsole.log(key);
    }
}

function addAnimation(currKey)
{
    let actKey=document.querySelector("."+currKey);
    actKey.classList.add("pressed");
    setTimeout(function()
    {
        actKey.classList.remove("pressed")
    },100);
}

function doColor(curKey)
{
    if(document.querySelector("."+curKey).style.color==="white")
    document.querySelector("."+curKey).style.color="red";
    else
    document.querySelector("."+curKey).style.color="white";
}