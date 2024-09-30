function createTrackItem(index,name,duration){
  var trackItem = document.createElement('div');
  trackItem.setAttribute("class", "playlist-track-ctn");
  trackItem.setAttribute("id", "ptc-"+index);
  trackItem.setAttribute("data-index", index);
  document.querySelector(".playlist-ctn").appendChild(trackItem);

  var playBtnItem = document.createElement('div');
  playBtnItem.setAttribute("class", "playlist-btn-play");
  playBtnItem.setAttribute("id", "pbp-"+index);
  document.querySelector("#ptc-"+index).appendChild(playBtnItem);

  var btnImg = document.createElement('i');
  btnImg.setAttribute("class", "fas fa-play");
  btnImg.setAttribute("height", "40");
  btnImg.setAttribute("width", "40");
  btnImg.setAttribute("id", "p-img-"+index);
  document.querySelector("#pbp-"+index).appendChild(btnImg);

  var trackInfoItem = document.createElement('div');
  trackInfoItem.setAttribute("class", "playlist-info-track");
  trackInfoItem.innerHTML = name
  document.querySelector("#ptc-"+index).appendChild(trackInfoItem);

  var trackDurationItem = document.createElement('div');
  trackDurationItem.setAttribute("class", "playlist-duration");
  // trackDurationItem.innerHTML = duration
  document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
}

