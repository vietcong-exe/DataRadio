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
    name:"Twenty One Pilots - Addict With A Pen",
    file:"twentyonepilots/Twenty One Pilots - Addict With A Pen.mp3",
  },
  {
    name:"Twenty One Pilots - Backslide",
    file:"twentyonepilots/Twenty One Pilots - Backslide.mp3",
  },
  {
    name:"Twenty One Pilots - Cancer",
    file:"twentyonepilots/Twenty One Pilots - Cancer.mp3",
  },
  {
    name:"Twenty One Pilots - Car Radio",
    file:"twentyonepilots/Twenty One Pilots - Car Radio.mp3",
  },
  {
    name:"Twenty One Pilots - Chlorine",
    file:"twentyonepilots/Twenty One Pilots - Chlorine.mp3",
  },
  {
    name:"Twenty One Pilots - Choker",
    file:"twentyonepilots/Twenty One Pilots - Choker.mp3",
  },
  {
    name:"Twenty One Pilots - Doubt",
    file:"twentyonepilots/Twenty One Pilots - Doubt.mp3",
  },
  {
    name:"Twenty One Pilots - Fake You Out",
    file:"twentyonepilots/Twenty One Pilots - Fake You Out.mp3",
  },
  {
    name:"Twenty One Pilots - Fall Away",
    file:"twentyonepilots/Twenty One Pilots - Fall Away.mp3",
  },
  {
    name:"Twenty One Pilots - Guns for Hands",
    file:"twentyonepilots/Twenty One Pilots - Guns for Hands.mp3",
  },
  {
    name:"Twenty One Pilots - Heathens",
    file:"twentyonepilots/Twenty One Pilots - Heathens.mp3",
  },
  {
    name:"Twenty One Pilots - Heavydirtysoul",
    file:"twentyonepilots/Twenty One Pilots - Heavydirtysoul.mp3",
  },
  {
    name:"Twenty One Pilots - Holding on to You",
    file:"twentyonepilots/Twenty One Pilots - Holding on to You.mp3",
  },
  {
    name:"Twenty One Pilots - Hometown",
    file:"twentyonepilots/Twenty One Pilots - Hometown.mp3",
  },
  {
    name:"Twenty One Pilots - House of Gold",
    file:"twentyonepilots/Twenty One Pilots - House of Gold.mp3",
  },
  {
    name:"Twenty One Pilots - Johnny Boy",
    file:"twentyonepilots/Twenty One Pilots - Johnny Boy.mp3",
  },
  {
    name:"Twenty One Pilots - Jumpsuit",
    file:"twentyonepilots/Twenty One Pilots - Jumpsuit.mp3",
  },
  {
    name:"Twenty One Pilots - Level of Concern",
    file:"twentyonepilots/Twenty One Pilots - Level of Concern.mp3",
  },
  {
    name:"Twenty One Pilots - Midwest Indigo",
    file:"twentyonepilots/Twenty One Pilots - Midwest Indigo.mp3",
  },
  {
    name:"Twenty One Pilots - Migraine",
    file:"twentyonepilots/Twenty One Pilots - Migraine.mp3",
  },
  {
    name:"Twenty One Pilots - Morph",
    file:"twentyonepilots/Twenty One Pilots - Morph.mp3",
  },
  {
    name:"Twenty One Pilots - Mulberry Street",
    file:"twentyonepilots/Twenty One Pilots - Mulberry Street.mp3",
  },
  {
    name:"Twenty One Pilots - My Blood",
    file:"twentyonepilots/Twenty One Pilots - My Blood.mp3",
  },
  {
    name:"Twenty One Pilots - Navigating",
    file:"twentyonepilots/Twenty One Pilots - Navigating.mp3",
  },
  {
    name:"Twenty One Pilots - Next Semester",
    file:"twentyonepilots/Twenty One Pilots - Next Semester.mp3",
  },
  {
    name:"Twenty One Pilots - Nico and the Niners",
    file:"twentyonepilots/Twenty One Pilots - Nico and the Niners.mp3",
  },
  {
    name:"Twenty One Pilots - Oh Ms Believer",
    file:"twentyonepilots/Twenty One Pilots - Oh Ms Believer.mp3",
  },
  {
    name:"Twenty One Pilots - Overcompensate",
    file:"twentyonepilots/Twenty One Pilots - Overcompensate.mp3",
  },
  {
    name:"Twenty One Pilots - Redecorate",
    file:"twentyonepilots/Twenty One Pilots - Redecorate.mp3",
  },
  {
    name:"Twenty One Pilots - Ride",
    file:"twentyonepilots/Twenty One Pilots - Ride.mp3",
  },
  {
    name:"Twenty One Pilots - Routines In The Night",
    file:"twentyonepilots/Twenty One Pilots - Routines In The Night.mp3",
  },
  {
    name:"Twenty One Pilots - Saturday",
    file:"twentyonepilots/Twenty One Pilots - Saturday.mp3",
  },
  {
    name:"Twenty One Pilots - Shy Away",
    file:"twentyonepilots/Twenty One Pilots - Shy Away.mp3",
  },
  {
    name:"Twenty One Pilots - Stressed Out",
    file:"twentyonepilots/Twenty One Pilots - Stressed Out.mp3",
  },
  {
    name:"Twenty One Pilots - Smithereens",
    file:"twentyonepilots/Twenty One Pilots - Smithereens.mp3",
  },
  {
    name:"Twenty One Pilots - Tear in My Heart",
    file:"twentyonepilots/Twenty One Pilots - Tear in My Heart.mp3",
  },
  {
    name:"Twenty One Pilots - The Craving - single version",
    file:"twentyonepilots/Twenty One Pilots - The Craving - single version.mp3",
  },
  {
    name:"Twenty One Pilots - The Outside",
    file:"twentyonepilots/Twenty One Pilots - The Outside.mp3",
  },
  {
    name:"Twenty One Pilots - Vignette",
    file:"twentyonepilots/Twenty One Pilots - Vignette.mp3",
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