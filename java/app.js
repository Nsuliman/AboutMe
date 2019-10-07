'use strict';
/*
var love = promt('');


love = love.tolowercase();

if (love == 'yes') {
    alert('any msg');
} else if (love == 'y') {
    alert('any msg');
} else if (love == 'no') {
    alert('any msg');
}
{else if (love == 'n') {
}
else {
    alret('how odd');
}*/


////////////////////////// Function Greeting //////////////////////////////
function createGreeting() {
    // input
    //var today = new Date();
    var hournow = prompt(" Please enter what is the time now : ");
    //var hourNow = today.getHours();
    var greeting;
    // processing:
    if (hournow > 18) {
        greeting = 'Good evening, Mam/Sir!';
    } else if (hournow >= 12) {
        greeting = 'Good afternoon, Mam/Sir!';
    } else if (hournow >= 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome!';
    }
    //output:
    return greeting;
}

/*switch ()
{
case 'yes':
alert ('');
break; 
case 'y':
alert ('');
break;
default:
alert ('');
}

case 'yes':
case 'y' :
alert ('') ;


var fruits = ['apple','cucamber','banana'];*/


