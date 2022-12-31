// Arrays to pull random point for the message
const destination = ['Japan', 'Hawaii', 'Mexico', 'Holland', 'Thailand', 'Canada', 'Bali', 'Carribean', 'Portugal', 'Singapore'];
const activity = ['Hiking', 'Snorkling', 'Sunbathing', 'sightseeing', 'Eating', 'Dancing', 'Thrill Seeking', ];
const duration = ['1 day', '1 week', '1 year', '2 weeks', '2 months', '3 weeks', '1 month' ];
const company = ['partner', 'kids', 'family', 'friends', 'parents', 'company'];

// random number generator to select from arrays
const randomNumber = (array) => {
    return Math.floor(Math.random() * array.length)
};

// variables for inputting to random message
let randDestination = destination[randomNumber(destination)];
let randActivity = activity[randomNumber(activity)];
let randDuration = duration[randomNumber(duration)];
let randCompany = company[randomNumber(company)];


// Random Message function
const yourNextHoliday = () => {
    console.log(`Your next holiday will be ${randActivity} in ${randDestination}. You will be going with ${randCompany} for a total of ${randDuration}`)
};
yourNextHoliday();