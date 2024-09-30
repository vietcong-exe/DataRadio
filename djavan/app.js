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
    name:"Caetano Veloso, Djavan - Sina",
    file:"djavan/Caetano Veloso, Djavan - Sina.mp3",
  },
  {
    name:"Djavan - Açaí (Ao Vivo)",
    file:"djavan/Djavan - Açaí (Ao Vivo).mp3",
  },
  {
    name:"Djavan - Acelerou",
    file:"djavan/Djavan - Acelerou.mp3",
  },
  {
    name:"Djavan - Avião",
    file:"djavan/Djavan - Avião.mp3",
  },
  {
    name:"Djavan - Azul (Ao Vivo)",
    file:"djavan/Djavan - Azul (Ao Vivo).mp3",
  },
  {
    name:"Djavan - Boa Noite",
    file:"djavan/Djavan - Boa Noite.mp3",
  },
  {
    name:"Djavan - Capim",
    file:"djavan/Djavan - Capim.mp3",
  },
  {
    name:"Djavan - Correnteza",
    file:"djavan/Djavan - Correnteza.mp3",
  },
  {
    name:"Djavan - Dou - Não - Dou - Ao Vivo",
    file:"djavan/Djavan - Dou - Não - Dou - Ao Vivo.mp3",
  },
  {
    name:"Djavan - Embola a Bola (Cateretê)",
    file:"djavan/Djavan - Embola a Bola (Cateretê).mp3",
  },
  {
    name:"Djavan - Eu Te Devoro - Ao Vivo",
    file:"djavan/Djavan - Eu Te Devoro - Ao Vivo.mp3",
  },
  {
    name:"Djavan - Faltando um Pedaço (Ao Vivo)",
    file:"djavan/Djavan - Faltando um Pedaço (Ao Vivo).mp3",
  },
  {
    name:"Djavan - Fato Consumado",
    file:"djavan/Djavan - Fato Consumado.mp3",
  },
  {
    name:"Djavan - Flor de Lis",
    file:"djavan/Djavan - Flor de Lis.mp3",
  },
  {
    name:"Djavan - Lambada De Serpente",
    file:"djavan/Djavan - Lambada De Serpente.mp3",
  },
  {
    name:"Djavan - Lilás",
    file:"djavan/Djavan - Lilás.mp3",
  },
  {
    name:"Djavan - Limão  Avião  Flor de Lis - Ao Vivo",
    file:"djavan/Djavan - Limão  Avião  Flor de Lis - Ao Vivo.mp3",
  },
  {
    name:"Djavan - Linha do Equador",
    file:"djavan/Djavan - Linha do Equador.mp3",
  },
  {
    name:"Djavan - Maçã do Rosto",
    file:"djavan/Djavan - Maçã do Rosto.mp3",
  },
  {
    name:"Djavan - Mal de Mim",
    file:"djavan/Djavan - Mal de Mim.mp3",
  },
  {
    name:"Djavan - Maria das Mercedes",
    file:"djavan/Djavan - Maria das Mercedes.mp3",
  },
  {
    name:"Djavan - Meu Bem-Querer (Ao Vivo)",
    file:"djavan/Djavan - Meu Bem-Querer (Ao Vivo).mp3",
  },
  {
    name:"Djavan - Miragem",
    file:"djavan/Djavan - Miragem.mp3",
  },
  {
    name:"Djavan - Não É um Bolero",
    file:"djavan/Djavan - Não É um Bolero.mp3",
  },
  {
    name:"Djavan - Nem um Dia",
    file:"djavan/Djavan - Nem um Dia.mp3",
  },
  {
    name:"Djavan - Num Mundo de Paz",
    file:"djavan/Djavan - Num Mundo de Paz.mp3",
  },
  {
    name:"Djavan - Oceano",
    file:"djavan/Djavan - Oceano.mp3",
  },
  {
    name:"Djavan - Outono",
    file:"djavan/Djavan - Outono.mp3",
  },
  {
    name:"Djavan - Pétala",
    file:"djavan/Djavan - Pétala.mp3",
  },
  {
    name:"Djavan - Se...",
    file:"djavan/Djavan - Se....mp3",
  },
  {
    name:"Djavan - Seca - Ao Vivo",
    file:"djavan/Djavan - Seca - Ao Vivo.mp3",
  },
  {
    name:"Djavan - Sevilhando - Ao Vivo",
    file:"djavan/Djavan - Sevilhando - Ao Vivo.mp3",
  },
  {
    name:"Djavan - Sina",
    file:"djavan/Djavan - Sina.mp3",
  },
  {
    name:"Djavan - Solitude",
    file:"djavan/Djavan - Solitude.mp3",
  },
  {
    name:"Djavan - Sorri (Smile)",
    file:"djavan/Djavan - Sorri (Smile).mp3",
  },
  {
    name:"Djavan - Tenha Calma  Sem Você",
    file:"djavan/Djavan - Tenha Calma  Sem Você.mp3",
  },
  {
    name:"Djavan - Um Amor Puro",
    file:"djavan/Djavan - Um Amor Puro.mp3",
  },
  {
    name:"Djavan - Um Quase Amor",
    file:"djavan/Djavan - Um Quase Amor.mp3",
  },
  {
    name:"Djavan - Ventos do Norte - Ao Vivo",
    file:"djavan/Djavan - Ventos do Norte - Ao Vivo.mp3",
  },
  {
    name:"Djavan - Vesúvio",
    file:"djavan/Djavan - Vesúvio.mp3",
  },
  {
    name:"Djavan - Você Bem Sabe",
    file:"djavan/Djavan - Você Bem Sabe.mp3",
  },
  {
    name:"Djavan, Cássia Eller - Milagreiro (feat. Cássia Eller)",
    file:"djavan/Djavan, Cássia Eller - Milagreiro (feat. Cássia Eller).mp3",
  },
  {
    name:"Djavan, Marizinha - Nereci",
    file:"djavan/Djavan, Marizinha - Nereci.mp3",
  },
  {
    name:"Djavan, Stevie Wonder - Samurai (feat. Stevie Wonder)",
    file:"djavan/Djavan, Stevie Wonder - Samurai (feat. Stevie Wonder).mp3",
  },
  {
    name:"Dona Ivone Lara, Djavan - Sonho Meu (feat. Djavan)",
    file:"djavan/Dona Ivone Lara, Djavan - Sonho Meu (feat. Djavan).mp3",
  },
  {
    name:"Jorge Vercillo, Djavan - Final Feliz",
    file:"djavan/Jorge Vercillo, Djavan - Final Feliz.mp3",
  },
  {
    name:"Melim, Djavan - Outono",
    file:"djavan/Melim, Djavan - Outono.mp3",
  },
  {
    name:"Os Paralamas Do Sucesso, Djavan - Uma Brasileira",
    file:"djavan/Os Paralamas Do Sucesso, Djavan - Uma Brasileira.mp3",
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