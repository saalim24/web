//initialize the the variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar=document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let songs= [
    {songName: "Without Me", filePath:"song/1.mp3", coverPath :"covers/1.jpg"},
    {songName: "Without Me", filePath:"song/1.mp3", coverPath :"covers/1.jpg"},
    {songName: "Without Me", filePath:"song/1.mp3", coverPath :"covers/1.jpg"},
    {songName: "Without Me", filePath:"song/1.mp3", coverPath :"covers/1.jpg"},
    {songName: "Without Me", filePath:"song/1.mp3", coverPath :"covers/1.jpg"},
    {songName: "Without Me", filePath:"song/1.mp3", coverPath :"covers/1.jpg"},
]

//hand play/pause click
masterPlay.addEventListener('click',()=>
{
    if (audioElement.paused ||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})
// listen to events
document.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
})