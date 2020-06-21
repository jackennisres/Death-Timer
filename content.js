

console.log(location.href);

sites = ["linkedin","reddit","twitch","instagram","twitter","facebook","tumblr","tube","xxx","porn","chat","sin","booty","butt","boob","slut","form","amazon","netflix","hulu"];
function isInList(currentWebsite){
  for(x in sites){
    console.log(x + " : " + location.href)
    if(currentWebsite.toLowerCase().includes(sites[x])){
      return true;
    }
  }
  return false;
}



if(isInList(location.href)){

  let message = "";

  console.log("Death Timer Running...");

  let body = document.getElementsByTagName("body")[0];

  let div = document.createElement("DIV");

  div.setAttribute("CLASS", "timer");

  let text = document.createElement("P1");
  text.setAttribute("ID", "myText");
  text.setAttribute("CLASS", "timerText");

  div.appendChild(text);


  body.appendChild(div);

  var websites = ['linkedin']
  var endDate = new Date("Oct 07, 2085 16:37:52").getTime();

  var myfunc = setInterval(function() {
  // code goes here
    var now = new Date().getTime();

    var timeLeftSeconds = parseInt((endDate - now)/1000);
    var timeLeftMinutes = parseInt(timeLeftSeconds/60);
    var timeLeftHours = parseInt(timeLeftMinutes/60);
    var timeLeftDays = parseInt(timeLeftHours/24);
    var timeLeftYears = parseInt(timeLeftDays/365);

    let secondsLeft = timeLeftSeconds;
    var yearsLeft = timeLeftYears;

    secondsLeft -= (yearsLeft * 365 * 24 * 60 * 60)

    var monthsLeft = parseInt(secondsLeft/(60*60*24*30))

    secondsLeft -= (monthsLeft * 60 * 60 * 24 * 30)

    var daysLeft = parseInt(secondsLeft/(60*60*24))

    secondsLeft -= (daysLeft * 60 * 60 * 24)

    var hoursLeft = parseInt(secondsLeft/(60*60))

    secondsLeft -= (hoursLeft * 60 * 60)

    var minutesLeft = parseInt(secondsLeft/(60))

    secondsLeft -= (minutesLeft * 60)

    message = (yearsLeft.toString() + "y, " + monthsLeft.toString() + "mo, " + daysLeft.toString() + "d, " + hoursLeft.toString() + "h, " + minutesLeft.toString() + "mi, " + secondsLeft.toString() + "s")

    console.log(message)

    document.getElementById("myText").innerText = message;

  }, 1000)
}
