function notifyingMsg(){
 //   alert("Hello, World!");
 //   document.getElementById("ta").style.fontSize = "24pt";
    var element = document.getElementById("ta");
    var style = window.getComputedStyle(element, null).getPropertyValue("font-size");
    var fontSize = parseInt(style);
    element.style.fontSize = (fontSize + 2) + "pt";
}

function timeInterval(){
    var id = setInterval(notifyingMsg, 500);
    //setTimeout(clearInterval, 5000, id);
}

function verifyMsg(){
    if(document.getElementById("chkb").checked){
        document.getElementById("ta").style.fontWeight = "bold";
        document.getElementById("ta").style.color = "green";
        document.getElementById("ta").style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('')";
    }else{
        document.getElementById("ta").style.fontWeight = "normal";
        document.getElementById("ta").style.color = "black";
        document.getElementById("ta").style.textDecoration = "none";
        document.body.style.backgroundImage = "url('')";
    }
}