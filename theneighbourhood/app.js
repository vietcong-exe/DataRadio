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
    name:"HEALTH, The Neighbourhood - NO ESCAPE",
    file:"ThisIsTheNeighbourhood/HEALTH, The Neighbourhood - NO ESCAPE.mp3",
  },
  {
    name:"CThe Neighbourhood - $TING",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - $TING.mp3",
  },
  {
    name:"The Neighbourhood - A Little Death",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - A Little Death.mp3",
  },
  {
    name:"The Neighbourhood - Afraid",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Afraid.mp3",
  },
  {
    name:"The Neighbourhood - Alleyways",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Alleyways.mp3",
  },
  {
    name:"The Neighbourhood - Baby Came Home 2  Valentines",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Baby Came Home 2  Valentines.mp3",
  },
  {
    name:"The Neighbourhood - Baby Came Home",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Baby Came Home.mp3",
  },
  {
    name:"The Neighbourhood - Cherry Flavoured",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Cherry Flavoured.mp3",
  },
  {
    name:"The Neighbourhood - Chip Chrome",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Chip Chrome.mp3",
  },
  {
    name:"The Neighbourhood - Compass",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Compass.mp3",
  },
  {
    name:"The Neighbourhood - Cry Baby",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Cry Baby.mp3",
  },
  {
    name:"The Neighbourhood - Daddy Issues",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Daddy Issues.mp3",
  },
  {
    name:"The Neighbourhood - Devil's Advocate",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Devil's Advocate.mp3",
  },
  {
    name:"The Neighbourhood - Everybody's Watching Me (Uh Oh)",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Everybody's Watching Me (Uh Oh).mp3",
  },
  {
    name:"The Neighbourhood - Fallen Star",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Fallen Star.mp3",
  },
  {
    name:"The Neighbourhood - Female Robbery",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Female Robbery.mp3",
  },
  {
    name:"The Neighbourhood - Flawless",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Flawless.mp3",
  },
  {
    name:"The Neighbourhood - Here We Go Again",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Here We Go Again.mp3",
  },
  {
    name:"The Neighbourhood - Honest - From The Amazing Spider-Man 2 Soundtrack",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Honest - From The Amazing Spider-Man 2 Soundtrack.mp3",
  },
  {
    name:"The Neighbourhood - Leaving Tonight",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Leaving Tonight.mp3",
  },
  {
    name:"The Neighbourhood - Let It Go",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Let It Go.mp3",
  },
  {
    name:"The Neighbourhood - Lost in Translation",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Lost in Translation.mp3",
  },
  {
    name:"The Neighbourhood - Lurk",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Lurk.mp3",
  },
  {
    name:"The Neighbourhood - Nervous",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Nervous.mp3",
  },
  {
    name:"The Neighbourhood - No Grey. 2",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - No Grey.mp3",
  },
  {
    name:"The Neighbourhood - Over the Influence",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Over the Influence.mp3",
  },
  {
    name:"The Neighbourhood - Pretty Boy",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Pretty Boy.mp3",
  },
  {
    name:"The Neighbourhood - Prey",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Prey.mp3",
  },
  {
    name:"The Neighbourhood - R.I.P. 2 My Youth",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - R.I.P. 2 My Youth.mp3",
  },
  {
    name:"The Neighbourhood - Reflections",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Reflections.mp3",
  },
  {
    name:"The Neighbourhood - Silver Lining",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Silver Lining.mp3",
  },
  {
    name:"The Neighbourhood - Softcore",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Softcore.mp3",
  },
  {
    name:"The Neighbourhood - Stargazing",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Stargazing.mp3",
  },
  {
    name:"The Neighbourhood - Sweater Weather",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Sweater Weather.mp3",
  },
  {
    name:"The Neighbourhood - The Beach",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - The Beach.mp3",
  },
  {
    name:"The Neighbourhood - The Shining",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - The Shining.mp3",
  },
  {
    name:"The Neighbourhood - Tobacco Sunburst",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Tobacco Sunburst.mp3",
  },
  {
    name:"The Neighbourhood - U&I",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - U&I.mp3",
  },
  {
    name:"The Neighbourhood - Unfair",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Unfair.mp3",
  },
  {
    name:"The Neighbourhood - Void",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Void.mp3",
  },
  {
    name:"The Neighbourhood - W.D.Y.W.F.M",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - W.D.Y.W.F.M.mp3",
  },
  {
    name:"The Neighbourhood - West Coast",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - West Coast.mp3",
  },
  {
    name:"The Neighbourhood - Wires",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - Wires.mp3",
  },
  {
    name:"The Neighbourhood - You Get Me So High",
    file:"ThisIsTheNeighbourhood/The Neighbourhood - You Get Me So High.mp3",
  },
  {
    name:"The Neighbourhood, Casey Veggies, Kossisko - Jealou$y (feat. Casey Veggies & Kossisko)",
    file:"ThisIsTheNeighbourhood/The Neighbourhood, Casey Veggies, Kossisko - Jealou$y (feat. Casey Veggies & Kossisko).mp3",
  },
  {
    name:"The Neighbourhood, Death Stranding- Timefall - Yellow Box",
    file:"ThisIsTheNeighbourhood/The Neighbourhood, Death Stranding- Timefall - Yellow Box.mp3",
  },
  {
    name:"The Neighbourhood, French Montana - #icanteven (feat. French Montana)",
    file:"ThisIsTheNeighbourhood/The Neighbourhood, French Montana - #icanteven (feat. French Montana).mp3",
  },
  {
    name:"The Neighbourhood, YG - Dangerous (feat. YG)",
    file:"ThisIsTheNeighbourhood/The Neighbourhood, YG - Dangerous (feat. YG).mp3",
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