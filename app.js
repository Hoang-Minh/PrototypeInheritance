// // prototype inheritance
// function Organism(state){
//     this.name = state.name;
//     this.species = state.species;
// }

// function Developer(){
//     this.language = "JS";
//     this.OS = "OS";
//     this.code = function(){
//         console.log("I am coding");
//     }
// }

// function Animal(name){
//     var state = {
//         name: name,
//         species: "Human"
//     }

//     this.organism = new Organism(state);
//     this.developer = new Developer();
// }

// debugger
// var barry = new Animal("Barry");

// barry.developer.code()

// classical inheritance
// class Organism{
//     constructor(name, species){
//         this.name = name;
//         this.species = species;
//     }
// }

// class Developer extends Organism{
//     constructor(name, species){
//         super(name, species);
//         this.language = "JS";
//         this.os = "OSX";
//     }
//     code(){
//         console.log("I am coding");
//     }
// }

// class Animal extends Developer{
//     constructor(name, species, sound){
//         super(name, species);
//         this.sound = sound;
//     }
// }

// var barry = new Animal("Barry", "Lemur", "Meow");
// barry.code();

// Growing trend:
function Organism(state){
    return{
        name: state.name,
        species: state.species
    }
}

function Developer(){
    return{
        language: "JS",
        os: "OSX",
        code: function(){
            console.log("I am coding");
        }
    }
}

function Animal(name){
    var state = {
        name: name,
        species: "Human"
    };
    return Object.assign(
        {},
        Organism(state),
        Developer()
    );
}

var barry = Animal("Barry");
console.log(barry);
barry.code();