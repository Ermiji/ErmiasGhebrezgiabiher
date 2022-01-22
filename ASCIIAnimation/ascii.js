"use strict";
(function(){
window.onload = function () {


  var buttonStart = document.getElementById("buttonStart");
  var buttonStop = document.getElementById("buttonStop");
  document.getElementById("buttonStop").disabled = true;


  //set selected size and speed
  document.getElementById("sizeOpt").onchange= setSize;
  document.getElementById("check").onchange= setSpeed;


  buttonStart.onclick = animate;
  buttonStop.onclick = stopAnim;


}
var x=null;
var speed=250;
var tText="";
var selectedAnimate="Blank";
function animate() {
  selectedAnimate=  document.getElementById("animateOpt").value;
  let array = ANIMATIONS[selectedAnimate].split("=====");
  var i=0;
  //enable stop
  document.getElementById("buttonStop").disabled = false;
  //save typed text priore to viewing the animation
  tText= document.getElementById("textarea").value;
  
  x= setInterval(changeText, speed);
  document.getElementById("buttonStart").disabled = true;
  document.getElementById("animateOpt").disabled = true;


  function changeText() {
  
    if (i < (array.length - 1)) {
      i = i + 1;
    } else if (i === (array.length - 1)) {
      i = 0;
    }
    document.getElementById("textarea").value = array[i];
  }
}
function stopAnim(){
  clearInterval(x);
  document.getElementById("buttonStart").disabled = false;
  document.getElementById("animateOpt").disabled = false;
  document.getElementById("buttonStop").disabled = true;

  document.getElementById("textarea").value = tText;

  
}

function setSize(){
  document.getElementById("textarea").style.fontSize= document.getElementById("sizeOpt").value ;
}

function setSpeed(){
  if(document.getElementById("check").checked){
    speed=50;
  }else{
    speed=250;
  }
}

})();


// CSE 190 M, Homework 6: ASCIImation
// This file contains the ASCII animations as large strings.
//
// You can refer to them by variable names such as blank or dive, or by indexes
// into an array ANIMATIONS, such as ANIMATIONS["Bike"] or ANIMATIONS["Dive"].
//
// The former is probably more intuitive for new programmers, but the latter
// may allow you to write more elegant code by indexing using the text of the
// menu option selected in the HTML.  (See bottom of file.)
//
// (Hint: The array index you want is the same as the select box's selected value...)
//
// YOU SHOULD NOT EDIT THIS FILE IN ANY WAY.
// TO ADD YOUR CUSTOM ANIMATION, CREATE YOUR OWN FILE myanimation.js AND
// PUT YOUR CODE IN THERE.  In myanimation.js, it is legal for you to modify
// the variables that have been declared in this file.

var BLANK = "";

var CUSTOM = "";   // you could change the value of this variable in your code

var EXERCISE = "  o\n" +
  " /#\\\n" +
  " _|_\n" +
  "=====\n" +
  " \\o/\n" +
  "  #\n" +
  "_/ \\_\n";

var JUGGLER = "   o\n" +
  "   O\n" +
  " o/|\\o\n" +
  "  / \\\n" +
  "=====\n" +
  "    o\n" +
  " o_O\n" +
  "   |o\n" +
  "  / \\\n" +
  "=====\n" +
  " o   o\n" +
  "  \\O\n" +
  "   o\\\n" +
  "  / \\\n" +
  "=====\n" +
  "  o\n" +
  "  _O_o\n" +
  "  o|\n" +
  "  / \\\n";

var BIKE = "\n" +
  "   _o\n" +
  " _< \\\\_\n" +
  "(_)>(_)            .\n" +
  "=====\n" +
  "\n" +
  "     _o\n" +
  "   _< \\\\_\n" +
  "  (_)>(_)          .\n" +
  "=====\n" +
  "\n" +
  "       _o\n" +
  "     _< \\\\_\n" +
  "    (_)>(_)        .\n" +
  "=====\n" +
  "          o\n" +
  "         /\\\\_\n" +
  "       _< (_)\n" +
  "      (_)          .\n" +
  "=====\n" +
  "            o\n" +
  "           /\\\\_\n" +
  "         _< (_)\n" +
  "        (_)        .\n" +
  "=====\n" +
  "             _\n" +
  "           _ \\\\\\\\o\n" +
  "          (_)/<_\n" +
  "              (_)  .\n" +
  "\n" +
  "=====\n" +
  "               _\n" +
  "             _ \\\\\\\\o\n" +
  "            (_)/<_\n" +
  "                (_).\n" +
  "=====\n" +
  "                  _\n" +
  "                 (_)\\\\__/o\n" +
  "                   \\\\_| \\\\\n" +
  "                  .(_)\n" +
  "=====\n" +
  "                       _\n" +
  "                      (_)\n" +
  "                      _|/\' \\\\/\n" +
  "                  .  (_)\'  _\\\\o_\n" +
  "=====\n" +
  "                       _\n" +
  "                      (_)\n" +
  "                      _|/\'  \\\\/\n" +
  "                  .  (_)\'   _\\\\o_\n" +
  "=====\n" +
  "                       _\n" +
  "                      (_)\n" +
  "                      _|/\'   \\\\/\n" +
  "                  .  (_)\'    _\\\\o_\n" +
  "=====\n" +
  "                       _\n" +
  "                      (_)\n" +
  "                      _|/\'    \\\\/\n" +
  "                  .  (_)\'     _\\\\o_\n" +
  "=====\n" +
  "                       _\n" +
  "                      (_)\n" +
  "                      _|/\'    \\\\/\n" +
  "                  .  (_)\'     _\\\\_o\n" +
  "=====\n" +
  "                       _\n" +
  "                      (_)\n" +
  "                      _|/\'    \\\\/\n" +
  "                  .  (_)\'     _\\\\__o\n" +
  "=====\n" +
  "                       _\n" +
  "                      (_)\n" +
  "                      _|/\'    \\\\/\n" +
  "                  .  (_)\'     _\\\\__ o\n" +
  "=====\n" +
  "                       _\n" +
  "                      (_)\n" +
  "                      _|/\'    \\\\/\n" +
  "                  .  (_)\'     _\\\\__  o\n" +
  "=====\n" +
  "                       _\n" +
  "                      (_)\n" +
  "                      _|/\'    \\\\/\n" +
  "                  .  (_)\'     _\\\\__   o\n";

