class Present {
    constructor (containerElement){
        this.containerElement = containerElement;

        // Cria a imagem a abre no container
        const image = document.createElement('img');
        image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
        image.addEventListener('click', this._openPresent);
        //Adiciono no container
        this.containerElement.append (image);
    }

    _openPresent(event){
        // Recupero a imagem
        const image = event.currentTarget;
        // Atualizo minha imagem
        image.src = 'https://iheartcraftythings.com/wp-content/uploads/2021/06/cake-6.jpg';
        // Removo event Listener
        image.removeEventListener('click', this._openPresent);
    }
}