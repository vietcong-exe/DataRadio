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
    name:"1-800WRLD, Lord Ralph Lauren, tharealjuggboy - Envolvido",
    file:"trapsujo/1-800WRLD, Lord Ralph Lauren, tharealjuggboy - Envolvido.mp3",
  },
  {
    name:"1-800WRLD, Lord Ralph Lauren, tharealjuggboy, omontecristo, Sicko, 1800corle - Oi Né",
    file:"trapsujo/1-800WRLD, Lord Ralph Lauren, tharealjuggboy, omontecristo, Sicko, 1800corle - Oi Né.mp3",
  },
  {
    name:"1-800WRLD, Montecristo, tharealjuggboy, Lil Chainz - Red Dot",
    file:"trapsujo/1-800WRLD, Montecristo, tharealjuggboy, Lil Chainz - Red Dot.mp3",
  },
  {
    name:"1-800WRLD, Sicko, tharealjuggboy, Montecristo - 1-800 Mlk Piranha",
    file:"trapsujo/1-800WRLD, Sicko, tharealjuggboy, Montecristo - 1-800 Mlk Piranha.mp3",
  },
  {
    name:"1-800WRLD, tharealjuggboy, Lord Ralph Lauren, Corle, Vance, Sicko - Kira Returns",
    file:"trapsujo/1-800WRLD, tharealjuggboy, Lord Ralph Lauren, Corle, Vance, Sicko - Kira Returns.mp3",
  },
  {
    name:"1-800WRLD, tharealjuggboy, Lord Ralph Lauren, Corle, Vance, Sicko - Kira Returns",
    file:"trapsujo/1-800WRLD, tharealjuggboy, Lord Ralph Lauren, Corle, Vance, Sicko - Kira Returns.mp3",
  },
  {
    name:"1-800WRLD, tharealjuggboy, Lord Ralph Lauren, Sicko, 1800corle, Montecristo - Carga Chora",
    file:"trapsujo/1-800WRLD, tharealjuggboy, Lord Ralph Lauren, Sicko, 1800corle, Montecristo - Carga Chora.mp3",
  },
  {
    name:"agnvtnc, IceBoy015, Vance, D$ Luqi - No Stress",
    file:"trapsujo/agnvtnc, IceBoy015, Vance, D$ Luqi - No Stress.mp3",
  },
  {
    name:"akajuug - Inicio",
    file:"trapsujo/akajuug - Inicio.mp3",
  },
  {
    name:"akao.47, Brocasito - Cadela's Mexicanas",
    file:"trapsujo/akao.47, Brocasito - Cadela's Mexicanas.mp3",
  },
  {
    name:"aknine9shawty, Baby G2C, Ouroempessoa, akao.47 - Vagaranha",
    file:"trapsujo/aknine9shawty, Baby G2C, Ouroempessoa, akao.47 - Vagaranha.mp3",
  },
  {
    name:"Babymath, Brocasito, Lil dido - Falsos amores!!",
    file:"trapsujo/Babymath, Brocasito, Lil dido - Falsos amores!!.mp3",
  },
  {
    name:"Brandão85 - Nunca Duvide de um Mano",
    file:"trapsujo/Brandão85 - Nunca Duvide de um Mano.mp3",
  },
  {
    name:"Brocasito - O Mundo É Meu",
    file:"trapsujo/Brocasito - O Mundo É Meu.mp3",
  },
  {
    name:"Brocasito - Opp Stoppa",
    file:"trapsujo/Brocasito - Opp Stoppa.mp3",
  },
  {
    name:"Brocasito, Gxrdenx - Bands",
    file:"trapsujo/Brocasito, Gxrdenx - Bands.mp3",
  },
  {
    name:"Brocasito, Yung Lince - Tentando Sair do Gueto",
    file:"trapsujo/Brocasito, Yung Lince - Tentando Sair do Gueto.mp3",
  },
  {
    name:"Cabrxlzin - Fake Luvs",
    file:"trapsujo/Cabrxlzin - Fake Luvs.mp3",
  },
  {
    name:"Danike, Baroni600sabbath - Fumadouro Freestyle",
    file:"trapsujo/Danike, Baroni600sabbath - Fumadouro Freestyle.mp3",
  },
  {
    name:"DomLaike - 4Mola Freestyle",
    file:"trapsujo/DomLaike - 4Mola Freestyle.mp3",
  },
  {
    name:"Gapes, Dougb - Peste Negra",
    file:"trapsujo/Gapes, Dougb - Peste Negra.mp3",
  },
  {
    name:"MYSTIC!, Cabrxlzin, Neto, Uxie Kid, BocaoTudoDeus - Bonde da Ecko",
    file:"trapsujo/MYSTIC!, Cabrxlzin, Neto, Uxie Kid, BocaoTudoDeus - Bonde da Ecko.mp3",
  },
  {
    name:"MYSTIC!, Cabrxlzin, Neto, Uxie Kid, BocaoTudoDeus - Emoji na Cara",
    file:"trapsujo/MYSTIC!, Cabrxlzin, Neto, Uxie Kid, BocaoTudoDeus - Emoji na Cara.mp3",
  },
  {
    name:"MYSTIC!, Uxie Kid, Cabrxlzin, shots!, Neto - Calmo e Posturado",
    file:"trapsujo/MYSTIC!, Uxie Kid, Cabrxlzin, shots!, Neto - Calmo e Posturado.mp3",
  },
  {
    name:"MYSTIC!, Uxie Kid, Neto, Cabrxlzin, BocaoTudoDeus, Yamashita - Vivência",
    file:"trapsujo/MYSTIC!, Uxie Kid, Neto, Cabrxlzin, BocaoTudoDeus, Yamashita - Vivência.mp3",
  },
  {
    name:"NGC Daddy - Real Underground",
    file:"trapsujo/NGC Daddy - Real Underground.mp3",
  },
  {
    name:"Nosred - A Vadia Me Ligou Lá no Iphone",
    file:"trapsujo/Nosred - A Vadia Me Ligou Lá no Iphone.mp3",
  },
  {
    name:"Nosred - Tráfego de P90",
    file:"trapsujo/Nosred - Tráfego de P90.mp3",
  },
  {
    name:"OG BEBEL, Young World - Bandido Não Dança BB - Freestyle",
    file:"trapsujo/OG BEBEL, Young World - Bandido Não Dança BB - Freestyle.mp3",
  },
  {
    name:"PCN boladão, Jpluu, yardoo - Plugshawtycafetão",
    file:"trapsujo/PCN boladão, Jpluu, yardoo - Plugshawtycafetão.mp3",
  },
  {
    name:"PCN boladão, yardoo - Proibido Mas Alivia",
    file:"trapsujo/PCN boladão, yardoo - Proibido Mas Alivia.mp3",
  },
  {
    name:"PCN boladão, yungpedrin, yardoo - Tabaco Com Haxixe",
    file:"trapsujo/PCN boladão, yungpedrin, yardoo - Tabaco Com Haxixe.mp3",
  },
  {
    name:"Pittaplug - 44 Plug",
    file:"trapsujo/Pittaplug - 44 Plug.mp3",
  },
  {
    name:"Rudies Flacko - Bucoração",
    file:"trapsujo/Rudies Flacko - Bucoração.mp3",
  },
  {
    name:"scxttpurple - Tijolos e Vadias",
    file:"trapsujo/scxttpurple - Tijolos e Vadias.mp3",
  },
  {
    name:"Shark47, Deluxo og - P90",
    file:"trapsujo/Shark47, Deluxo og - P90.mp3",
  },
  {
    name:"Shark47, Severo OG - A Culpa é do AK",
    file:"trapsujo/Shark47, Severo OG - A Culpa é do AK.mp3",
  },
  {
    name:"Sicko, 1-800WRLD - Al Pacino",
    file:"trapsujo/Sicko, 1-800WRLD - Al Pacino.mp3",
  },
  {
    name:"tharealjuggboy - Lacoste Jr",
    file:"trapsujo/tharealjuggboy - Lacoste Jrmp3",
  },
  {
    name:"THE BOX, Martelin - SÓ FÉ",
    file:"trapsujo/THE BOX, Martelin - SÓ FÉ.mp3",
  },
  {
    name:"Uxie Kid, Cabrxlzin - P30",
    file:"trapsujo/Uxie Kid, Cabrxlzin - P30.mp3",
  },
  {
    name:"Uxie Kid, Cabrxlzin - P30",
    file:"trapsujo/Uxie Kid, Cabrxlzin - P30.mp3",
  },
  {
    name:"Vance, 1-800WRLD - Malvada Favorita",
    file:"trapsujo/Vance, 1-800WRLD - Malvada Favorita.mp3",
  },
  {
    name:"Vance, 1-800WRLD - Sabrina Sato",
    file:"trapsujo/Vance, 1-800WRLD - Sabrina Sato.mp3",
  },
  {
    name:"Vance, 1-800WRLD - SUBMARINO",
    file:"trapsujo/Vance, 1-800WRLD - SUBMARINO.mp3",
  },
  {
    name:"Vance, 1-800WRLD, Senndy, Cabrxlzin, Baby T - De Novo Não Vamp",
    file:"trapsujo/Vance, 1-800WRLD, Senndy, Cabrxlzin, Baby T - De Novo Não Vamp.mp3",
  },
  {
    name:"Yamashita - Flak Jack",
    file:"trapsujo/Yamashita - Flak Jack.mp3",
  },
  {
    name:"Yamashita, Cabrxlzin - Facetime",
    file:"trapsujo/Yamashita, Cabrxlzin - Facetime.mp3",
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