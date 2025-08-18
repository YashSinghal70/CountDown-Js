function countDown(){

let futureDate = new Date("september 30, 2025, 12:00:00").getTime();
// new Date("August 20, 2025, 12:00:00") → creates a Date object for Aug 20, 2025, 12:00:00
// .getTime() → returns the number of milliseconds since 1 Jan 1970  to that date

let currentDate=new Date().getTime();
// new Date() → current date & time
// .getTime() → milliseconds since 1 Jan 1970 UTC to *now*
let diffdate=futureDate-currentDate;// Difference in milliseconds between future date and now

// Convert milliseconds to days
// 1000 ms = 1 sec, 60 sec = 1 min, 60 min = 1 hr, 24 hr = 1 day
let days=Math.floor(diffdate / (1000*60*60*24)); // 60 Second * 60 Minutes * 24 Hours => Multiply with 1000 to covert in millseconds
console.log(days);
let hours= Math.floor(diffdate % (1000*60*60*24) /(1000*60*60)) // diffdate modulus (Remaing minutes)(60 Second * 60 Minutes * 24 Hours => Multiply with 1000 to covert in millseconds then divide with 1000 * 60 Second * 60 Minutes to get hours)
console.log(hours);
let minutes= Math.floor(diffdate % (1000*60*60) /(1000*60))// diffdate modulus (Remaing minutes)(60 Second * 60 Minutes => Multiply with 1000 to covert in millseconds then divide with 1000 * 60 Second  to get minutes)
console.log(minutes);
let seconds= Math.floor(diffdate % (1000*60) /(1000))// diffdate modulus (Remaing minutes)(60 Second => Multiply with 1000 to covert in millseconds then divide with 1000 to get seconds)
console.log(seconds);

document.querySelector(".days").innerHTML=days
document.querySelector(".hours").innerHTML=hours
document.querySelector(".minutes").innerHTML=minutes
document.querySelector(".seconds").innerHTML=seconds
}
// countdown to show instantly when the page loads (instead of waiting 1 sec)
countDown(); // run immediately

setInterval(() =>{
    countDown();
},1000)

// 1day=24hr
// 1hr=60min
// 60min=60*60ec(3600sec)