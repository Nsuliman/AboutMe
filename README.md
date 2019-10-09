# AboutMe

## Lab 03 : How to build geussing game using array and switch . 

## my project about which month it's my birthday "2" and we asked the user to enter 6 attempts to guess my month and calculate the correct attempts that user entered correctly . 

### I have a lot of fun by doing it and learned a very good skills . 



# On my code I was the navigator and the changes as below : 

//////////////// Greeting ////////////////////////

var name = prompt('Hello , what is your name ? ');
alert(' Nice to meet you :' + name);
console.log('name', name);


var like;
var mark = 0;  /// to store the user mark 

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

# On Muna code  I was the observer and the changes as below : 

var username=prompt('Hi ,what is your name?');
alert("welcome "+ username );
var question;
var positive;
var negative;
var score=0;

function fivequestions( question, positive, negative ){
var reply = prompt( question );
reply = reply.toLowerCase();
switch( reply )
{
    case 'yes':
    case 'y' :
              alert( positive);
              score=score+1;
              break;

    case 'no':
    case 'n':
             alert( negative);
    default: 
              alert('ooooops');
        
}

}
fivequestions( 'are you a computer engineer?', 'me too','ooooops' ); 
fivequestions( 'are you studied in jordan?', 'me too','I am studied in jordan' ); 
fivequestions( 'Is your age 32?','Iam 32','Iam not ,I am 32' ); 
fivequestions( 'Do like using a computer?', 'me toooo','why not!!!!!!!'); 
fivequestions( 'do you know what is JS?','Great','It is Java Script'); 

//q6

function q6(){
    for (var i = 0; i < 4; i++) {
        var inputGuess = prompt('How many sister(s) I have?');
        if (inputGuess > 3) {
            alert('tooo high');
        }
        else if (inputGuess < 3) {
            alert('tooo low');
        } else if (inputGuess = 3) {
            alert('corecct answer');
            score=score+1;
            break;
        }
    }
}
 q6('done');*/

//q7
function q7(){
    var myAnswer=['roma','florance','madrid','egypt','paris']
for (var i = 0; i < 5; i++) { 
var userGuess = prompt('What is places i want to visit?'); 
switch(userGuess) {
    case myAnswer[0]: 
    case myAnswer[1]:   
    case myAnswer[2]:     
    case myAnswer[3]:    
    case myAnswer[4]:
            alert(' correct');
            i=5;
            score=score+1;
            break;
    default:
        alert('not correct');
    break;}

}
alert('your score is'+ score);

}
q7('nasa');


# On Naseem code  I was the observer and the changes as below : 

'use strict';

var score = 0;
var msg = prompt('What is your name?');
alert('hello' + ' ' + msg);
console.log('hello', msg);


///////////////////////////// Function for the total 5 questions /////////////////////
function Questions55() {

    var questions = [

        ['Do you know who is Naseem?', 'welecom1!', 'try to know some thing about Naseem !'],
        ['Do you know where Naseem live?', 'great', 'that not good !'],
        ['Do you know my specilaization ?', 'I am happy to hear that.', 'that is not problem!'],
        ['Do you know naseem current job ?', 'you are close!', 'don\'t worry!. come on'],
        ['Do you know any things about Naseem phobia ?', 'she has aphobia from reptile and insect!', 'This is good for you!'],

    ]  /// end of array

    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[i];
        var currentPrompt = currentQuestion[0]
        var userResponse = prompt(currentPrompt)
        userResponse = userResponse.toLowerCase();
        var currentPositiveReply = currentQuestion[1];
        var currentNegativeReply = currentQuestion[2];
        switch (userResponse) {
            case 'yes':
                alert(currentPositiveReply);
                score = score + 1 ;
                break;
            case 'no':
                alert(currentNegativeReply);
                break;
            default:
                alert(currentNegativeReply);

        } // closing switch
    } // closing for loop
} // closing function 

//////////////////////////// Function for 6th question /////////////////

function Question6() {
    
    for (var j = 1; j < 5; j++) {
        var ansewr = prompt('Gusse Naseem univeristy grade?! ');
        if (ansewr > 80) {
            alert(' your ansewr is too high ');
        } else if (ansewr < 80) {
            alert(' your ansewr is too low');
        } else if (ansewr == 80) {
            alert('that is it');
            score = score + 1 ;
            j = 5;
        }
    } // closing for loop     
} // closing function


function Question7() {
    
    var favoritedishes = ['see food', 'mansaf ', 'fettuccin', 'burger', 'tabola', 'green salad'];

for (var k = 0; k < 6; k++) {
    var favoritefood = prompt('can you gusse some of my faverite dishes?');
    favoritefood = favoritefood.toLowerCase();

    for (var j = 0; j < 6; j++) {
        if (favoritefood === favoritedishes[k]) {
            alert(' yes this is one of my favorite dishes!');
            score = score + 1 ;
        } // closing if statement 
    } // closing for loop ( inner ) 
} // closing for loop ( outer ) 
} // closing function 


Questions55(' 5 questions ');
Question6(' 6th question ');
Question7(' 7th question ');

console.log(score);
alert(' your score =' + ' ' + score);
alert('Thank you for searching about me' + ' ' + msg);



