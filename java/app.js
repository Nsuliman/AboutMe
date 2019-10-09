'use strict';


//////////////// Greeting ////////////////////////

var name = prompt('Hello , what is your name ? ');
alert(' Nice to meet you :' + name);
console.log('name', name);


var like;
var mark = 0;  /// to store the user mark 

var CorrectAnswer ;
var wrongAnswer ;
var Question ;
/*

function AllQuestion( Question , CorrectAnswer, WrongAnswer) {
    
    var Reply = prompt(Question);
    Reply = Reply.toLowerCase();
    if (Reply == "yes" || Reply == 'y')
    {
        alert (CorrectAnswer);
        mark = mark + 1 ;
        alert(' Your Mark is :    '  + mark );
    }else 
    {
        if (Reply == "no" || Reply == 'n')
        {
            alert (WrongAnswer);

        }
    }
}
AllQuestion ('Do you have any pets?', 'Very Nice' , 'Soo saaad !' );
AllQuestion ('Is there one person you want to be with right now?', 'ooooh , i hope to meet him/her right away' , 'why not ?' );
AllQuestion ('Do you have a crush on someone?', 'why you do that :(' , 'be calm and kind' );
AllQuestion (' Do you believe in Miracles ?', 'God bless you' , 'Think again' );
AllQuestion ('Have you ever lost someone special ?', 'I\'m sorry for your lost' , 'I hope not to lose' );


///////////////////////// Sixth Question ////////////////////
function question6(){
    like = prompt(" Can You Guess My Birthday Month ?");
    var mybdmo = 2 ;
    var correctAnswer =' ooh my god , you do it and know my birthday ';
    var wrongAnswer =" Try again , Can You Guess My Birthday Month ?";
    if (like == mybdmo)
{
    alert(correctAnswer);
    mark = mark + 1;
    alert('Your mark   : ' + mark);

}else
{

for ( var i=0;i<4;i++)
{
    var atpt = 3-i ;

    if (like < mybdmo )
    {
        alert(' Too Low ');
        like = prompt(wrongAnswer +'  ' + atpt + '  ' +   ' Attempt left');
    } else if (like > mybdmo)
    {
        alert(' Too High ');
        like = prompt(wrongAnswer +'  '+ atpt +  '  ' +'   Attempt left');
    }
    else if (like == mybdmo)
    {
        alert(correctAnswer);
        mark = mark + 1;
        alert('Your mark   : ' + mark);
        i = 4 ;
    }else
    {
        alert(' The correct Answer is 2 - Febuary  ');
    }
}
}

}  // end of the function 

*/
////////////////////////// 7th Question /////////////////////
function question7(){
    var num = prompt(' Hello , You Have Six attempts to guess 6 Primes Numbers between 2-31 ');
    var geussgame = [2, 5, 11, 17, 23, 31];  ////  prime numbers between ( 2 - 31 )

    // var strtonum =  parseInt(num);
    for (var i = 1; i <= geussgame.length; i++) {
        var temp = 6 - i;
        switch (num) {
            case '2' :
            case '5' :
            case '11' :
            case '17' :
            case '23' :
            case '31' :
                alert(' Well Done , keeping Guessing' + '  ' + temp + ' attempts left ');
            mark = mark + 1;
            alert('Your mark   : ' + mark);
            num = prompt(' Hello , You Have Six attempts to guess 6 Primes Numbers between 2-31');
            break;

        default:
            alert(' Wrong guessing , try again :   ');
            num = prompt(' Hello , You Have Six attempts to guess 6 Primes Numbers between 2-31');
            break;
        }
        alert('Your mark   : ' + mark);
    }
    document.write(' The primes numbers are :    ' + geussgame);
    alert(' My primes number :   = ' + geussgame);
    alert(' Your Final mark is :    ' + mark)
    
}


