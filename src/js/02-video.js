import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vplayer = document.querySelector('#vimeo-player');

const player = new Player(vplayer);
checkCurrentTime();
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay ({seconds}){
    localStorage.setItem('videoplayer-current-time', seconds);
};

function checkCurrentTime(){
    if (!localStorage.getItem('videoplayer-current-time')) {
        return;
}
 
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}