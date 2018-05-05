function Organism(state){
    this.name = state.name;
    this.species = state.species;
}

function Developer(){
    this.language = "JS";
    this.OS = "OS";
    this.code = function(){
        console.log("I am coding");
    }
}

function Animal(name){
    var state = {
        name: name,
        species: "Human"
    }

    this.organism = new Organism(state);
    this.developer = new Developer();
}

debugger
var barry = new Animal("Barry");

barry.developer.code()