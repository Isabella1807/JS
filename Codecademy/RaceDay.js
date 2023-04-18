let raceNumber = Math.floor(Math.random() * 1000);

let runnerEarlySignUp = true;
let runnerAge = 30;

if (runnerAge > 18 && runnerEarlySignUp){
    raceNumber += 1000;}


//If else
if (runnerAge > 18 && runnerEarlySignUp){
    console.log(`Runner ${raceNumber}, Your race is at 09:30am`);
} else if (runnerAge > 18 && !runnerEarlySignUp){
    console.log(`Runner ${raceNumber}, Your race is at 11:30am`)
} else if (runnerAge < 18) {
    console.log(`Runner ${raceNumber}, Your race is at 12:30am`)
} else {
    console.log("See the regristration desk.");
}

//Switch case
switch(true) {
    case (runnerAge > 18 && runnerEarlySignUp):
        console.log(`Runner ${raceNumber}, Your race is at 09:30am`);
        break;
    case (runnerAge > 18 && !runnerEarlySignUp):
        console.log(`Runner ${raceNumber}, Your race is at 11:30am`);
        break;
    case (runnerAge < 18):
        console.log(`Runner ${raceNumber}, Your race is at 12:30am`);
        break;
    default:
        console.log("See the registration desk.");
}

let walkSignal = 'Stop';
let walkMessage = 'You are allowed to walk';

console.log(walkSignal === 'Walk' ? walkMessage || "Just go" : "Don't walk");
