document.getElementById("pic").onclick = function(){
    
    var pic = document.getElementById("pic").getAttribute("src");
    
    switch (pic){

        case "images/moon.jpg":
            document.getElementById("pic").setAttribute("src", "images/sun.jpg")
            break;
        case "images/sun.jpg":
            document.getElementById("pic").setAttribute("src", "images/moon.jpg")
            break;
            
    }
}