//get element form html 


var showData = document.getElementById("showData");
var add = document.getElementById("add");

function addition(){
    var num1 = 600;
    var num2 = 50;
    var total = num1 + num2;

    add.innerHTML = total;
}

var sub = document.getElementById("sub");

function subtraction(){
    var num1 = 600;
    var num2 = 50;
    var total = num1 - num2;

    sub.innerHTML = total;
}

var mul = document.getElementById("mul");

function multiply(){
    var num1 = 600;
    var num2 = 50;
    var total = num1 * num2;

    mul.innerHTML = total;
}

var div = document.getElementById("div");

function division(){
    var num1 = 600;
    var num2 = 50;
    var total = num1 / num2;

    div.innerHTML = total;
}

var mod = document.getElementById("mod");

function modulus(){
    var num1 = 600;
    var num2 = 50;
    var total = num1 % num2;

    mod.innerHTML = total;
}

var rou = document.getElementById("rou");

function roundHobe(){
    var num1 = 50.5;
    var rounded = Math.round(num1);

    rou.innerHTML = rounded;
}

var cei = document.getElementById("cei");

function ceilHobe(){
    var num1 = 50.5;
    var ceiled = Math.ceil(num1);

    cei.innerHTML = ceiled;
}

var flo = document.getElementById("flo");

function floorHobe(){
    var num1 = 50.5;
    var floored = Math.floor(num1);

    flo.innerHTML = floored;
}