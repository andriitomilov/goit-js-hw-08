import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const currentTime = {
  'videoplayer-current-time': 0,
};

player.getCurrentTime(currentTime['videoplayer-current-time']);

player.on(
  'timeupdate',
  throttle(function (e) {
    currentTime['videoplayer-current-time'] = e.seconds;
    console.log(currentTime);
  }, 1000)
);
