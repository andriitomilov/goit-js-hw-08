import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onTimeUpdateReloadPage = e => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(e.seconds));
}

if (localStorage.getItem(STORAGE_KEY)) {
  player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)));
}

player.on('timeupdate', throttle(onTimeUpdateReloadPage, 1000));

