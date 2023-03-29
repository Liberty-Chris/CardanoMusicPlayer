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