var DIVE = "  o\n" +
  " /|\\\n" +
  ",/ \\\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "..,..,,.,...,,|.,|..,.,,...,..,,,..,..,..,.,\n" +
  "=====\n" +
  "     o\n" +
  "    -|-\n" +
  "    / \\\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
  "=====\n" +
  "      \\o/\n" +
  "       |\n" +
  "      / \\\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
  "=====\n" +
  "        \\o/\n" +
  "        /\n" +
  "       / \\\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
  "=====\n" +
  "            |o__\n" +
  "            /\n" +
  "          /\\\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,.,.,.,.,.,.,|.,|..,,..,,.,.,..,,,,.,,.,.,.\n" +
  "=====\n" +
  "              o/__\n" +
  "           __/\n" +
  "             \\\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,.,.,.,.,.,.,|.,|..,,..,,.,.,..,,,,.,,.,.,.\n" +
  "=====\n" +
  "\n" +
  "                  __ o__\n" +
  "                 /)  \\\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "...,,,...,.,.,|..|.,.,...,,,.,..,.,.,,,..,..\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "                           \\)\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/    \\\n" +
  "-|----------|-|--|-|--\'    /o\\\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "....,...,...,,|,,|,.,.,.,.,.,.,.,....,,,,,..\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |           \\|\n" +
  "              |  |            \\o\n" +
  "              |  |            ( \\\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,.,,....,,...|.,|.,.,.,.,.,.,.,.,.,.,.,.,,,\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |                \\)\n" +
  "              |  |                |\n" +
  "              |  |               /o\\\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,,,...,.,,,,,|.,|.,,,.,.,,.,..,.,,....,,,.,\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |                 \\ /\n" +
  "              |  |                  |\n" +
  "              |  |                 /o\\\n" +
  ",..,.,..,,.,.,|,,|.,,,.,,.,,.,...,,..,,.,..,\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,,.,,.,,.,,.,|.,|.,,...,,.,.,..,,.,\\|.,..,.\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |                `.\' \'.\n" +
  ".,,.,,.,,.,,.,|.,|.,,...,,.,.,..,,.,`\'.,..,\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |           .--.-.--.-.---.--.\n" +
  "              |  |          (YEA, that was fun!)\n" +
  "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
  ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |           .--.-.--.-.---.--.\n" +
  "              |  |          (YEA, that was fun!)\n" +
  "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
  ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |           .--.-.--.-.---.--.\n" +
  "              |  |          (YEA, that was fun!)\n" +
  "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
  ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |           .--.-.--.-.---.--.\n" +
  "              |  |          (YEA, that was fun!)\n" +
  "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
  ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
  "=====\n" +
  "\n" +
  "\n" +
  "\n" +
  "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
  "-|----------|-|--|-|--\'\n" +
  "/            \\ \\/ /\n" +
  "              )  (\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  "              |  |\n" +
  ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n";


// can also access the animations as an associative array / hash map,
// such as ANIMATIONS["Bike"] or ANIMATIONS["Dive"]
var ANIMATIONS = [];
ANIMATIONS["Blank"] = ANIMATIONS["blank"] = ANIMATIONS["BLANK"] = "";
ANIMATIONS["Custom"] = ANIMATIONS["custom"] = ANIMATIONS["CUSTOM"] = CUSTOM;   // you could change the value of this in your code
ANIMATIONS["Exercise"] = ANIMATIONS["exercise"] = ANIMATIONS["EXERCISE"] = EXERCISE;
ANIMATIONS["Juggler"] = ANIMATIONS["juggler"] = ANIMATIONS["JUGGLER"] = JUGGLER;
ANIMATIONS["Bike"] = ANIMATIONS["bike"] = ANIMATIONS["BIKE"] = BIKE;
ANIMATIONS["Dive"] = ANIMATIONS["dive"] = ANIMATIONS["DIVE"] = DIVE;