'use strict';


//////////////// Greeting ////////////////////////
var name = prompt('Hello , what is your name ? ');
alert(' Nice to meet you :' + name);
console.log('name', name);


var like;

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
} else if (like == 'n') {
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
} else if (like == 'N') {
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
} else if (like == 'n') {
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

///////////////////////// Sixth Question ////////////////////
like = prompt(" Can You Guess My Birthday Month ?");

var mybdmo = 2 ; 

if (like == mybdmo)
{
    alert(' ooh my god , you do it and know my birthday ');
}else
{ 

for ( var i=0;i<4;i++)
{
    var atpt = 3-i ; 
   
    if (like < mybdmo ) 
    {
        alert(' Too Low ');
        like = prompt(" Try again , Can You Guess My Birthday Month ?" + atpt + '  ' +   ' Attempt left');
    } else if (like > mybdmo)
    {
        alert(' Too High ');
        like = prompt(" Try again , Can You Guess My Birthday Month ?" + atpt +  '  ' +'   Attempt left');
    }
    else if (like == mybdmo)
    {
        alert(' ooh my god , you do it and know my birthday ');
        i = 4 ;
    }else    
    {
        alert(' The correct Answer is 2 - Febuary  ');
    }
}
}


////////////////////////// 7th Question /////////////////////

var mark = 0;  /// to store the user mark 

var num = prompt(' Hello , You Have Six attempts to guess 6 Primes Numbers ');
var geussgame = [2, 5, 11, 17, 23, 31];  ////  prime numbers between ( 2 - 31 )
var strtonum =  parseInt(num);

for (var i = 1; i <= geussgame.length; i++) {
    var temp = 6 - i;

    
    switch (strtonum) {
        case 2:
        case 5:
        case 11:
        case 17:
        case 23:
        case 31:
            alert(' Well Done , keeping Guessing' + '  ' + temp + ' attempts left ');
            mark = mark + 1;
            num = prompt(' Hello , You Have Six attempts to guess 6 Primes Numbers ');
            break;


        default:
            alert(' Wrong guessing , try again :   ');
            num = prompt(' Hello , You Have Six attempts to guess 6 Primes Numbers ');
            break;
    }
    alert('Your mark   : ' + mark);
}
document.write(geussgame);
alert(' My primes number :   = ' + geussgame);
alert(' Your Final mark is :    ' + mark);


///////////////////////////// Array //////////////////////////

/*
var prompts = [" Do you have any pets?"];
var postReply = ['Very Nice'];
var negReply = ['Soo saaad !'] ;
like = prompt([0]);
alert (postReply[0]);
alert (negReply[0]);

var prompts = [
    [
        'Do you have any pets?' , 'Very Nice' , 'Soo saaad !'
    ]
]

var quest = prompts[0];

like = prompt(quest[])
like = like.toUpperCase();

switch (like) {
    case 'YES':
    case 'Y':
        alert(quest[0]);
        break;

    case 'NO':
    case 'N':
        alert(quest[0]);
        break;

    default:
        alert(' Wrong Answer ');
}
*/


