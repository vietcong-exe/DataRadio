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
    name:"Febre90s, pumapjl, SonoTWS - Você Está Com Febre",
    file:"ThisIsPumaPjl/Febre90s, pumapjl, SonoTWS - Você Está Com Febre.mp3",
  },
  {
    name:"Febre90s, pumapjl, SonoTWS, Lis Mc - No Piscar dos Olhos",
    file:"ThisIsPumaPjl/Febre90s, pumapjl, SonoTWS, Lis Mc - No Piscar dos Olhos.mp3",
  },
  {
    name:"Febre90s, SonoTWS, pumapjl - Malandro Demais Vira Bicho",
    file:"ThisIsPumaPjl/Febre90s, SonoTWS, pumapjl - Malandro Demais Vira Bicho.mp3",
  },
  {
    name:"Febre90s, SonoTWS, pumapjl - Sementinha do Mal",
    file:"ThisIsPumaPjl/Febre90s, SonoTWS, pumapjl - Sementinha do Mal.mp3",
  },
  {
    name:"pumapjl - Ciclo",
    file:"ThisIsPumaPjl/pumapjl - Ciclo.mp3",
  },
  {
    name:"pumapjl - Contorno",
    file:"ThisIsPumaPjl/pumapjl - Contorno.mp3",
  },
  {
    name:"pumapjl - Doida",
    file:"ThisIsPumaPjl/pumapjl - Doida.mp3",
  },
  {
    name:"pumapjl, Babidi - Mar",
    file:"ThisIsPumaPjl/pumapjl, Babidi - Mar.mp3",
  },
  {
    name:"pumapjl, Babidi, Lininhus - Mar, Pt. 2",
    file:"ThisIsPumaPjl/pumapjl, Babidi, Lininhus - Mar, Pt. 2.mp3",
  },
  {
    name:"pumapjl, LEALL, Babidi - Ai Calica",
    file:"ThisIsPumaPjl/pumapjl, LEALL, Babidi - Ai Calica.mp3",
  },
  {
    name:"pumapjl, Novin, wavybil - Praga",
    file:"ThisIsPumaPjl/pumapjl, Novin, wavybil - Praga.mp3",
  },
  {
    name:"pumapjl, SonoTWS - Aquelas Coisas",
    file:"ThisIsPumaPjl/pumapjl, SonoTWS - Aquelas Coisas.mp3",
  },
  {
    name:"pumapjl, SonoTWS - Cega Eles Vovó",
    file:"ThisIsPumaPjl/pumapjl, SonoTWS - Cega Eles Vovó.mp3",
  },
  {
    name:"pumapjl, SonoTWS - Intro",
    file:"ThisIsPumaPjl/pumapjl, SonoTWS - Intro.mp3",
  },
  {
    name:"pumapjl, SonoTWS - O Que É Meu Ninguém Me Tira",
    file:"ThisIsPumaPjl/pumapjl, SonoTWS - O Que É Meu Ninguém Me Tira.mp3",
  },
  {
    name:"pumapjl, SonoTWS - Prata",
    file:"ThisIsPumaPjl/pumapjl, SonoTWS - Prata.mp3",
  },
  {
    name:"pumapjl, SonoTWS - Reduto de Malandro",
    file:"ThisIsPumaPjl/pumapjl, SonoTWS - Reduto de Malandro.mp3",
  },
  {
    name:"pumapjl, SonoTWS - Solta Minha Blusa",
    file:"ThisIsPumaPjl/pumapjl, SonoTWS - Solta Minha Blusa.mp3",
  },
  {
    name:"pumapjl, SonoTWS - Transição (Mensagem)",
    file:"ThisIsPumaPjl/pumapjl, SonoTWS - Transição (Mensagem).mp3",
  },
  {
    name:"pumapjl, SonoTWS - Zona Sul",
    file:"ThisIsPumaPjl/pumapjl, SonoTWS - Zona Sul.mp3",
  },
  {
    name:"pumapjl, SonoTWS, Showlivre, Febre90s - Malandro Demais Vira Bicho - Ao Vivo",
    file:"ThisIsPumaPjl/pumapjl, SonoTWS, Showlivre, Febre90s - Malandro Demais Vira Bicho - Ao Vivo.mp3",
  },
  {
    name:"pumapjl, SonoTWS, Showlivre, Febre90s - No Piscar dos Olhos - Ao Vivo",
    file:"ThisIsPumaPjl/pumapjl, SonoTWS, Showlivre, Febre90s - No Piscar dos Olhos - Ao Vivo.mp3",
  },
  {
    name:"SonoTWS, pumapjl - Cega Eles Vovó - Instrumental",
    file:"ThisIsPumaPjl/SonoTWS, pumapjl - Cega Eles Vovó - Instrumental.mp3",
  },
  {
    name:"SonoTWS, pumapjl - Fugir Daqui - Instrumental",
    file:"ThisIsPumaPjl/SonoTWS, pumapjl - Fugir Daqui - Instrumental.mp3",
  },
  {
    name:"Tarcis, VND, pumapjl - Beira Mar",
    file:"ThisIsPumaPjl/Tarcis, VND, pumapjl - Beira Mar.mp3",
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