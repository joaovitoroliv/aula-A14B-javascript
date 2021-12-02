// Abrir multiplos presentes, como?
// App: representa a página inteira, lista de presente
// - Present: representa um unico presente
class App {
    constructor (presentContainer, titleContainer){
        // Atributos publicos:
        this.presentContainer = presentContainer;
        this.titleContainer = titleContainer;

        // Atributo presents publico
        this.presents = [];
        // Preencher o meu container de presents
        this._fillPresentContainer();
        
        
        this._onPresentOpened = this._onPresentOpened.bind(this);

        // Contador de presentes - atributo publico
        this.openedCount = 0;
        
        // Adicionar um Event Listener para o documento todo e espera que o evento 'present-opened' ser disparado
        document.addEventListener('present-opened', this._onPresentOpened);
    }
    _fillPresentContainer(){
        // Iterar dentro da lista de presents
        for (const source of PRESENT_SOURCES){
            // Criar um presente para cada elemento da lista, passando o container e o caminho (source)
            const present = new Present(this.presentContainer, source);
            // Adiciono ele na minha lista de presentes
            this.presents.push(present);
        }
    }

    _onPresentOpened(){
        //Incrementa a variavel de contagem de presentes abertos
        this.openedCount++;
        // Verifico se o contador é maior que a lista de presentes
        if (this.openedCount === this.presents.length){
            this.titleContainer.textContent = 'Enjoy your presents!';
        }
    }
}
