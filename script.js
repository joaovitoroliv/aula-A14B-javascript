////////////////////// CLASSES EM JAVASCRIPT ///////////////////////////
// Escrever codigo de uma maneira modular
// Para isso: ES6 clases - syntaxe similar ao java e C++
// Syntactic sugar: forma de simplificar o código com uma camada mais palatável
class ClassName {
    //Constructor é opcional
    constructor (params){
        //...
    }
    methodOne(){
    // Para referenciar outro método
    this.methodTwo();
}  
    // Para criar um método privado: #methodName(), de resto é tudo privado
    #methodTwo(){
    //...
}
}
// Como eram feitas classes ante de 2015? De maneira funcional 
// Exemplo de Classe:
class Counter {
    //Atributo privado
    #x = 0;
constructor(){
    console.log(this.#x);
    this.#x++;
    console.log(this.#x);
}
}
const x = new Counter();

// Exemplo 2:
class ClassName2 {
    constructor (params){
        this.fieldName = fieldValue;
        this.fieldName = fieldValue;
    }
    methodName(){
        this.fieldName = fieldValue;
    }
}

// Public fields - Campos publicos
class ClassName {
    constructor (params){
        this.someField = someParam;
    }
    methodName (){
        const someValue = this.someField;
    }
}

// Instanciar a minha classe:
// Criando novos objetos:
class SomeClass {
    //...
    someMethod(){
        //...
    }
}
const x = new SomeClass();
const y = new SomeClass();
//Acessar um método:
y.someMethod();

////////////////////////////// Exemplo: Presente /////////////////




