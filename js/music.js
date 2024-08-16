
const SONG_LIST = document.getElementById("song-list");
const ALBUM_TITLE = document.getElementById("album-name");
const ALBUM_COVER = document.getElementById("album-cover");


class Song {
  constructor(songName, src) {
    this.songName = songName;
    this.src = src;
  }
}

class Album {
  constructor(albumName, albumCover, songList) {
    this.albumName = albumName;
    this.albumCover = albumCover;
    this.songList = songList;
  }
}

let albumList = [];

var ALBUM1 = new Album("Radio Signals", "./content/img/album 1.png", []);
ALBUM1.songList.push(new Song("Radio Signals", "./content/audio/albums/radiosignals/globo2.mp3"));
ALBUM1.songList.push(new Song("Oh, child", "./content/audio/albums/radiosignals/Ela era um anjo.mp3"));
ALBUM1.songList.push(new Song("Horrific", "./content/audio/albums/radiosignals/emotional.mp3"));
ALBUM1.songList.push(new Song("Box", "./content/audio/albums/radiosignals/Nostalgia.mp3"));
ALBUM1.songList.push(new Song("nothingness", "./content/audio/sad nothingness.mp3"));
albumList.push(ALBUM1);

var ALBUM1 = new Album("terrible old doom metal project", "./content/img/reverendo fascista.png", []);
ALBUM1.songList.push(new Song("Redundante Mente", "./content/audio/albums/reverendo/Stoner metal.mp3"));
ALBUM1.songList.push(new Song("Trazedores da Morte", "./content/audio/albums/reverendo/doom metal.wav"));
ALBUM1.songList.push(new Song("Marte", "./content/audio/albums/reverendo/GUITAR MOOD.mp3"));
albumList.push(ALBUM1);

var ALBUM1 = new Album("We are Watching", "./content/img/waw.png", []);
ALBUM1.songList.push(new Song("1", "./content/audio/albums/wearewatching/newone.mp3"));
ALBUM1.songList.push(new Song("2", "./content/audio/albums/wearewatching/nihil.mp3"));
ALBUM1.songList.push(new Song("3", "./content/audio/albums/wearewatching/snd1.mp3"));
ALBUM1.songList.push(new Song("4", "./content/audio/albums/wearewatching/snd3.mp3"));
ALBUM1.songList.push(new Song("5", "./content/audio/albums/wearewatching/two minutes.mp3"));
albumList.push(ALBUM1);

let albumIndex = 0;


document.getElementById("left-album").onclick = () => {
  if (albumIndex > 0) albumIndex --;
  update();
}

document.getElementById("right-album").onclick = () => {
  if (albumIndex < albumList.length-1) albumIndex ++;
  update();
}


function update() {
  var a = albumList[albumIndex];
  ALBUM_TITLE.innerHTML = a.albumName;
  ALBUM_COVER.src = a.albumCover;

  while (SONG_LIST.lastElementChild) {
    SONG_LIST.removeChild(SONG_LIST.lastElementChild);
  }

  for (var i = 0; i < a.songList.length; ++i) {
    createSongElement(a.songList[i].songName, a.songList[i].src);
  }
}

function createSongElement(title, src) {
  var div = document.createElement("div");
  div.className = "song";
  var p = document.createElement("p");
  p.innerHTML = title;
  var audio = document.createElement("audio");
  audio.controls = true;
  var source = document.createElement("source");
  source.src = src;
  source.type = "audio/mp3";

  audio.append(source);
  div.append(p);
  div.append(audio);
  SONG_LIST.append(div);
}

update();

