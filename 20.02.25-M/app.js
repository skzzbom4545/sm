var followElement = document.getElementById("follow");
document.addEventListener("mousemove", function (event){
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    
    followElement.style.left = mouseX - followElement.offsetWidth / 2 + 'px';
    followElement.style.top = mouseY - followElement.offsetHeight / 2 + 'px';
});


  