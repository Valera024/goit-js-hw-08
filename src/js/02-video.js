import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe)

const callback = throttle(function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000);

player.on("timeupdate", callback);

const savedTime = localStorage.getItem("videoplayer-current-time") || 0;

player.setCurrentTime(parseFloat(savedTime)).then(function (seconds){});
