'use strict';


//////////////// Greeting ////////////////////////
    var name = prompt('Hello , what is your name ? ');
    alert(' Nice to meet you :' + name);
    console.log('name', name);

    
var like ;

///////////////////////// First Question ////////////////////

 like = prompt(" Do you have any pets?");

like = like.toUpperCase();

if (like == 'YES' || like == 'Y') {
    alert('Very Nice');
} else if (like == 'NO' || like == 'N') {
    alert('Soo saaad !');
} else {
    alert('Wrong Answer !');
}


///////////////////////// Second Question ////////////////////
 like = prompt(" Is there one person you want to be with right now?");

like = like.toLowerCase();

if (like == 'yes') {
    alert(' ooooh , i hope to meet him/her right away');
} else if (like == 'y') {
    alert(' ooooh , i hope to meet him/her right away');
} else if (like == 'no') {
    alert(' why not ?');
} else if (like == 'n'){
    alert(' why not ?');
} else {
    alert('Wrong Answer !');
}

///////////////////////// Third Question ////////////////////
 like = prompt(" Do you have a crush on someone?");

like = like.toUpperCase();

if (like == 'YES') {
    alert('why you do that :(');
} else if (like == 'Y') {
    alert('why you do that :(');
} else if (like == 'NO') {
    alert(' be calm and kind ');
} else if (like == 'N'){
    alert(' be calm and kind ');
} else {
    alert('Wrong Answer !');
}


///////////////////////// Fourth Question ////////////////////
 like = prompt(" Do you believe in Miracles ?");

like = like.toLowerCase();

if (like == 'yes') {
    alert('God bless you ');
} else if (like == 'y') {
    alert('God bless you ');
} else if (like == 'no') {
    alert(' Think again ');
} else if (like == 'n'){
    alert(' Think again ');
} else {
    alert('Wrong Answer !');
}


///////////////////////// Fifth Question ////////////////////
 like = prompt(" Have you ever lost someone special ?");

like = like.toUpperCase();

switch (like) {
    case 'YES':
    case 'Y':
        alert(' I\'m sorry for your lost'); /// scape 
        break;

    case 'NO':
    case 'N':
        alert(' I hope not to lose  ');
        break;

    default:
        alert(' Wrong Answer ');
}

/*
if (Like == 'YES') {
    alert(' I\'m sorry for your lost'); /// scape
} else if (Like == 'Y') {
    alert(' I\'m sorry for your lost'); /// scape
} else if (Like == 'NO') {
    alert(' I hope not to lose  ');
} else if (Like == 'N'){
    alert(' I hope not to lose  ');
} else {
    alert('Wrong Answer !');
}
*/


