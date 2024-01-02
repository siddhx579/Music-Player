const image = document.getElementById('cover'); 
const title = document.getElementById('music-title');
const artist = document.getElementById('music-artist'); const currentTimeEl = document.getElementById('current-time'); 
const durationEl = document.getElementById('duration'); 
const progress = document.getElementById('progress'); 
const playerProgress = document.getElementById('player-progress'); 
const prevBtn = document.getElementById('prev'); 
const playBtn = document.getElementById('play'); 
const nextBtn = document.getElementById('next'); 
const background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'assets/1.mp3', 
        displayName: 'The Charmer\'s Call',
        cover: 'assets/1.jpg',
        artist: 'Hanu Dixit',
    },
    {
        path: 'assets/2.mp3', 
        displayName: 'You Will Never See Me Coming',
        cover: 'assets/2.jpg',
        artist: 'NEFFEX',
    },
    {
        path: 'assets/3.mp3', 
        displayName: 'Intellect',
        cover: 'assets/3.jpg',
        artist: 'yung Logos',
    }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay(){
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
}

function playMusic(){
    isPlaying = true;

    //Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    //Set button hover title
    playBtn.setAttribute('title', 'pause');
    music.play();
}

function pauseMusic(){
    isPlaying = false;

    //Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    //Set button hover title
    playBtn.setAttribute('title', 'play');
    music.pause();
}