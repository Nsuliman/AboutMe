'use strict';


//////////////// Greeting ////////////////////////
    var name = prompt('Hello , what is your name ? ');
    alert(' Nice to meet you :' + name);
    console.log('name', name);

    
var Like ;

///////////////////////// First Question ////////////////////

 Like = prompt(" Do you have any pets?");

Like = Like.toUpperCase();

if (Like == 'YES') {
    alert('Very Nice');
} else if (Like == 'Y') {
    alert('Very Nice');
} else if (Like == 'NO') {
    alert('Soo saaad !');
} else if (Like == 'N'){
    alert('Soo saaad !');
} else {
    alert('Wrong Answer !');
}


///////////////////////// Second Question ////////////////////
 Like = prompt(" Is there one person you want to be with right now?");

Like = Like.toLowerCase();

if (Like == 'yes') {
    alert(' ooooh , i hope to meet him/her right away');
} else if (Like == 'y') {
    alert(' ooooh , i hope to meet him/her right away');
} else if (Like == 'no') {
    alert(' why not ?');
} else if (Like == 'n'){
    alert(' why not ?');
} else {
    alert('Wrong Answer !');
}

///////////////////////// Third Question ////////////////////
 Like = prompt(" Do you have a crush on someone?");

Like = Like.toUpperCase();

if (Like == 'YES') {
    alert('why you do that :(');
} else if (Like == 'Y') {
    alert('why you do that :(');
} else if (Like == 'NO') {
    alert(' be calm and kind ');
} else if (Like == 'N'){
    alert(' be calm and kind ');
} else {
    alert('Wrong Answer !');
}


///////////////////////// Fourth Question ////////////////////
 Like = prompt(" Do you believe in Miracles ?");

Like = Like.toLowerCase();

if (Like == 'yes') {
    alert('God bless you ');
} else if (Like == 'y') {
    alert('God bless you ');
} else if (Like == 'no') {
    alert(' Think again ');
} else if (Like == 'n'){
    alert(' Think again ');
} else {
    alert('Wrong Answer !');
}


///////////////////////// Fifth Question ////////////////////
 Like = prompt(" Have you ever lost someone special ?");

Like = Like.toUpperCase();

switch (Like) {
    case 'YES':
    case 'Y':
        alert(' I\'m sorry for your lost'); /// scape 
        break;

    case 'NO':
    case 'N':
        alert(' I hope not to loose  ');
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
    alert(' I hope not to loose  ');
} else if (Like == 'N'){
    alert(' I hope not to loose  ');
} else {
    alert('Wrong Answer !');
}
*/


