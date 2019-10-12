'use strict';


var mark = 0;  /// to store the user mark 
var person = ' ' ;
//////////////// Greeting ////////////////////////

var name = prompt('Hello , what is your name ? ');
var gender = prompt('what is your gender ? Male or Female ');

if (gender == 'Male' || gender == 'male' || gender == 'm' || gender == 'M' )
{
    alert(' Nice to meet you Mr :  ' + name);
    person = ' Nice to meet you Mr :' ;

}else if (gender == 'Female' || gender == 'female' || gender == 'f' || gender== 'F' )
{
alert(' Nice to meet you Miss :  ' + name);
person = ' Nice to meet you Miss :' ;
}else {

    alert(' Nice to meet you :  ' + name);
    person = ' Nice to meet you :' ;
}


console.log('name', name);


var like;
var CorrectAnswer ;
var wrongAnswer ;
var Question ;


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

