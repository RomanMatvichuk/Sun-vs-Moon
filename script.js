document.getElementById("sun").onclick = function(){
    document.getElementById("sun").style.display = "none";
    document.getElementById("moon").style.display = "block";
}

document.getElementById("moon").onclick = function(){
    document.getElementById("moon").style.display = "none";
    document.getElementById("sun").style.display = "block";
}