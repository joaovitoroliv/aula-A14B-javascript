const albumView = document.querySelector('#album-view');
const album = new Album (PHOTO_LIST);
// renderTo é um método
album.renderTo(albumView);