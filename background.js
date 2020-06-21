  let audio = new Audio('ekgsound.mp3');
  audio.volume = .3

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

var myfunc = setInterval(function() {
  if(isInList(location.href)){
    audio.play();
  }
},1000);
