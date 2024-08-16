

const h1            = document.getElementById("display-string");
const sc_str        = "follow me on my soundcloud!!! >:D";
const letter_length = 15;
let str_index       = 0;
let increase        = true;

function set_display() {
  h1.innerHTML = "";
  for (let i = 0; i < str_index; i++) {
    var str = sc_str.charAt(i);
    h1.innerHTML += str;
  }
}

setInterval(function(){
  if (str_index <= sc_str.length) {
    str_index += 1;
    set_display();
  }
}, 200);



//#region Display Musics

let album_list = [];

//#region ALBUMS

// Radio signals
makeAlbum(
  "radio signals", '../content/img/albums/radiosignals.png', [

    makeSong(
      "globo", "80",
      "../content/audio/albums/radiosignals/globo2.mp3"
    ),
    
  ]
);

// Nostalgia
makeAlbum(
  "nostalgia", '../content/img/albums/nostalgia.png', [

    makeSong(
      "", "not much to say about this one :v", 
      "../content/audio/albums/nostalgia/Nostalgia.mp3"
    ),

    makeSong(
      "", "I wanted to make a track that resembles an old, calming game. I think it sounds wholesome <3", 
      "../content/audio/albums/nostalgia/waterfall.mp3"
    ),
    
    makeSong(
      "", "not much to say about this one, sounds sad", 
      "../content/audio/albums/nostalgia/emotional.mp3"
    ),

  ]
);

// Economic failure
makeAlbum(
  "economic failure - soundtrack", '../content/img/albums/ef.png', [

    makeSong(
      "", "", 
      "../content/audio/albums/ef/coordinates.mp3"
    ),

    makeSong(
      "", "", 
      "../content/audio/albums/ef/him calm 2.mp3"
    ),

    makeSong(
      "", "", 
      "../content/audio/albums/ef/bar.mp3"
    ),

    makeSong(
      "", "", 
      "../content/audio/albums/ef/rekognition.mp3"
    ),

    makeSong(
      "", "", 
      "../content/audio/albums/ef/duck2.mp3", true
    ),

    makeSong(
      "", "", 
      "../content/audio/albums/ef/duck.mp33"
    ),

    makeSong(
      "", "", 
      "../content/audio/albums/ef/afterlife.mp3"
    ),

  ]
);

// WaW
makeAlbum(
  "we are watching", '../content/img/albums/waw.png', [

    makeSong(
      "", "this is the first time I'm using my real guitar, I like the low/dark tone I got for this one", 
      "../content/audio/albums/wearewatching/snd3.mp3"
    ),

    makeSong(
      "", "i untuned all of my strings for this one", 
      "../content/audio/albums/wearewatching/newone.mp3"
    ),

    makeSong(
      "", "adventures", 
      "../content/audio/albums/wearewatching/snd1.mp3"
    ),
    
    makeSong(
      "", "first time using my electric guitar", 
      "../content/audio/albums/wearewatching/nihil.mp3"
    ),

    makeSong(
      "", "recorded this at 1am, more out-of-tempo out-of-tune out-of-touch music", 
      "../content/audio/albums/wearewatching/two minutes.mp3"
    ),

  ]
);

// Other
makeAlbum(
  "other", "../content/img/albums/other.png", [

    makeSong(
      "", "All of the songs below were made 1-2 years ago, so I don't like them as much as the ones above", ""
    ),

    makeSong(
      "sunset", "the bass is distorted for some reason, and the instruments sound like harmonical beehives",
      "../content/audio/albums/other/sunset.mp3"
    ),
    
    makeSong(
      "universe", "my first synthwave ever, the bass is drastic",
      "../content/audio/albums/other/universe.mp3"
    ),
    
    makeSong(
      "sentimental", "how sad was I?",
      "../content/audio/albums/other/sentimental.mp3"
    ),
    
    makeSong(
      "DOWN", "",
      "../content/audio/albums/other/down.mp3", true
    ),
    
    makeSong(
      "END", "",
      "../content/audio/albums/other/end.mp3", true
    ),
    
    makeSong(
      "OLD", "",
      "../content/audio/albums/other/old.mp3", true
    ),

  ]
);

//#endregion

for (var i = 0; i < album_list.length; i++) {
  var id = album_list[i];
  createAlbum(id);
}

function createAlbum(album) {
  var parent = document.getElementById("music-list");

  var music_box         = document.createElement("div");
  music_box.className   = "music-box";

  var album_info        = document.createElement("div");
  album_info.className  = "album-info";
  
  var album_img         = document.createElement("img");
  album_img.classList   = "album-img";
  album_img.src         = album.cover;
  
  var album_title       = document.createElement("h2");
  album_title.className = "album-title";
  album_title.innerHTML = album.title;

  album_info.append(album_img, album_title);
  
  music_box.append(album_info);

  for (let i = 0; i < album.songs.length; i++) {
    var songsDesc   = album.songs[i].description;
    var songsAudio  = album.songs[i].audio;
    var songsLoud   = album.songs[i].loudAdvice;

    var album_songs = document.createElement("div");
    album_songs.className = "album-songs";
    
    var song_box = document.createElement("div");
    song_box.className = "song-box";

    var song_desc = document.createElement("div");
    song_desc.className = "song-description";

    var p1 = document.createElement("p");
    p1.innerHTML = songsDesc;

    var song_controller = document.createElement("div");
    song_controller.className = "song-controller";

    var audio = document.createElement("audio");
    audio.controls = true;
    audio.src = songsAudio;

    if (songsLoud) {
      var p2 = document.createElement("p");
      p2.classList = "warning";
      p2.innerHTML = "loud warning";
      song_box.append(p2);
    }

    song_desc.append(p1);
    song_controller.append(audio);
    song_box.append(song_desc, song_controller);

    album_songs.append(song_box);
    music_box.append(album_songs);
  }

  parent.append(music_box);
}


function makeSong(title, desc, audio, loudAdvice = false) {
  var obj = {
    title: title,
    description: desc,
    audio: audio,
    loudAdvice: loudAdvice,
  }
  
  return obj;
}

function makeAlbum(title, cover, songs) {
  var obj = {
    title: title,
    cover: cover,
    songs: [],
  }

  for (var i = 0; i < songs.length; i++) {
    var id = songs[i];
    var song = {
      title: id.title,
      description: id.description,
      audio: id.audio,
      loudAdvice: id.loudAdvice,
    }

    obj.songs.push(song);
  }

  album_list.push( obj );
}

//#endregion
