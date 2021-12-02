class Album {
    constructor (photoPaths){
        // Atributos publicos
        this.photoPaths = photoPaths;
        this.photos = [];

        // Encontrar o modalview
        const modalView = document.querySelector('#modal-view');
        // Instanciar o modalScreen passando o modal view e o caminho das fotos
        this.modalScreen = new ModalScreen(modalView, photoPaths);
        
        // Bind event handlers
        this._onThumbnailClick = this._onThumbnailClick.bind(this);
    }

    renderTo(containerElement){
        // Adiciono fotos ao container, passando caminho das fotos e passo o container
        this._attachPhotosToContainer(this.photoPaths, containerElement);
    }

    _attachPhotosToContainer (photoPaths, containerElement){
        for (let i = 0; i < photoPaths.length; i++){
            // Crio um thumbnail para cada uma daquelas fotos - passei método this._onThumbnailClick como parametro (event handler)
            const thumbnail = new Thumbnail(i, photoPaths[i], this._onThumbnailClick);
            // Pego o thumbnail e jogo ele dentro do container
            thumbnail.renderTo(containerElement);
        }
    }



}