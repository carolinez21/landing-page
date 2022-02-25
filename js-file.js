function off(){
    document.getElementById("overlay").style.display = "none";
}

var button = document.getElementById("btn");

button.addEventListener('click', function(){
    document.getElementById("overlay").style.display = "block";
    setTimeout(off, 2000);
});
