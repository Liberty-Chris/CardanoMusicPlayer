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
