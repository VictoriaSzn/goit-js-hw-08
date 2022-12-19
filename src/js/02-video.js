import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vplayer = document.querySelector('#vimeo-player');

const player = new Player(vplayer);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay ({seconds}){
    localStorage.setItem('videoplayer-current-time', seconds);
};

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));