var listAudio = [
  {
    name:"James Bay, The Lumineers, Noah Kahan - Up All Night (with The Lumineers & Noah Kahan)",
    file:"thelumineers/James Bay, The Lumineers, Noah Kahan - Up All Night (with The Lumineers & Noah Kahan).mp3",
  },
  {
    name:"P!nk, The Lumineers - Long Way to Go",
    file:"thelumineers/P!nk, The Lumineers - Long Way to Go.mp3",
  },
  {
    name:"The Lumineers - a little sound",
    file:"thelumineers/The Lumineers - a little sound.mp3",
  },
  {
    name:"The Lumineers - A Song For You - Live At The Hollywood Bowl, Los Angeles, CA - April 29, 2023",
    file:"thelumineers/The Lumineers - A Song For You - Live At The Hollywood Bowl, Los Angeles, CA - April 29, 2023.mp3",
  },
  {
    name:"The Lumineers - A.M. Radio Intro (Live from Wrigley Field)",
    file:"thelumineers/The Lumineers - A.M. Radio Intro (Live from Wrigley Field).mp3",
  },
  {
    name:"The Lumineers - A.M. RADIO",
    file:"thelumineers/The Lumineers - A.M. RADIO.mp3",
  },
  {
    name:"The Lumineers - Ain't Nobody's Problem",
    file:"thelumineers/The Lumineers - Ain't Nobody's Problem.mp3",
  },
  {
    name:"The Lumineers - Angela",
    file:"thelumineers/The Lumineers - Angela.mp3",
  },
  {
    name:"The Lumineers - BIG SHOT",
    file:"thelumineers/The Lumineers - BIG SHOT.mp3",
  },
  {
    name:"The Lumineers - Birthday Intro (Live from Wrigley Field)",
    file:"thelumineers/The Lumineers - Birthday Intro (Live from Wrigley Field).mp3",
  },
  {
    name:"The Lumineers - Boots Of Spanish Leather",
    file:"thelumineers/The Lumineers - Boots Of Spanish Leather.mp3",
  },
  {
    name:"The Lumineers - BRIGHTSIDE",
    file:"thelumineers/The Lumineers - BRIGHTSIDE.mp3",
  },
  {
    name:"The Lumineers - Caves",
    file:"thelumineers/The Lumineers - Caves.mp3",
  },
  {
    name:"The Lumineers - Charlie Boy Intro (Live from Wrigley Field)",
    file:"thelumineers/The Lumineers - Charlie Boy Intro (Live from Wrigley Field).mp3",
  },
  {
    name:"The Lumineers - Charlie Boy",
    file:"thelumineers/The Lumineers - Charlie Boy.mp3",
  },
  {
    name:"The Lumineers - Cleopatra",
    file:"thelumineers/The Lumineers - Cleopatra.mp3",
  },
  {
    name:"The Lumineers - Darlene",
    file:"thelumineers/The Lumineers - Darlene.mp3",
  },
  {
    name:"The Lumineers - Dead Sea",
    file:"thelumineers/The Lumineers - Dead Sea.mp3",
  },
  {
    name:"The Lumineers - Donna",
    file:"thelumineers/The Lumineers - Donna.mp3",
  },
  {
    name:"The Lumineers - Elouise",
    file:"thelumineers/The Lumineers - Elouise.mp3",
  },
  {
    name:"The Lumineers - Flowers In Your Hair",
    file:"thelumineers/The Lumineers - Flowers In Your Hair.mp3",
  },
  {
    name:"The Lumineers - Gale Song",
    file:"thelumineers/The Lumineers - Gale Song.mp3",
  },
  {
    name:"The Lumineers - Gloria",
    file:"thelumineers/The Lumineers - Gloria.mp3",
  },
  {
    name:"The Lumineers - Have You Ever Seen The Rain - Recorded at Electric Lady Studios NYC",
    file:"thelumineers/The Lumineers - Have You Ever Seen The Rain - Recorded at Electric Lady Studios NYC.mp3",
  },
  {
    name:"The Lumineers - Ho Hey",
    file:"thelumineers/The Lumineers - Ho Hey.mp3",
  },
  {
    name:"The Lumineers - Holdin' Out",
    file:"thelumineers/The Lumineers - Holdin' Out.mp3",
  },
  {
    name:"The Lumineers - It Wasn't Easy To Be Happy For You",
    file:"thelumineers/The Lumineers - It Wasn't Easy To Be Happy For You.mp3",
  },
  {
    name:"The Lumineers - just like heaven",
    file:"thelumineers/The Lumineers - just like heaven.mp3",
  },
  {
    name:"The Lumineers - Left For Denver",
    file:"thelumineers/The Lumineers - Left For Denver.mp3",
  },
  {
    name:"The Lumineers - Life In The City",
    file:"thelumineers/The Lumineers - Life In The City.mp3",
  },
  {
    name:"The Lumineers - Long Way From Home",
    file:"thelumineers/The Lumineers - Long Way From Home.mp3",
  },
  {
    name:"The Lumineers - NEVER REALLY MINE",
    file:"thelumineers/The Lumineers - NEVER REALLY MINE.mp3",
  },
  {
    name:"The Lumineers - Nobody Knows",
    file:"thelumineers/The Lumineers - Nobody Knows.mp3",
  },
  {
    name:"The Lumineers - Ophelia",
    file:"thelumineers/The Lumineers - Ophelia.mp3",
  },
  {
    name:"The Lumineers - Patience",
    file:"thelumineers/The Lumineers - Patience.mp3",
  },
  {
    name:"The Lumineers - REPRISE",
    file:"thelumineers/The Lumineers - REPRISE.mp3",
  },
  {
    name:"The Lumineers - Salt And The Sea",
    file:"thelumineers/The Lumineers - Salt And The Sea.mp3",
  },
  {
    name:"The Lumineers - Scotland",
    file:"thelumineers/The Lumineers - Scotland.mp3",
  },
  {
    name:"The Lumineers - Stubborn Love",
    file:"thelumineers/The Lumineers - Stubborn Love.mp3",
  },
  {
    name:"The Lumineers - Submarines",
    file:"thelumineers/The Lumineers - Submarines.mp3",
  },
  {
    name:"The Lumineers - This Must Be The Place (Naïve Melody)",
    file:"thelumineers/The Lumineers - This Must Be The Place (Naïve Melody).mp3",
  },
  {
    name:"The Lumineers - Walls",
    file:"thelumineers/The Lumineers - Walls.mp3",
  },
  {
    name:"The Lumineers - Where The Skies Are Blue",
    file:"thelumineers/The Lumineers - Where The Skies Are Blue.mp3",
  },
  {
    name:"The Lumineers - WHERE WE ARE",
    file:"thelumineers/The Lumineers - WHERE WE ARE.mp3",
  },
  {
    name:"The Lumineers - White Lie",
    file:"thelumineers/The Lumineers - White Lie.mp3",
  },
  {
    name:"The Lumineers, Andrew Bird - Subterranean Homesick Blues (feat. Andrew Bird)",
    file:"thelumineers/The Lumineers, Andrew Bird - Subterranean Homesick Blues (feat. Andrew Bird).mp3",
  },
  {
    name:"Zach Bryan, The Lumineers - Spotless (feat. The Lumineers)",
    file:"thelumineers/Zach Bryan, The Lumineers - Spotless (feat. The Lumineers).mp3",
  },
  
]

for (var i = 0; i < listAudio.length; i++) {
    createTrackItem(i,listAudio[i].name,listAudio[i].duration);
}
var indexAudio = 0;

function loadNewTrack(index){
  var player = document.querySelector('#source-audio')
  player.src = listAudio[index].file
  document.querySelector('.title').innerHTML = listAudio[index].name
  this.currentAudio = document.getElementById("myAudio");
  this.currentAudio.load()
  this.toggleAudio()
  this.updateStylePlaylist(this.indexAudio,index)
  this.indexAudio = index;
}

var playListItems = document.querySelectorAll(".playlist-track-ctn");

for (let i = 0; i < playListItems.length; i++){
  playListItems[i].addEventListener("click", getClickedElement.bind(this));
}

