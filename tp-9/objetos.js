/*01 - crearPersona*/
function crearPersona(nombre, apellido, edad, documento) {
    return {nombre,apellido,edad,documento};    
}
console.log("resultado crearPersona: ", crearPersona("Juan", "Pérez", 20, 123456));

/*02 - agregarApodo*/
var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};

function agregarApodo(apodo){
    personaEjemplo.apodo=apodo;
    return personaEjemplo.apodo;
}
console.log("resultado agregarApodo: ", agregarApodo("JuanPe"));

/*03 - sinDocumento*/
function sinDocumento(){
    const {apellido,nombre,edad}=personaEjemplo;
    return {apellido,nombre,edad};
}
console.log("sin Documento",sinDocumento());

/*04 - nombreCompletoDePersona*/
function nombreCompletoDePersona(persona) {
    const {apellido,nombre}=personaEjemplo;
    return [apellido,nombre].join(", ");
}
console.log("Resultado nombreCompletoDePersona: ", nombreCompletoDePersona(personaEjemplo));

/*05 - felizCumpleaños*/
function felizCumpleaños(persona) {
    return persona.edad+1;
}
console.log("resultado felizCumpleaños: ", felizCumpleaños(personaEjemplo));

/*06 - sonLaMismaPersona*/
function sonLaMismaPersona(firstPerson,secondPerson){
    //const comparacion=shallowEqual(firstPerson,secondPerson);
    const keysOne=Object.keys(firstPerson); //keysOne  y keyTwo, obtiene las claves del primer objeto y segundo
    const keysTwo=Object.keys(secondPerson);
    if (keysOne.length !==keysTwo.length){
        console.log(keysOne.length,keysTwo.length); //longitud de las claves del objeto, las compara
        return `este es el falso 1: ${false}`;
    }
    for (let key of keysOne) {
        if (firstPerson[key] !== secondPerson[key]) {
          return `este es el falso 2:${false}`;
        }
    }
    return true;
}
console.log(`resultado sonLaMismaPersona ${sonLaMismaPersona(personaEjemplo,
    {apellido:"Perez",nombre:"Juan",edad:20,documento:12345})
}`
);