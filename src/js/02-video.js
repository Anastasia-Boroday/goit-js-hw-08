import Player from "@vimeo/player";
import throttle from "lodash.throttle";


const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const CurrentTime = localStorage.getItem(LOCALSTORAGE_KEY)
console.log(LOCALSTORAGE_KEY);
const onPlay = function (data) {
  const timeUpdate = data.seconds;
  console.log(timeUpdate);
  localStorage.setItem(LOCALSTORAGE_KEY, timeUpdate);
}

player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(CurrentTime).then(function(seconds) {
  
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          break;
      default:
          break;
  }
});