function getClickedElement(event) {
  for (let i = 0; i < playListItems.length; i++){
    if(playListItems[i] == event.target){
      var clickedIndex = event.target.getAttribute("data-index")
      if (clickedIndex == this.indexAudio ) { // alert('Same audio');
          this.toggleAudio()
      }else{
          loadNewTrack(clickedIndex);
      }
    }
  }
}

document.querySelector('#source-audio').src = listAudio[indexAudio].file
document.querySelector('.title').innerHTML = listAudio[indexAudio].name


var currentAudio = document.getElementById("myAudio");

currentAudio.load()

currentAudio.onloadedmetadata = function() {
      document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
}.bind(this);

var interval1;

function toggleAudio() {

  if (this.currentAudio.paused) {
    document.querySelector('#icon-play').style.display = 'none';
    document.querySelector('#icon-pause').style.display = 'block';
    document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
    this.playToPause(this.indexAudio)
    this.currentAudio.play();
  }else{
    document.querySelector('#icon-play').style.display = 'block';
    document.querySelector('#icon-pause').style.display = 'none';
    this.pauseToPlay(this.indexAudio)
    this.currentAudio.pause();
  }
}

function pauseAudio() {
  this.currentAudio.pause();
  clearInterval(interval1);
}

var timer = document.getElementsByClassName('timer')[0]

var barProgress = document.getElementById("myBar");


var width = 0;

function onTimeUpdate() {
  var t = this.currentAudio.currentTime
  timer.innerHTML = this.getMinutes(t);
  this.setBarProgress();
  if (this.currentAudio.ended) {
    document.querySelector('#icon-play').style.display = 'block';
    document.querySelector('#icon-pause').style.display = 'none';
    this.pauseToPlay(this.indexAudio)
    if (this.indexAudio < listAudio.length-1) {
        var index = parseInt(this.indexAudio)+1
        this.loadNewTrack(index)
    }
  }
}


function setBarProgress(){
  var progress = (this.currentAudio.currentTime/this.currentAudio.duration)*100;
  document.getElementById("myBar").style.width = progress + "%";
}


function getMinutes(t){
  var min = parseInt(parseInt(t)/60);
  var sec = parseInt(t%60);
  if (sec < 10) {
    sec = "0"+sec
  }
  if (min < 10) {
    min = "0"+min
  }
  return min+":"+sec
}

var progressbar = document.querySelector('#myProgress')
progressbar.addEventListener("click", seek.bind(this));


function seek(event) {
  var percent = event.offsetX / progressbar.offsetWidth;
  this.currentAudio.currentTime = percent * this.currentAudio.duration;
  barProgress.style.width = percent*100 + "%";
}

function forward(){
  this.currentAudio.currentTime = this.currentAudio.currentTime + 5
  this.setBarProgress();
}

function rewind(){
  this.currentAudio.currentTime = this.currentAudio.currentTime - 5
  this.setBarProgress();
}


function next(){
  if (this.indexAudio <listAudio.length-1) {
      var oldIndex = this.indexAudio
      this.indexAudio++;
      updateStylePlaylist(oldIndex,this.indexAudio)
      this.loadNewTrack(this.indexAudio);
  }
}

function previous(){
  if (this.indexAudio>0) {
      var oldIndex = this.indexAudio
      this.indexAudio--;
      updateStylePlaylist(oldIndex,this.indexAudio)
      this.loadNewTrack(this.indexAudio);
  }
}

function updateStylePlaylist(oldIndex,newIndex){
  document.querySelector('#ptc-'+oldIndex).classList.remove("active-track");
  this.pauseToPlay(oldIndex);
  document.querySelector('#ptc-'+newIndex).classList.add("active-track");
  this.playToPause(newIndex)
}

function playToPause(index){
  var ele = document.querySelector('#p-img-'+index)
  ele.classList.remove("fa-play");
  ele.classList.add("fa-pause");
}

function pauseToPlay(index){
  var ele = document.querySelector('#p-img-'+index)
  ele.classList.remove("fa-pause");
  ele.classList.add("fa-play");
}


function setVolume(value) {
  const audio = document.getElementById('myAudio');
  audio.volume = value;
}

// Adicione essa função ao seu código existente
function toggleMute() {
  const audio = document.getElementById('myAudio');
  const volumeSlider = document.getElementById('volumeSlider');
  const iconVolUp = document.getElementById('icon-vol-up');
  const iconVolMute = document.getElementById('icon-vol-mute');

  if (audio.volume > 0) {
    audio.volume = 0;
    volumeSlider.value = 0;
    iconVolUp.style.display = 'none';
    iconVolMute.style.display = 'block';
  } else {
    audio.volume = 1; // ou o valor que você deseja
    volumeSlider.value = 1;
    iconVolUp.style.display = 'block';
    iconVolMute.style.display = 'none';
  }
}