export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "500x500");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    /*html*/
    return `
    <div class="card" style="width: 18rem;">
  <img src='${this.albumArt}' class="card-img-top " alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <h4 class="card-text">${this.artist}</h4>
    <audio controls preload="none" class="">
    <source src='${this.preview}' type="audio/mpeg">
    
</audio>
    <button class="btn btn-primary" onclick="app.songsController.addSong('${this._id}')">Add to Playlist</button>
  </div>
</div>


        `;
  }

  get playlistTemplate() {
    /*html*/
    return `
    <div class="card" style="width: 18rem;">
  <img src='${this.albumArt}' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <h4 class="card-text">${this.artist}</h4>
    <audio controls preload="none" class="">
    <source src='${this.preview}' type="audio/mpeg">
    
</audio>
    <button class="btn btn-primary" onclick="app.songsController.removeSong('${this._id}')">Remove</button>
  </div>
</div>


        `;
  }
}