/*
///////////////////////// First Question ////////////////////
function question1() {
    like = prompt(" Do you have any pets?");
    like = like.toUpperCase();
    var yesQuestion1 = 'Very Nice';
    var noQuestion1 = 'Soo saaad !';
    

    if (like == 'YES' || like == 'Y') {
        alert(yesQuestion1);
        mark = mark + 1;
        alert('Your mark   : ' + mark);
    } else if (like == 'NO' || like == 'N') {
        alert(noQuestion1);
    } else {
        alert(wrongAnswer);
    }
}

//console.log(yesQuestion1);


///////////////////////// Second Question ////////////////////
function question2() {
    like = prompt(" Is there one person you want to be with right now?");
    like = like.toLowerCase();
    var yesQuestion2 =' ooooh , i hope to meet him/her right away';
    var noQuestion2 = ' why not ?';
    if (like == 'yes') {
        alert( yesQuestion2);
        mark = mark + 1;
        alert('Your mark   : ' + mark);
    
    } else if (like == 'y') {
        alert( yesQuestion2);
        mark = mark + 1;
        alert('Your mark   : ' + mark);
    
    } else if (like == 'no') {
        alert(noQuestion2);
    } else if (like == 'n') {
        alert(noQuestion2);
    } else {
        alert(wrongAnswer);
    }
}




///////////////////////// Third Question ////////////////////

function question3() {

    like = prompt(" Do you have a crush on someone?");
    like = like.toUpperCase();
    var yesQuestion3 ='why you do that :(';
    var noQuestion3 = ' be calm and kind ';
    
    if (like == 'YES') {
        alert(yesQuestion3);
        mark = mark + 1;
        alert('Your mark   : ' + mark);
    
    } else if (like == 'Y') {
        alert(yesQuestion3);
        mark = mark + 1;
        alert('Your mark   : ' + mark);
    
    } else if (like == 'NO') {
        alert(noQuestion3);
    } else if (like == 'N') {
        alert(noQuestion3);
    } else {
        alert(wrongAnswer);
    }
    
}



///////////////////////// Fourth Question ////////////////////

function question4() {

    like = prompt(" Do you believe in Miracles ?");
    like = like.toLowerCase();
    var yesQuestion4 = 'God bless you ' ;
    var noQuestion4 = ' Think again ';
    
    if (like == 'yes') {
        alert(yesQuestion4);
        mark = mark + 1;
        alert('Your mark   : ' + mark);
    
    } else if (like == 'y') {
        alert(yesQuestion4);
        mark = mark + 1;
        alert('Your mark   : ' + mark);
    
    } else if (like == 'no') {
        alert(noQuestion4);
    } else if (like == 'n') {
        alert(noQuestion4);
    } else {
        alert(wrongAnswer);
    }
}




///////////////////////// Fifth Question ////////////////////
function question5() {

    like = prompt(" Have you ever lost someone special ?");
    like = like.toUpperCase();
    
    var yesQuestion5 = 'I\'m sorry for your lost';
    var noQuestion5 = ' I hope not to lose  ';
    
    switch (like) {
        case 'YES':
        case 'Y':
            alert(yesQuestion5); /// scape
            mark = mark + 1;
            alert('Your mark   : ' + mark);
    
            break;
    
        case 'NO':
        case 'N':
            alert(noQuestion5);
            break;
    
        default:
            alert(wrongAnswer);
    }
}
*/






/*
////////////////////////// 7th Question /////////////////////


var num = prompt(' Hello , You Have Six attempts to guess 6 Primes Numbers between 2-31 ');
var geussgame = [2, 5, 11, 17, 23, 31];  ////  prime numbers between ( 2 - 31 )

// var strtonum =  parseInt(num);

for (var i = 1; i <= geussgame.length; i++) {
    var temp = 6 - i;

    switch (num) {
        case '2' :
        case '5' :
        case '11' :
        case '17' :
        case '23' :
        case '31' :
            alert(' Well Done , keeping Guessing' + '  ' + temp + ' attempts left ');
            mark = mark + 1;
            alert('Your mark   : ' + mark);
            num = prompt(' Hello , You Have Six attempts to guess 6 Primes Numbers between 2-31');
            break;


        default:
            alert(' Wrong guessing , try again :   ');
            num = prompt(' Hello , You Have Six attempts to guess 6 Primes Numbers between 2-31');
            break;
    }
    alert('Your mark   : ' + mark);
}
document.write(' The primes numbers are :    ' + geussgame);
alert(' My primes number :   = ' + geussgame);
alert(' Your Final mark is :    ' + mark);

*/
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


