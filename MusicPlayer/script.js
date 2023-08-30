//initialize the the variables
let songIndex = 0;
let audioElement = new Audio("songs/song");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("ProgressBar");
let gif = document.getElementById("gif");
let songs = [
  {
    songName:
      "4 The Best EDM Music Mix by NCN 🎶 - Imagination _ Run _ Elektric _ EPIC _  🎶Without Me",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Alan Walker - Dreamer (BEAUZ & Heleen Remix) [NCS Release]",
    filePath: "song/2.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Clarx _ Zaug - No Money _NCS Release_",
    filePath: "song/3.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]Without Me",
    filePath: "song/4.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "song/5.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Elliot Kings, Riggs - Paper Walls (with Mykyl) _NCS Release_",
    filePath: "song/6.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Jim Yosef _ Anna Yvette - Linked _NCS Release",
    filePath: "song/7.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Lost Sky - Where We Started (feat. Jex) _NCS Release_",
    filePath: "song/8.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "T-Mass _ Rain Main - Follow (feat. Vikki Gilmore) _NCS Release_",
    filePath: "song/9.mp3",
    coverPath: "covers/1.jpg",
  },
];

//hand play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});
// listen to events
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
