// const general = require('./functions') to look at later
function grab_id(arg){
    return document.getElementById(arg)
};
const holidayMessage = grab_id('holiday-message')
// random number generator to select from arrays
const randomInArray = (array) => {
    const ranNum = Math.floor(Math.random() * array.length)
    return array[ranNum]
};
const destinationList = ['Japan', 'Hawaii', 'Mexico', 'Holland', 'Thailand', 'Canada', 'Bali', 'Carribean', 'Portugal', 'Singapore'];
// each of these lists can to my knowledge be pushed to our html document. i can show you how to do this. it works similar to php except its entirely clientside.
const activityList = ['Hiking', 'Snorkling', 'Sunbathing', 'sightseeing', 'Eating', 'Dancing', 'Thrill Seeking', ];
const durationList = ['1 day', '1 week', '1 year', '2 weeks', '2 months', '3 weeks', '1 month' ];
const companyList = ['partner', 'kids', 'family', 'friends', 'parents', 'work'];


// replaced the rendom message function with an object.
const holidayTrip = {
    destination: 'None',
    activity: 'None',
    duration: 'None',
    company: 'None',
    randomiseAll(){
        // these replace the above objects in accordance to the function
        this.destination = randomInArray(destinationList)
        this.activity = randomInArray(activityList)
        this.duration = randomInArray(durationList)
        this.company = randomInArray(companyList)
    },
    userInput(){
        // user input modifictions will be made here.
    },
    readMessage(){
        return `Your next holiday will be ${this.activity} in ${this.destination}. You will be going with ${this.company} for a total of ${this.duration}`
    }
};
function click_event(button, object){
    button.addEventListener("click", function(){
        object.randomiseAll();
        object.textContent = object.readMessage();
    });
};
click_event(holidayMessage, holidayTrip);
// what im thinking is adding some inputs so people can choose length destination etc and it prints a message with a picture associated with the destination. Then add a randomise button incase they want a surprise.

// we could also calculate made up prices using the destinations activites durations and company as a formula.