//initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("ProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");
let songs = [
  {
    songName: "Lost Sky - Where We Started",
    filePath: "songs/0.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Alan Walker - Dreamer",
    filePath: "songs/1.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Clarx _ Zaug - No Money",
    filePath: "songs/2.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "DEAF KEV - Invincible",
    filePath: "songs/3.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Different Heaven & EH!DE",
    filePath: "songs/4.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Elliot Kings, Riggs - Paper Walls",
    filePath: "songs/5.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "DEAF KEV - Invincible",
    filePath: "songs/6.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Lost Sky - Where We Started",
    filePath: "songs/7.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "T-Mass _ Rain Main Release_",
    filePath: "songs/8.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Jim Yosef & Anna Yvette",
    filePath: "songs/9.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
    document.getElementById(`${songIndex}`).classList.add("fa-pause");
    document.getElementById(`${songIndex}`).classList.remove("fa-play");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
    document.getElementById(`${songIndex}`).classList.add("fa-play");
    document.getElementById(`${songIndex}`).classList.remove("fa-pause");
  }
  masterSongName.innerText = songs[songIndex].songName;
});

// listen to events

audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-play");
      element.classList.add("fa-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-play")) {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        masterSongName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
      } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        e.target.classList.remove("fa-pause");
        e.target.classList.add("fa-play");
        gif.style.opacity = 0;
      }
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) songIndex = 0;
  else songIndex++;

  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  masterSongName.innerText = songs[songIndex].songName;
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) songIndex = 0;
  else songIndex--;

  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  masterSongName.innerText = songs[songIndex].songName;
});
