import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time'))
);

player.on(
  'timeupdate',
  throttle(function (e) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
  }, 1000)
);
