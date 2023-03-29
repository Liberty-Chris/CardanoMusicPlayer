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
