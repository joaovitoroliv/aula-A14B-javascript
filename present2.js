// Segundo jeito de fazer: criar imagem como se ela fosse um atributo publico
class Present {
    constructor (containerElement){
        this.containerElement = containerElement;
        // Cria a imagem e abre no container
        this.image = document.createElement('img');
        this.image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
        this.image.addEventListener('click', this._openPresent);
        //Adiciono no container
        this.containerElement.append(this.image);

        // Bind Event Listeners - Toda vez que tiver event listener, tenho que usar isso!
        this._openPresent = this._openPresent.bind(this);
    }

    _openPresent(event){
        // ACESSO DIRETO A MINHA IMAGEM, DEU ERRO, PQ?
        this.image.src = 'https://iheartcraftythings.com/wp-content/uploads/2021/06/cake-6.jpg';
        // Removo event Listener
        this.image.removeEventListener('click', this._openPresent);
    }
}
// Deu erro, porque?
// Dentro do constructor, this se refere a instancia, ex: this.image
// Dentro de um Event Handler, ele significa o elemento <img>  