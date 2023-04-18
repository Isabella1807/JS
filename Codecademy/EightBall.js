let userName = 'Bob';

//Ternary expression
userName ? console.log(`Hello, ${userName}!`)
    : console.log('Hello!');

let userQuestion = 'is this right?';
console.log(userName + ' asked this question: ' + userQuestion);

//math.random returns a number between 0 and 8
//math.floor makes sure we only get whole numbers
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

//Switch statement instead of else if
switch (randomNumber) {
    case 1:
        eightBall = 'It is certain';
        break;
    case 2:
        eightBall = 'It is decidedly so';
        break;
    case 3:
        eightBall = 'Reply hazy try again';
        break;
    case 4:
        eightBall = 'Cannot predict now';
        break;
    case 5:
        eightBall = 'Do not count on it';
        break;
    case 6:
        eightBall = 'My sources say no';
        break;
    case 7:
        eightBall = 'Outlook not so good';
        break;
    case 8:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = 'BLEUGH';
}
console.log('The magic eight ball says: ' + eightBall);