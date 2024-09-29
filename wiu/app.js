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
    name:"Borges, WIU, TkN, Kizzy, Galdino, Pugli - Avisa Minha Mãe",
    file:"ThisIsWiu/Avisa_Minha_Mãe.mp3",
  },
  {
    name:"Chefin, Vulgo FK, WIU, Mainstreet, Portugal No Beat, Neconbeat - Última Coisa",
    file:"ThisIsWiu/Ultima_Coisa.mp3",
  },
  {
    name:"DENNIS, Veigh, WIU, MC PH, Budah, Djonga, Mc Don Juan, Hungria, Orochi, Azzy - Depois do Baile",
    file:"ThisIsWiu/Depois_Do_Baile.mp3",
  },
  {
    name:"Doode, Reid, WIU, Lil Whind - Drip da Roça 2",
    file:"ThisIsWiu/Doode, Reid, WIU, Lil Whind - Drip da Roça 2.mp3",
  },
  {
    name:"Felipe Amorim, MC PH, WIU, DG e Batidão Stronda - Tenho que Me Decidir",
    file:"ThisIsWiu/Felipe Amorim, MC PH, WIU, DG e Batidão Stronda - Tenho que Me Decidir.mp3",
  },
  {
    name:"G.A, WIU, Supernova Ent, Slaasty, Azin - ei mô",
    file:"ThisIsWiu/G.A, WIU, Supernova Ent, Slaasty, Azin - ei mô.mp3",
  },
  {
    name:"Kawe, WIU - Carolina",
    file:"ThisIsWiu/Kawe, WIU - Carolina.mp3",
  },
  {
    name:"Kawe, WIU - Levemente",
    file:"ThisIsWiu/Kawe, WIU - Levemente.mp3",
  },
  {
    name:"Kawe, WIU, Original Quality - Jovens do Reggae",
    file:"ThisIsWiu/Kawe, WIU, Original Quality - Jovens do Reggae.mp3",
  },
  {
    name:"Marcos Baroni, Teto, Edi Rock, WIU, Alee, Brandão85 - Melhor Dia 7 - Sossego",
    file:"ThisIsWiu/Marcos Baroni, Teto, Edi Rock, WIU, Alee, Brandão85 - Melhor Dia 7 - Sossego.mp3",
  },
  {
    name:"Marcos Baroni, WIU, MC Hariel, Mc IG, Mc Kako, Vulgo FK, Tuzão - Melhor Dia 13 - Era Uma Vez",
    file:"ThisIsWiu/Marcos Baroni, WIU, MC Hariel, Mc IG, Mc Kako, Vulgo FK, Tuzão - Melhor Dia 13 - Era Uma Vez.mp3",
  },
  {
    name:"Matuê, WIU, Teto - Vampiro",
    file:"ThisIsWiu/Matuê, WIU, Teto - Vampiro.mp3",
  },
  {
    name:"MC Caverinha, WIU, Murillo e LT no Beat - Eu sou O Cara",
    file:"ThisIsWiu/MC Caverinha, WIU, Murillo e LT no Beat - Eu sou O Cara.mp3",
  },
  {
    name:"Mc IG, MC Ryan SP, WIU, DJ WN, MC PH, Murillo e LT no Beat - Afrodite",
    file:"ThisIsWiu/Mc IG, MC Ryan SP, WIU, DJ WN, MC PH, Murillo e LT no Beat - Afrodite.mp3",
  },
  {
    name:"MC PH, Borges, WIU, Pedro Lotto, WEY - Tenho Que Me Decidir",
    file:"ThisIsWiu/MC PH, Borges, WIU, Pedro Lotto, WEY - Tenho Que Me Decidir.mp3",
  },
  {
    name:"MC PH, WIU, DJ Gui, Valtinho No Beat, Solanno - LOVE LOVE",
    file:"ThisIsWiu/MC PH, WIU, DJ Gui, Valtinho No Beat, Solanno - LOVE LOVE.mp3",
  },
  {
    name:"Oruam, WIU, Chris MC, Mainstreet - Para de Mentir",
    file:"ThisIsWiu/Oruam, WIU, Chris MC, Mainstreet - Para de Mentir.mp3",
  },
  {
    name:"Pineapple StormTv, Cesar Mc, MC Ryan SP, Lourena, Major RD, Derxan, WIU, Djonga, KayBlack, Gloria Groove, Salve Malak - Poesia Acústica 14",
    file:"ThisIsWiu/Pineapple StormTv, Cesar Mc, MC Ryan SP, Lourena, Major RD, Derxan, WIU, Djonga, KayBlack, Gloria Groove, Salve Malak - Poesia Acústica 14.mp3",
  },
  {
    name:"Rogerinho, WIU, Ariel Donato - Sereia Do Nordeste",
    file:"ThisIsWiu/Rogerinho, WIU, Ariel Donato - Sereia Do Nordeste.mp3",
  },
  {
    name:"Ryu, The Runner, Vulgo FK, WIU - Reinício",
    file:"ThisIsWiu/Ryu, The Runner, Vulgo FK, WIU - Reinício.mp3",
  },
  {
    name:"Teto, WIU, Matuê - Flow Espacial",
    file:"ThisIsWiu/Teto, WIU, Matuê - Flow Espacial.mp3",
  },
  {
    name:"WIU - Angelina",
    file:"ThisIsWiu/WIU - Angelina.mp3",
  },
  {
    name:"WIU - Casa do Tio Wiu",
    file:"ThisIsWiu/WIU - Casa do Tio Wiu.mp3",
  },
  {
    name:"WIU - Coração de Gelo",
    file:"ThisIsWiu/WIU - Coração de Gelo.mp3",
  },
  {
    name:"WIU - Esquece Pt. 2",
    file:"ThisIsWiu/WIU - Esquece Pt. 2.mp3",
  },
  {
    name:"WIU - Eu Fumei a Árvore de Natal",
    file:"ThisIsWiu/WIU - Eu Fumei a Árvore de Natal.mp3",
  },
  {
    name:"WIU - Eu Não Ouço Mais Trap",
    file:"ThisIsWiu/WIU - Eu Não Ouço Mais Trap.mp3",
  },
  {
    name:"WIU - Lágrimas de Crocodilo",
    file:"ThisIsWiu/WIU - Lágrimas de Crocodilo.mp3",
  },
  {
    name:"WIU - Lealdade",
    file:"ThisIsWiu/WIU - Lealdade.mp3",
  },
  {
    name:"WIU - Medo de Quem",
    file:"ThisIsWiu/WIU - Medo de Quem.mp3",
  },
  {
    name:"WIU - Não Me Liga 00-00",
    file:"ThisIsWiu/WIU - Não Me Liga 00-00.mp3",
  },
  {
    name:"WIU - Natal Solteiro",
    file:"ThisIsWiu/WIU - Natal Solteiro.mp3",
  },
  {
    name:"WIU - Olha oq ce fez comigo",
    file:"ThisIsWiu/WIU - Olha oq ce fez comigo.mp3",
  },
  {
    name:"WIU - Oração",
    file:"ThisIsWiu/WIU - Oração.mp3",
  },
  {
    name:"WIU - Pitbull",
    file:"ThisIsWiu/WIU - Pitbull.mp3",
  },
  {
    name:"WIU - Rainha da Finesse",
    file:"ThisIsWiu/WIU - Rainha da Finesse.mp3",
  },
  {
    name:"WIU - Só de Mal",
    file:"ThisIsWiu/WIU - Só de Mal.mp3",
  },
  {
    name:"WIU - Vidigal",
    file:"ThisIsWiu/WIU - Vidigal.mp3",
  },
  {
    name:"WIU, Matuê - Mantém",
    file:"ThisIsWiu/WIU, Matuê - Mantém.mp3",
  },
  {
    name:"WIU, Matuê, Teto - Brinca Demais",
    file:"ThisIsWiu/WIU, Matuê, Teto - Brinca Demais.mp3",
  },
  {
    name:"WIU, MC Ryan SP - Felina",
    file:"ThisIsWiu/WIU, MC Ryan SP - Felina.mp3",
  },
  {
    name:"WIU, Oruam - Horas Iguais",
    file:"ThisIsWiu/WIU, Oruam - Horas Iguais.mp3",
  },
  {
    name:"WIU, Teto - Problemas de um Milionário",
    file:"ThisIsWiu/WIU, Teto - Problemas de um Milionário.mp3",
  },
  {
    name:"Yunk Vino, WIU, Labbel Rec - Vlife",
    file:"ThisIsWiu/Yunk Vino, WIU, Labbel Rec - Vlife.mp3",
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