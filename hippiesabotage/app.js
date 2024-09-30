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
    name:"Hippie Sabotage - Angels on My Side",
    file:"hippiesabotage/Hippie Sabotage - Angels on My Side.mp3",
  },
  {
    name:"Hippie Sabotage - Cards Im Dealt",
    file:"hippiesabotage/Hippie Sabotage - Cards Im Dealt.mp3",
  },
  {
    name:"Hippie Sabotage - Caught Up",
    file:"hippiesabotage/Hippie Sabotage - Caught Up.mp3",
  },
  {
    name:"Hippie Sabotage - Cryptic Captions",
    file:"hippiesabotage/Hippie Sabotage - Cryptic Captions.mp3",
  },
  {
    name:"Hippie Sabotage - Devil Eyes",
    file:"Hippie Sabotage - Devil Eyes.mp3",
  },
  {
    name:"Hippie Sabotage - Different",
    file:"hippiesabotage/Hippie Sabotage - Different.mp3",
  },
  {
    name:"Hippie Sabotage - Distress",
    file:"hippiesabotage/Hippie Sabotage - Distress.mp3",
  },
  {
    name:"Hippie Sabotage - Drifter",
    file:"hippiesabotage/Hippie Sabotage - Drifter.mp3",
  },
  {
    name:"Hippie Sabotage - Dumb Luck",
    file:"hippiesabotage/Hippie Sabotage - Dumb Luck.mp3",
  },
  {
    name:"Hippie Sabotage - Enough",
    file:"hippiesabotage/Hippie Sabotage - Enough.mp3",
  },
  {
    name:"Hippie Sabotage - Find Me",
    file:"hippiesabotage/Hippie Sabotage - Find Me.mp3",
  },
  {
    name:"Hippie Sabotage - Floating Palace",
    file:"hippiesabotage/Hippie Sabotage - Floating Palace.mp3",
  },
  {
    name:"Hippie Sabotage - Get Out My Own Way",
    file:"hippiesabotage/Hippie Sabotage - Get Out My Own Way.mp3",
  },
  {
    name:"Hippie Sabotage - High Enough",
    file:"hippiesabotage/Hippie Sabotage - High Enough.mp3",
  },
  {
    name:"Hippie Sabotage - Holy Mind",
    file:"hippiesabotage/Hippie Sabotage - Holy Mind.mp3",
  },
  {
    name:"Hippie Sabotage - Homegrown",
    file:"hippiesabotage/Hippie Sabotage - Homegrown.mp3",
  },
  {
    name:"Hippie Sabotage - I Dont Care",
    file:"hippiesabotage/Hippie Sabotage - I Dont Care.mp3",
  },
  {
    name:"Hippie Sabotage - I Found You",
    file:"hippiesabotage/Hippie Sabotage - I Found You.mp3",
  },
  {
    name:"Hippie Sabotage - Immune to Danger",
    file:"hippiesabotage/Hippie Sabotage - Immune to Danger.mp3",
  },
  {
    name:"Hippie Sabotage - Life Happens",
    file:"hippiesabotage/Hippie Sabotage - Life Happens.mp3",
  },
  {
    name:"Hippie Sabotage - Life On The Islands",
    file:"hippiesabotage/Hippie Sabotage - Life On The Islands.mp3",
  },
  {
    name:"Hippie Sabotage - Nervous System",
    file:"hippiesabotage/Hippie Sabotage - Nervous System.mp3",
  },
  {
    name:"Hippie Sabotage - No Judgement",
    file:"hippiesabotage/Hippie Sabotage - No Judgement.mp3",
  },
  {
    name:"Hippie Sabotage - Om",
    file:"hippiesabotage/Hippie Sabotage - Om.mp3",
  },
  {
    name:"Hippie Sabotage - Options",
    file:"hippiesabotage/Hippie Sabotage - Options.mp3",
  },
  {
    name:"Hippie Sabotage - Overdrive",
    file:"hippiesabotage/Hippie Sabotage - Overdrive.mp3",
  },
  {
    name:"Hippie Sabotage - Play with Fire",
    file:"hippiesabotage/Hippie Sabotage - Play with Fire.mp3",
  },
  {
    name:"Hippie Sabotage - Point of No Return",
    file:"hippiesabotage/Hippie Sabotage - Point of No Return.mp3",
  },
  {
    name:"Hippie Sabotage - Righteous",
    file:"hippiesabotage/Hippie Sabotage - Righteous.mp3",
  },
  {
    name:"Hippie Sabotage - Rogues",
    file:"hippiesabotage/Hippie Sabotage - Rogues.mp3",
  },
  {
    name:"Hippie Sabotage - Running Miles",
    file:"hippiesabotage/Hippie Sabotage - Running Miles.mp3",
  },
  {
    name:"Hippie Sabotage - Séance",
    file:"hippiesabotage/Hippie Sabotage - Séance.mp3",
  },
  {
    name:"Hippie Sabotage - Sun Up",
    file:"hippiesabotage/Hippie Sabotage - Sun Up.mp3",
  },
  {
    name:"Hippie Sabotage - The Darkness",
    file:"hippiesabotage/Hippie Sabotage - The Darkness.mp3",
  },
  {
    name:"Hippie Sabotage - Trust Nobody",
    file:"hippiesabotage/Hippie Sabotage - Trust Nobody.mp3",
  },
  {
    name:"Hippie Sabotage - Two Rivers",
    file:"hippiesabotage/Hippie Sabotage - Two Rivers.mp3",
  },
  {
    name:"Hippie Sabotage - Under My Skin",
    file:"hippiesabotage/Hippie Sabotage - Under My Skin.mp3",
  },
  {
    name:"Hippie Sabotage - Waiting Too Long",
    file:"hippiesabotage/Hippie Sabotage - Waiting Too Long.mp3",
  },
  {
    name:"Hippie Sabotage - Whiskey",
    file:"hippiesabotage/Hippie Sabotage - Whiskey.mp3",
  },
  {
    name:"Hippie Sabotage - Wild One",
    file:"hippiesabotage/Hippie Sabotage - Wild One.mp3",
  },
  {
    name:"Hippie Sabotage - Wrong Time",
    file:"hippiesabotage/Hippie Sabotage - Wrong Time.mp3",
  },
  {
    name:"Hippie Sabotage - You're So Fucking Money",
    file:"hippiesabotage/Hippie Sabotage - You're So Fucking Money.mp3",
  },
  {
    name:"Hippie Sabotage - Your Soul",
    file:"hippiesabotage/Hippie Sabotage - Your Soul.mp3",
  },
  {
    name:"Hippie Sabotage, Izzy Bizu - Boy Problems",
    file:"hippiesabotage/Hippie Sabotage, Izzy Bizu - Boy Problems.mp3",
  },
  {
    name:"Kembe X, Hippie Sabotage - Kill Everything in the Way",
    file:"hippiesabotage/Kembe X, Hippie Sabotage - Kill Everything in the Way.mp3",
  },
  {
    name:"Kembe X, Hippie Sabotage - Road Rage",
    file:"hippiesabotage/Kembe X, Hippie Sabotage - Road Rage.mp3",
  },
  {
    name:"Kembe X, Hippie Sabotage - Shallow",
    file:"hippiesabotage/Kembe X, Hippie Sabotage - Shallow.mp3",
  },
  {
    name:"Kembe X, Hippie Sabotage - Where Demons Come to Die",
    file:"hippiesabotage/Kembe X, Hippie Sabotage - Where Demons Come to Die.mp3",
  },
  {
    name:"Kembe X, Hippie Sabotage, Isaiah Rashad - Rolling Stoned",
    file:"hippiesabotage/Kembe X, Hippie Sabotage, Isaiah Rashad - Rolling Stoned.mp3",
  },
  {
    name:"Tove Lo, Hippie Sabotage - Stay High - Habits Remix",
    file:"hippiesabotage/Tove Lo, Hippie Sabotage - Stay High - Habits Remix.mp3",
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