export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
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
  <img src='${this.albumArt}' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <h4 class="card-text">${this.artist}</h4>
    <audio controls preload="none" class="">
    <source src='${this.preview}' type="audio/mpeg">
    
</audio>
    <a href="#" class="btn btn-primary">Add to Playlist</a>
  </div>
</div>


        `;
  }

  get playlistTemplate() {
    /*html*/
    return `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${this.preview}" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  
        `;
  }
}
