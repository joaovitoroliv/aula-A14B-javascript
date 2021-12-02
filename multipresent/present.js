class Present {
    // Recebe o container e o caminho do presente
    constructor(containerElement, presentSrc){
        this.containerElement = containerElement;
        this.presentSrc = presentSrc;

        // Bind Event listeners
        this._openPresent = this._openPresent.bind(this);

        // Cria imagem e coloca no container
        this.image = document.createElement('img');
        this.image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
        this.image.addEventListener('click', this._openPresent);
        // Imagem que eu criei eu adiciono na div
        this.containerElement.append(this.image);
    }

    _openPresent(event){
        // Troco imagem pelo atributo publico presentSrc
        this.image.src = this.presentSrc;
        this.image.removeEventListener('click', this._openPresent);
        // Criando um evento novo que meu App.js esta escutando
        document.dispatchEvent(new CustomEvent ('present-opened'));
    }   

}