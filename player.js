<meta name="viewport" content="width=device-width, initial-scale=1" />
<script src="https://cdn.jsdelivr.net/gh/miko-github/miko-github@v0.2.0/codepen.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.5/jsmediatags.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mp3tag.js@latest/dist/mp3tag.min.js"></script>
  <link rel="stylesheet"  href="https://cdn.jsdelivr.net/gh/miko-github/miko-github@v0.2.0/codepen.scss">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css">


<style>
/* yek-sass (https://github.com/yek-org/yek-sass) */
@import url("https://fonts.googleapis.com/css?family=Montserrat");
*,
*::before,
*::after {
  box-sizing: border-box;
  transition: 0.2s ease all;
}

body,
html {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", "sans-serif";
}

body {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
}

/* powered by yek-sass */
:root {
  --seek_listener_percentage: 0%;
  --volume_listener_percentage: 50%;
}

body {
  align-items: center;
  justify-content: center;
  align-content: center;
  background: url(https://ipfs.io/ipfs/QmbnaT8qCRq7iFJyF2puVJw8FoiZM4o1TioU8u3q2eHPzv?filename=background.png);
  background-repeat: no-repeat;
  background-position: center;
}

/* +++ MAIN +++ */
.music {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 390px;
  height: 180px;
  align-items: center;
  justify-content: center;
  align-content: center;
  position: relative;
  border: 4px #fafcfe solid;
  overflow: auto;
  background-color: #f9fcff;
  box-shadow: 0 4px 7px rgba(0, 46, 99, 0.3);
}
.music {
  border-radius: 8px;
}
.music__main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 89.5%;
  height: 100%;
  position: relative;
  padding: 0;
  margin: 0;
}
.music__image {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

/* +++ METADATA +++ */
.music__meta {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60.8%;
  height: 100%;
  padding: 6px 24px;
}
.music__name {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: calc(100% - 80px);
}
.music__title, .music__description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  padding: 6px 0;
}
.music__title {
  margin: 0;
}
.music__description {
  font-size: 0.8rem;
  color: #5b5d5b;
}
.music__cover {
  width: 38%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.music__image {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  padding: 0;
  margin: 0;
}

/* +++ UPLOAD +++ */
.music--upload::before, .music--upload::after {
  display: block;
  position: absolute;
  background: #f9fcff;
}
.music--upload::after {
  width: 100%;
  height: 100%;
  content: "";
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 90;
}
.music--upload::before {
  width: 95%;
  height: 90%;
  content: "DROP HERE...";
  top: calc(5% - 0px);
  bottom: calc(5% - 0px);
  left: calc(2.5% - 0px);
  right: calc(2.5% - 0px);
  border: 5px dashed #5c9dc0;
  border-radius: 9px;
  line-height: 5;
  text-align: center;
  vertical-align: middle;
  font-size: 2rem;
  font-weight: 800;
  color: #002e63;
  z-index: 95;
}
.music__uploader {
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  top: -100%;
  bottom: 100%;
  opacity: 0;
  background: #fff;
}
.music__uploader--show {
  display: block;
  top: 0;
  bottom: 0;
  z-index: 99;
}

/* +++ CONTROLLERS +++ */
.music__controller {
  width: 10.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.music__btn {
  border: 0;
  outline: 0;
  stroke: 0;
  box-shadow: 0;
  width: 100%;
  height: 33.33%;
  cursor: pointer;
  background-color: transparent;
}
.music__btn i {
  padding: 12px;
  border-radius: 5px;
  will-change: text-shadow, box-shadow, transform, background-color, color, padding-right, padding-left;
}
.music__btn--pause i {
  padding-left: 14px;
  padding-right: 12px;
}
.music__btn:hover i {
  transform: scale(1.2);
  color: #5c9dc0;
  background-color: #eeeeee;
}
.music__btn:active i {
  transform: scale(0.9);
}

/* +++ MIXINS +++ */
.music__mixin, .music__volume {
  width: 50%;
  height: 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.music__mixin {
  align-items: space-between;
  justify-content: space-between;
  align-content: space-between;
  margin-left: -6px;
}
.music__volume_btn, .music__shuffle, .music__repeat, .music__playlist_open {
  border: 0;
  outline: 0;
  stroke: 0;
  box-shadow: 0;
  transform: scale(0.85);
  transition-property: transform;
  cursor: pointer;
  height: 25px;
  background-color: transparent;
}
.music__volume_btn:hover i, .music__shuffle:hover i, .music__repeat:hover i, .music__playlist_open:hover i {
  transform: scale(1.2);
  background-color: #eeeeee;
}
.music__volume_btn:active i, .music__shuffle:active i, .music__repeat:active i, .music__playlist_open:active i {
  transform: scale(0.9);
}
.music__volume_btn i, .music__shuffle i, .music__repeat i, .music__playlist_open i {
  padding: 8px;
  border-radius: 9px;
  will-change: transform, background-color, color, padding-right, padding-left;
}
.music__volume_btn--on i, .music__shuffle--on i, .music__repeat--on i, .music__playlist_open--on i {
  color: #5c9dc0;
}
.music__shuffle, .music__repeat, .music__playlist_open {
  width: 33.33%;
}

/* +++ SEEK/TIMES +++ */
.music__times {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: space-between;
  align-content: space-between;
  width: 130%;
  height: 25px;
  color: #9a9d9a;
}
.music__duration, .music__current_time {
  width: 45%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.music__times, .music__duration, .music__current_time {
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
}
.music__duration {
  text-align: right;
  padding-right: 5px;
}
.music__current_time {
  text-align: left;
  padding-left: 2px;
}
.music__seek {
  width: 100%;
  background-color: #add8e6;
}
.music__seek_handle {
  width: var(--seek_listener_percentage);
  display: block;
  background-color: #5c9dc0;
}
.music__seek, .music__seek_handle {
  height: 3px;
  border-radius: 9px;
  transition-timing-function: ease-in-out;
  cursor: pointer;
  will-change: height;
}
.music__seek:hover, .music__seek:hover .music__seek_handle {
  height: 5px;
}

/** +++ VOLUME +++ **/
.music__volume {
  align-items: center;
  justify-content: center;
  align-content: center;
}
.music__volume_btn {
  width: 30%;
  transform: translate(-7px, -25%);
}
.music__volume_range {
  width: 60%;
  transform: translateY(-70%);
  background-color: #add8e6;
}
.music__volume_handle {
  width: var(--volume_listener_percentage);
  display: block;
  background-color: #5c9dc0;
}
.music__volume_range, .music__volume_handle {
  height: 3px;
  border-radius: 9px;
  transition-timing-function: ease-in-out;
  cursor: pointer;
}

/* +++ PLAYLIST +++ */
.music__playlist {
  transition: 0.3s;
  position: absolute;
  top: 100%;
  left: 0;
  bottom: 100%;
  right: 0;
  z-index: 70;
  display: none;
}
.music__playlist--open, .music__playlist--on {
  display: block;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  top: 0;
  bottom: 0;
  background: #eeeeee;
}

.music__playlist,
.playlist__track_list {
  overflow: hidden;
}

.playlist__track_list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
}

.playlist__close_btn {
  border: 0;
  outline: 0;
  stroke: 0;
  box-shadow: 0;
  transform: scale(0.85);
  transition-property: transform;
  cursor: pointer;
  position: absolute;
  top: 5px;
}
.playlist__close_btn:hover i {
  transform: scale(1.2);
  background-color: #eeeeee;
}
.playlist__close_btn:active i {
  transform: scale(0.9);
}
.playlist__track_list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  align-content: flex-start;
}
.playlist__track_list:focus {
  border: 0;
  outline: 0;
  stroke: 0;
  box-shadow: 0;
}
.playlist__track {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  height: 90px;
  background-color: #f9fcff;
  margin: 9px auto;
  padding: 10px;
  border-radius: 15px;
}
.playlist__track:hover {
  background-color: #e5eff9;
  cursor: pointer;
}
.playlist__track--current {
  background: bisque;
}
.playlist__cover {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  padding: 0;
  margin: 0;
  width: 70px;
  height: 70px;
  border-radius: 9px;
}
.playlist__meta {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: calc(100% - $--cover-size);
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
  align-content: flex-start;
  padding: 9px;
}
.playlist__title, .playlist__artist {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
}
</style>
</head>
<body>


<div id="music-player" class="music music__player">
  <audio style="display: none" id="music-audio" src="https://ipfs.io/ipfs/Qmc3Dhm5MyJcnaxJcqMEaFcU4ryq3S4LcjDssiFSUyZzYV?filename=whoami.mp3" preload="metadata" volume="0.2"></audio>
  <input type="file" multiple class="music__uploader" name="file-audio" id="file-audio" accept="audio/*" />
  <div class="music__controller">
    <button id="music-backward" title="backward" class="music__btn music__btn--back">
      <!-- ALT : fa-[step, fast, ]-backward -->
      <i class="fa fa-fast-backward"></i>
    </button>
    <button id="music-play" title="play" class="music__btn music__btn--play">
      <i class="fa fa-play"></i>
    </button>
    <button id="music-forward" title="forward" class="music__btn music__btn--next">
      <!-- ALT : fa-[step, fast, ]-forward -->
      <i class="fa fa-fast-forward"></i>
    </button>
  </div>
  <div class="music__main">
    <div id="music-playlist" class="music__playlist">
      <button type="button" id="playlist-close-btn" class="playlist__close_btn">
        <i class="fa fa-times"></i>
      </button>
      <ul class="playlist__track_list" id="playlist-tracks" tabindex="0"></ul>
    </div>
    <div class="music__meta">
      <div class="music__name">
        <h3 id="music-title" class="music__title">Who am I</h3>
        <span id="music-desc" class="music__description">
          Necksmile
        </span>
      </div>

      <div class="music__mixin">
        <!-- STATE : --[off | on: [once | all]] -->
        <button id="music-repeat" class="music__repeat music__repeat--on music__repeat--all">
          <!-- ALT : fa-[repeat, sync, sync-alt, retweet, retweet-alt, redo, redo-alt] -->
          <i class="fa fa-repeat"></i>
        </button>
        <!-- STATE : --[off | on] -->
        <button id="music-shuffle" class="music__shuffle">
          <i class="fa fa-random"></i>
        </button>
        <!-- STATE : --[off | on] -->
        <button id="music-playlist-open" class="music__playlist_open">
          <i class="fa fa-list-music"></i>
        </button>
      </div>
      <div class="music__volume" title="50%">
        <button id="music-volume-btn" class="music__volume_btn">
          <i class="fa fa-volume"></i>
        </button>
        <div id="music-volume" class="music__volume_range">
          <span class="music__volume_handle"></span>
        </div>
      </div>

      <div class="music__times">
        <div id="music-seek" class="music__seek">
          <span class="music__seek_handle"></span>
        </div>
        <span id="music-current-time" class="music__current_time">
          00:00:00
        </span>
        <span id="music-duration" class="music__duration">02:33</span>
      </div>
    </div>
    <div class="music__cover">
      <img id="music-cover" class="music__image" src="https://ipfs.io/ipfs/QmScNBjnJ7SF7zBf95DXC1RpETBmB9i71tSgAwzkM3jrjD?filename=album.png" alt="mini music player - miko-github" />
    </div>
  </div>
</div>




<script>

const $_player = query("#music-player");
const $_file = query("#file-audio");
const $_play = query("#music-play");
const $_forward = query("#music-forward");
const $_backward = query("#music-backward");
const $_seek = query("#music-seek");
const $_volume = query("#music-volume");
const $_volume_btn = query("#music-volume-btn");
const $_duration = query("#music-duration");
const $_currentTime = query("#music-current-time");
const $_trackName = query("#music-title");
const $_artist = query("#music-desc");
const $_repeat = query("#music-repeat");
const $_shuffle = query("#music-shuffle");
const $_playlist_open = query("#music-playlist-open");
const $_playlist_close = query("#playlist-close-btn");
const $_playlist = query("#music-playlist");
const $_playlist_tracks = query("#playlist-tracks");
const $audio = query("#music-audio");
// is-state
const state = {
  lastVolume: 0.5,
  currentTrackIndex: 0,
  repeatCount: 2,
  isShuffle: false,
  isPlaylist: false,
  playlist: {
    currentItem: null
  }
};
const defaultTrack = {
  // id: (() => trackList.slice(-1).id + 1)(),
  cover: `https://www.iphonefaq.org/files/styles/large/public/apple_music.jpg?itok=nqYGxWgh`,
  title: `Unknown`,
  artist: `unknown`
};
const fixPath = `https://raw.githubusercontent.com/miko-github/miko-github/gh_assets/assets/sounds`;
// TODO : use online src link
// NOTE : artist can be array of artist [a, b, ...] also
let trackList = [
  {
    id: 0,
    title: `Who Am I`,
    src: `https://ipfs.io/ipfs/Qmc3Dhm5MyJcnaxJcqMEaFcU4ryq3S4LcjDssiFSUyZzYV?filename=whoami.mp3`,
    artist: `Necksmile`,
    
  },
  {
    id: 1,
    title: `Magoo`,
    src: `https://ipfs.io/ipfs/QmQHXp2TH64WCcTMX6KXAztQAViJpXUN1ftKBa4SFCrrmt?filename=magoo.mp3`,
    artist: `Necksmile`,
    cover: `https://ipfs.io/ipfs/QmScNBjnJ7SF7zBf95DXC1RpETBmB9i71tSgAwzkM3jrjD?filename=album.png`
  },
  {
    id: 2,
    title: `Long As I Live`,
    src: `https://ipfs.io/ipfs/QmfC8bmdCpMHCTK2ktYJRZoBLvUwne4Cr2DM1FBYFKSCWd?filename=longasilive.mp3`,
    artist: `Necksmile`,
    cover: `https://ipfs.io/ipfs/QmScNBjnJ7SF7zBf95DXC1RpETBmB9i71tSgAwzkM3jrjD?filename=album.png`
  },
  {
    id: 3,
    title: `All Systems Go`,
    src: `https://ipfs.io/ipfs/Qme691yfgimEQgy6SdBNfWsZzcypsZyK8T24guNVrzgmMv?filename=allsystemsgo.mp3`,
    artist: `Necksmile`,
    cover: `https://ipfs.io/ipfs/QmScNBjnJ7SF7zBf95DXC1RpETBmB9i71tSgAwzkM3jrjD?filename=album.png`
  },
  {
    id: 4,
    title: `Battleship Inferior`,
    src: `https://ipfs.io/ipfs/Qmf9j5brZipL7UzDZqnqeByY182o9QNG8jBBbaGx6bk2AQ?filename=battleshipinferior.mp3`,
    artist: `Necksmile`,
    cover: `https://ipfs.io/ipfs/QmScNBjnJ7SF7zBf95DXC1RpETBmB9i71tSgAwzkM3jrjD?filename=album.png`
  },
  {
    id: 5,
    title: `Canvas`,
    src: `https://ipfs.io/ipfs/QmbwCUWzjJJxQcbXsAhi6E9Qphf2xS7pxni7jRuJukeFJK?filename=canvas.mp3`,
    artist: `Necksmile`,
    cover: `https://ipfs.io/ipfs/QmScNBjnJ7SF7zBf95DXC1RpETBmB9i71tSgAwzkM3jrjD?filename=album.png`
  },
  {
    id: 6,
    title: `Cold`,
    src: `https://ipfs.io/ipfs/QmNM9aYqLDRUZr4sd6G3dik2NHEKVQVSHKvUZ9eQ4nQ3zq?filename=cold.mp3`,
    artist: `Necksmile`,
    cover: `https://ipfs.io/ipfs/QmScNBjnJ7SF7zBf95DXC1RpETBmB9i71tSgAwzkM3jrjD?filename=album.png`
  },
  {
    id: 7,
    title: `Have My Fist`,
    src: `https://ipfs.io/ipfs/QmXiXK7UKmc4PJS38xQ8JUiKYUbyWzjxcfJHoG5k5rHP4m?filename=havemyfist.mp3`,
    artist: `Necksmile`,
    cover: `https://ipfs.io/ipfs/QmScNBjnJ7SF7zBf95DXC1RpETBmB9i71tSgAwzkM3jrjD?filename=album.png`
  },
  {
    id: 8,
    title: `Stuck Pig`,
    src: `https://ipfs.io/ipfs/QmctM2E9MQJrN6hiPBZkMFMic4VqpFErKUDLAnRADARYeG?filename=stuckpig.mp3`,
    artist: `Necksmile`,
    cover: `https://ipfs.io/ipfs/QmScNBjnJ7SF7zBf95DXC1RpETBmB9i71tSgAwzkM3jrjD?filename=album.png`
  },
  {
    id: 9,
    title: `The Longing`,
    src: `https://ipfs.io/ipfs/QmPg2wpREHAB7q53ZpVN2S5aruuZuyPUuSvbiz8H9th7Bq?filename=thelonging.mp3`,
    artist: `Necksmile`,
    cover: `https://ipfs.io/ipfs/QmScNBjnJ7SF7zBf95DXC1RpETBmB9i71tSgAwzkM3jrjD?filename=album.png`
  },
  {
    id: 10,
    title: `Wake Up - Coheed Cover`,
    src: `https://ipfs.io/ipfs/QmXK2Y323gAs6EaggzoRFjptgJ5KzzxsaPcdM7guaTzpAR?filename=wakeupcoheed.mp3`,
    artist: `Necksmile`,
    cover: `https://ipfs.io/ipfs/QmScNBjnJ7SF7zBf95DXC1RpETBmB9i71tSgAwzkM3jrjD?filename=album.png`
  },
];
  
// +++ HELPER FUNCTIONS +++ //

function fixArtist(artist) {
  if (isType(artist, "array")) return artist.join(" & ");
  return artist;
}
function stopTrack() {
  $audio.pause();
  $audio.currentTime = 0;
  fixVariable("seek_listener_percentage", `0%`);
}
function goShuffle() {
  let shuffleIndex = fixRandom(0, trackList.length - 1);
  let selectedTrack = trackList[shuffleIndex];
  // $audio.pause();
  updateMetaData(selectedTrack.src);
  $audio.play();
  return selectedTrack;
}

function goForward() {
  if (state.isShuffle) return goShuffle();

  if (state.isPlaylist) goCurrentPlaylistItem();

  // FIXME : `$audio.pause();` should be before changes
  state.currentTrackIndex +=
    state.currentTrackIndex + 1 >= trackList.length
      ? -(trackList.length - 1)
      : 1;
  updateMetaData(trackList[state.currentTrackIndex].src);
  $audio.play();
}
function goBackward() {
  if (state.isShuffle) return goShuffle();

  if (state.isPlaylist) goCurrentPlaylistItem();

  // FIXME : `$audio.pause();` should be before changes and play
  state.currentTrackIndex -=
    state.currentTrackIndex - 1 < 0 ? -(trackList.length - 1) : 1;
  updateMetaData(trackList[state.currentTrackIndex].src);
  $audio.play();
}
function updateMetaData(src) {
  let currentTrack = trackList[state.currentTrackIndex];
  $_trackName.textContent = currentTrack.title || defaultTrack.title;
  $_artist.textContent = fixArtist(currentTrack.artist) || defaultTrack.artist;
  $_cover.setAttribute("src", currentTrack.cover || defaultTrack.cover);
  return src && $audio.setAttribute("src", src);
}
function updateRepeat({ repeatCount }) {
  // TODO : refactor
  switch (repeatCount) {
    case 2:
    default:
      $_repeat.className.indexOf("music__repeat--once") != -1 &&
        $_repeat.classList.remove("music__repeat--once");
      $_repeat.className.indexOf("music__repeat--on") == -1 &&
        $_repeat.classList.add("music__repeat--on");
      $_repeat.classList.add("music__repeat--all");
      break;
    case 0:
      $_repeat.className.indexOf("music__repeat--all") != -1 &&
        $_repeat.classList.remove("music__repeat--all");
      $_repeat.className.indexOf("music__repeat--once") != -1 &&
        $_repeat.classList.remove("music__repeat--once");
      $_repeat.className.indexOf("music__repeat--on") != -1 &&
        $_repeat.classList.remove("music__repeat--on");
      break;
    case 1:
      $_repeat.className.indexOf("music__repeat--all") != -1 &&
        $_repeat.classList.remove("music__repeat--all");
      $_repeat.className.indexOf("music__repeat--on") == -1 &&
        $_repeat.classList.add("music__repeat--on");
      $_repeat.classList.add("music__repeat--once");
      break;
  }

  return repeatCount === 1
    ? $_repeat.firstElementChild.classList.replace("fa-repeat", "fa-repeat-1")
    : $_repeat.firstElementChild.classList.replace("fa-repeat-1", "fa-repeat");
}

function goCurrentPlaylistItem() {
  let $currentItem = [...$_playlist_tracks.children].filter(
    ($track) =>
      parseInt($track.dataset.id) == trackList[state.currentTrackIndex].id
  )[0];
  [...$_playlist_tracks.children].map(
    ($track) =>
      $track.className.indexOf("playlist__track--current") != -1 &&
      $track.classList.remove("playlist__track--current")
  );
  $currentItem.className.indexOf("playlist__track--current") == -1 &&
    $currentItem.classList.add("playlist__track--current");
  $currentItem.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
}
function muteVolume() {
  let $this = $_volume_btn.firstElementChild;
  fixVariable("volume_listener_percentage", `0%`);
  $this.classList.remove("fa-volume");
  $this.classList.add("fa-volume-mute");
  $audio.volume = 0;
}
function unMuteVolume() {
  let $this = $_volume_btn.firstElementChild;
  fixVariable(
    "volume_listener_percentage",
    `${fixFloat(state.lastVolume * 100, 3)}%`
  );
  $audio.volume = state.lastVolume;
  $this.classList.remove("fa-volume-mute");
  $this.classList.add("fa-volume");
}

// listener(window, 'load', () => ($audio.volume = 0.5));

// TODO : playlist
function generatePlaylist(tracks = trackList) {
  const playlistItem = ({ id, src, cover, title, artist }) => {
    const bem = "playlist";
    return createElement(
      "li",
      {
        class: `${bem}__track`,
        id: `playlist-track-${id}`,
        "data-src": src,
        "data-id": id
      },
      [
        createElement("img", {
          src: cover,
          class: `${bem}__cover`,
          alt: `cover of ${title} from ${fixArtist(artist)}`
        }),
        createElement("div", { class: `${bem}__meta` }, [
          // TOGGLE : [h3:strong]
          createElement("strong", { class: `${bem}__title` }, title),
          createElement("span", { class: `${bem}__artist` }, fixArtist(artist))
        ])
      ]
    );
  };
  let $tracks = tracks.map((track) => playlistItem(track));
  $tracks.map(($track) => append($_playlist_tracks, $track));
  return goCurrentPlaylistItem();
}

// +++ EVENT HANDLERS +++ //

// [playlist]:click
listener($_playlist_open, "click", () => {
  state.isPlaylist = true;
  $_playlist.classList.add("music__playlist--on");
  return generatePlaylist();
});
listener($_playlist_close, "click", () => {
  state.isPlaylist = false;
  $_playlist_tracks.innerHTML = ``;
  $_playlist.classList.remove("music__playlist--on");
});

// [repeat-btn]:click
listener($_repeat, "click", () => {
  state.repeatCount -= state.repeatCount - 1 < 0 ? -2 : 1;
  updateRepeat(state);
});
// [shuffle-btn]:click
listener($_shuffle, "click", () => {
  $_shuffle.classList.toggle("music__shuffle--on");
  state.isShuffle = !state.isShuffle;
});

// [file]:change
listener($_file, "change", () => {
  // $audio.pause();
  [...Array($_file.files.length).keys()].forEach((index) => {
    let file = $_file.files[index];
    let src = URL.createObjectURL(file);
    fetchMetadata(file, (tags) => {
      let track = {
        id: (() => trackList[trackList.length - 1].id + 1)(),
        title: tags.title,
        cover: tags.picture && fetchCover(tags.picture),
        artist: tags.artist,
        src
      };
      trackList.push(track);
    });
    updateMetaData(src);
  });
  $audio.play();
});

// ALT
/*
listener($_file, 'change', () => {
  $audio.pause();
  [...Array($_file.files.length).keys()].forEach((index) => {
    let file = $_file.files[index];
    let src = URL.createObjectURL(file);
    fetchMetadata2(file, (tags) => {
      let track = {
        id: (() => trackList[trackList.length - 1].id + 1)(),
        title: tags.title,
        cover: tags.v2.APIC[0] && fetchCover(tags.v2.APIC[0]),
        artist: tags.v2.TPE1,
        src,
      };
      trackList.push(track);
    });
    updateMetaData(src);
  });
  $audio.play();
});
*/

// [file]:drag/drop
window.ondragenter = (e) => {
  // $audio.pause();
  $_file.classList.add("music__uploader--show");
  $_player.classList.add("music--upload");
};
$_player.ondrop = () => {
  $audio.play();
  $_file.classList.remove("music__uploader--show");
  $_player.classList.remove("music--upload");
};

// [audio]:play
listener($audio, "playing", () => updateMetaData());

// [audio]:canplaythrough
listener(
  $audio,
  "durationchange",
  () => ($_duration.textContent = fixMoment($audio.duration))
);

// [audio]:time-update
listener(
  $audio,
  "timeupdate",
  () => ($_currentTime.textContent = fixMoment($audio.currentTime))
);

// [auido]:time-update
listener($audio, "timeupdate", () => {
  let percentage = fixPercentage(
    parseFloat($audio.currentTime),
    parseFloat($audio.duration)
  );
  fixVariable("seek_listener_percentage", `${percentage}%`);
});

// [seek]:seeked
listener($_seek, "mousedown", () => $audio.pause());
listener($_seek, "mouseup", () => $audio.play());
listener($_seek, "click", (ev) => {
  let { offsetX: value } = ev;
  let { offsetWidth: max } = $_seek;
  // calc motion
  let percentage = fixPercentage(value, max);
  // TOGGLE
  fixVariable("seek_listener_percentage", `${percentage}%`);
  // calc value
  let amount = fixFloat((percentage / 100) * parseFloat($audio.duration), 3);
  $audio.currentTime = amount;
});

// [volume]:seeked
listener($_volume, "click", (ev) => {
  let { offsetX: value } = ev;
  let { offsetWidth: max } = $_volume;
  // calc motion
  let percentage = fixPercentage(value, max);
  // TOGGLE
  fixVariable("volume_listener_percentage", `${percentage}%`);
  // calc value
  let amount = fixFloat(percentage / 100, 3);
  if ($audio.volume <= 0.1) return muteVolume();
  $audio.volume = amount;
});
listener($audio, "volumechange", () => {
  $_volume.setAttribute(`title`, `${fixFloat($audio.volume * 100, 3)}%`);
});
listener($_volume_btn, "click", () => {
  $_volume_btn.firstElementChild.className.indexOf(`fa-volume-mute`) != -1
    ? unMuteVolume()
    : (() => {
        state.lastVolume = $audio.volume >= 0.1 ? $audio.volume : 0.1;
        muteVolume();
      })();
});

// [backward]:click
listener($_backward, "click", () => goBackward());

// [forward]:click
listener($_forward, "click", () => goForward());

listener(
  $audio,
  "ended",
  () =>
    // repeat-all-track
    (state.repeatCount === 2 && $audio.play()) ||
    // repeat-once-track
    (state.repeatCount !== 1 && goForward()) ||
    // dont-repeat
    stopTrack()
);

// [play]:click
listener($_play, "click", () =>
  $audio.paused ? $audio.play() : $audio.pause()
);

// [audio]:play
listener($audio, "play", () => {
  $_play.setAttribute("title", "play");
  $_play.classList.replace(`music__btn--pause`, `music__btn--play`);
  $_play.children.item(0).classList.replace("fa-play", "fa-pause");
});

// [audio]:pause
listener($audio, "pause", () => {
  $_play.setAttribute("title", "pause");
  $_play.classList.replace(`music__btn--play`, `music__btn--pause`);
  $_play.children.item(0).classList.replace("fa-pause", "fa-play");
});

// +++ VENDORS +++ //

// NOTE : src from `https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.5/jsmediatags.min.js`
function fetchMetadata(audio, cb) {
  jsmediatags.read(audio, {
    onSuccess: ({ tags }) => cb(tags),
    onError: function (error) {
      console.log(error);
    }
  });
}

// FIXME : need to sync with other codes
// NOTE : src from `https://cdn.jsdelivr.net/npm/mp3tag.js@latest/dist/mp3tag.min.js`
function fetchMetadata2(url, cb) {
  const reader = new FileReader();
  reader.onload = function () {
    const buffer = this.result;
    // MP3Tag Usage
    const mp3tag = new MP3Tag(buffer);
    mp3tag.read();
    cb(mp3tag.tags);
  };
  reader.readAsArrayBuffer(url);
}

function fetchCover({ data, format }) {
  let base64String = "";
  for (let item of data) {
    base64String += String.fromCharCode(item);
  }
  return `data:${data.format};base64,${window.btoa(base64String)}`;
}

function fixFloat(value, decimals) {
  return Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);
}

function fixPad(number) {
  let num = parseInt(number);
  return num >= 0 && num <= 9 ? `0${num}` : num;
}

function fixPercentage(value, total) {
  return fixFloat((value / total) * 100, 3);
}

function fixMoment(time) {
  let $time = moment.duration(parseInt(time), "seconds");
  let hour = $time.hours();
  let min = $time.minutes();
  let sec = $time.seconds();
  let _hour = hour > 0 ? `${fixPad(hour)} : ` : ``;
  let _min_sec = `${fixPad(min)} : ${fixPad(sec)}`;
  return `${_hour}${_min_sec}`;
}

function fixVariable(variable, value) {
  document.documentElement.style.setProperty(`--${variable}`, value);
}

// FIXME : need to use new methods
function fixBase64(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = `blob` || "arraybuffer";
  xhr.onload = function () {
    // NOTE : metadata as callback, response is `arrayBuffer`
    if (xhr.status === 200) return cb(xhr.response);
    return console.log(`[fixBase64] : xhr error!`);
  };
  xhr.onerror = () => console.log(`[fixBase64] : network error!`);
  xhr.send();
}

function fixRandom(min, max) {
  let _min = max ? min : 0;
  let _max = max || min;
  return Math.floor(Math.random() * (_max - _min + 1)) + _min;
}
