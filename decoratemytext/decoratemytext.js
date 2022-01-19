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
        document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
    }else{
        document.getElementById("ta").style.fontWeight = "normal";
        document.getElementById("ta").style.color = "black";
        document.getElementById("ta").style.textDecoration = "none";
        document.body.style.backgroundImage = "url('')";
    }
}

function pigLatin1(){
    var text = document.getElementById("ta").value;
    text = text.trim();
    let textArray = text.split(" ");
    var rslt = "";
    for(var i = 0; i < textArray.length; i++){
        rslt += pigLatin(textArray[i]) + " ";
    }
    rslt = rslt.trim();
    document.getElementById("ta").value = rslt;
}

function pigLatin(input){
    //var txt = document.getElementById("ta").value;
    var char = input.charAt(0);
    var rslt = "";
    if( (char == 'a') || (char == 'e') || (char == 'i') || (char == 'o') || (char == 'u')){
        rslt = input + "ay";
    }else{
        var cnsnnt = 0;
        for(var i = 0; i < input.length; i++){
            char = input.charAt(i);
            if( (char == 'a') || (char == 'e') || (char == 'i') || (char == 'o') || (char == 'u')){
                break;
        }else{
            cnsnnt++;
        }
    }
    rslt = input.substring(cnsnnt) + input.substring(0, cnsnnt) + "ay";
   }
  return rslt;
}

function malkovitch(){
    var txt = document.getElementById("ta").value;
    txt = txt.trim();
    let textArray = txt.split(" ");
    var rslt = "";
    for(var i = 0; i < textArray.length; i++){
        if(textArray[i].length >= 5){
            rslt += "Malkovitch" + " ";
        }else{
            rslt += textArray[i] + " ";
        }
    }
    rslt = rslt.trim();
    document.getElementById("ta").value = rslt;
}