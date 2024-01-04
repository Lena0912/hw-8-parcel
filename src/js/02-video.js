import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const LOCAL_KEY = 'videoplayer-current-time';

function onPlay (data) {
    const seconds = data.seconds;
    localStorage.setItem(LOCAL_KEY, seconds);
}
player.on('timeupdate', throttle(onPlay, 1000),
);

const savedTime = localStorage.getItem(LOCAL_KEY) || 0;
player.setCurrentTime(savedTime);