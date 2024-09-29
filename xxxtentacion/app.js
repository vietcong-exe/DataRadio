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
    name:"Bass Santana, XXXTENTACION, Cooliecut, Kin$oul - Curse",
    file:"xxxtentaction/Bass Santana, XXXTENTACION, Cooliecut, Kin$oul - Curse.mp3",
  },
  {
    name:"Kanye West, XXXTENTACION - True Love",
    file:"xxxtentaction/Kanye West, XXXTENTACION - True Love.mp3",
  },
  {
    name:"Kodak Black, XXXTENTACION - Roll in Peace (feat. XXXTENTACION)",
    file:"xxxtentaction/Kodak Black, XXXTENTACION - Roll in Peace (feat. XXXTENTACION).mp3",
  },
  {
    name:"Lil Peep, XXXTENTACION - Falling Down - Bonus Track",
    file:"xxxtentaction/Lil Peep, XXXTENTACION - Falling Down - Bonus Track.mp3",
  },
  {
    name:"Lil Wayne, Ty Dolla $ign, XXXTENTACION - Scared of the Dark (feat. XXXTENTACION)",
    file:"xxxtentaction/Lil Wayne, Ty Dolla $ign, XXXTENTACION - Scared of the Dark (feat. XXXTENTACION).mp3",
  },
  {
    name:"Noah Cyrus, XXXTENTACION - Again (feat. XXXTENTACION)",
    file:"xxxtentaction/Noah Cyrus, XXXTENTACION - Again (feat. XXXTENTACION).mp3",
  },
  {
    name:"Ski Mask The Slump God, XXXTENTACION - Take A Step Back",
    file:"xxxtentaction/Ski Mask The Slump God, XXXTENTACION - Take A Step Back.mp3",
  },
  {
    name:"XXXTENTACION - ATTENTION!",
    file:"xxxtentaction/XXXTENTACION - ATTENTION!.mp3",
  },
  {
    name:"XXXTENTACION - BAD!",
    file:"xxxtentaction/XXXTENTACION - BAD!.mp3",
  },
  {
    name:"XXXTENTACION - before I close my eyes",
    file:"xxxtentaction/XXXTENTACION - before I close my eyes.mp3",
  },
  {
    name:"XXXTENTACION - Carry On",
    file:"xxxtentaction/XXXTENTACION - Carry On.mp3",
  },
  {
    name:"XXXTENTACION - changes",
    file:"xxxtentaction/XXXTENTACION - changes.mp3",
  },
  {
    name:"XXXTENTACION - difference (interlude)",
    file:"xxxtentaction/XXXTENTACION - difference (interlude).mp3",
  },
  {
    name:"XXXTENTACION - Everybody Dies In Their Nightmares",
    file:"xxxtentaction/XXXTENTACION - Everybody Dies In Their Nightmares.mp3",
  },
  {
    name:"XXXTENTACION - Ex Bitch",
    file:"xxxtentaction/XXXTENTACION - Ex Bitch.mp3",
  },
  {
    name:"XXXTENTACION - Guardian angel",
    file:"xxxtentaction/XXXTENTACION - Guardian angel.mp3",
  },
  {
    name:"XXXTENTACION - hate will never win",
    file:"xxxtentaction/XXXTENTACION - hate will never win.mp3",
  },
  {
    name:"XXXTENTACION - HEARTEATER",
    file:"xxxtentaction/XXXTENTACION - HEARTEATER.mp3",
  },
  {
    name:"XXXTENTACION - Hope",
    file:"xxxtentaction/XXXTENTACION - Hope.mp3",
  },
  {
    name:"XXXTENTACION - I don't let go",
    file:"xxxtentaction/XXXTENTACION - I don't let go.mp3",
  },
  {
    name:"XXXTENTACION - I Don't Wanna Do This Anymore",
    file:"xxxtentaction/XXXTENTACION - I Don't Wanna Do This Anymore.mp3",
  },
  {
    name:"XXXTENTACION - I spoke to the devil in miami, he said everything would be fine",
    file:"xxxtentaction/XXXTENTACION - I spoke to the devil in miami, he said everything would be fine.mp3",
  },
  {
    name:"XXXTENTACION - Jocelyn Flores",
    file:"xxxtentaction/XXXTENTACION - Jocelyn Flores.mp3",
  },
  {
    name:"XXXTENTACION - King Of The Dead",
    file:"xxxtentaction/XXXTENTACION - King Of The Dead.mp3",
  },
  {
    name:"XXXTENTACION - King",
    file:"xxxtentaction/XXXTENTACION - King.mp3",
  },
  {
    name:"XXXTENTACION - let's pretend we're numb",
    file:"xxxtentaction/XXXTENTACION - let's pretend we're numb.mp3",
  },
  {
    name:"XXXTENTACION - Look At Me!",
    file:"xxxtentaction/XXXTENTACION - Look At Me!.mp3",
  },
  {
    name:"XXXTENTACION - Looking for a Star",
    file:"xxxtentaction/XXXTENTACION - Looking for a Star.mp3",
  },
  {
    name:"XXXTENTACION - Moonlight",
    file:"xxxtentaction/XXXTENTACION - Moonlight.mp3",
  },
  {
    name:"XXXTENTACION - numb the pain",
    file:"xxxtentaction/XXXTENTACION - numb the pain.mp3",
  },
  {
    name:"XXXTENTACION - Revenge",
    file:"xxxtentaction/XXXTENTACION - Revenge.mp3",
  },
  {
    name:"XXXTENTACION - Riot",
    file:"xxxtentaction/XXXTENTACION - Riot.mp3",
  },
  {
    name:"XXXTENTACION - SAD!",
    file:"xxxtentaction/XXXTENTACION - SAD!.mp3",
  },
  {
    name:"XXXTENTACION - Sauce!",
    file:"xxxtentaction/XXXTENTACION - Sauce!.mp3",
  },
  {
    name:"XXXTENTACION - Save Me",
    file:"xxxtentaction/XXXTENTACION - Save Me.mp3",
  },
  {
    name:"XXXTENTACION - Teeth (Interlude)",
    file:"xxxtentaction/XXXTENTACION - Teeth (Interlude).mp3",
  },
  {
    name:"XXXTENTACION - the remedy for a broken heart (why am I so in love)",
    file:"xxxtentaction/XXXTENTACION - the remedy for a broken heart (why am I so in love).mp3",
  },
  {
    name:"XXXTENTACION - Triumph",
    file:"xxxtentaction/XXXTENTACION - Triumph.mp3",
  },
  {
    name:"XXXTENTACION - VERY RARE FOREVER FREESTYLE",
    file:"xxxtentaction/XXXTENTACION - VERY RARE FOREVER FREESTYLE.mp3",
  },
  {
    name:"XXXTENTACION - vice city",
    file:"xxxtentaction/XXXTENTACION - vice city.mp3",
  },
  {
    name:"XXXTENTACION - what are you so afraid of",
    file:"xxxtentaction/XXXTENTACION - what are you so afraid of.mp3",
  },
  {
    name:"XXXTENTACION - whoa (mind in awe)",
    file:"xxxtentaction/XXXTENTACION - whoa (mind in awe).mp3",
  },
  {
    name:"XXXTENTACION - WingRiddenAngel",
    file:"xxxtentaction/XXXTENTACION - WingRiddenAngel.mp3",
  },
  {
    name:"XXXTENTACION - YuNg BrAtZ",
    file:"xxxtentaction/XXXTENTACION - YuNg BrAtZ.mp3",
  },
  {
    name:"XXXTENTACION, Lil Pump, Swae Lee, Maluma - Arms Around You (feat. Maluma & Swae Lee)",
    file:"xxxtentaction/XXXTENTACION, Lil Pump, Swae Lee, Maluma - Arms Around You (feat. Maluma & Swae Lee).mp3",
  },
  {
    name:"XXXTENTACION, PnB Rock, Trippie Redd - bad vibes forever (feat. PnB Rock & Trippie Redd)",
    file:"xxxtentaction/XXXTENTACION, PnB Rock, Trippie Redd - bad vibes forever (feat. PnB Rock & Trippie Redd).mp3",
  },
  {
    name:"XXXTENTACION, Ski Mask The Slump God - Off the Wall!",
    file:"xxxtentaction/XXXTENTACION, Ski Mask The Slump God - Off the Wall!.mp3",
  },
  {
    name:"XXXTENTACION, Ski Mask The Slump God - RIP Roach",
    file:"xxxtentaction/XXXTENTACION, Ski Mask The Slump God - RIP Roach.mp3",
  },
  {
    name:"XXXTENTACION, Trippie Redd - Fuck Love",
    file:"xxxtentaction/XXXTENTACION, Trippie Redd - Fuck Love.mp3",
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