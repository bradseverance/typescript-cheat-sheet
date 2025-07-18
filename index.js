"use strict";
const line = '// -------------------------------------------------------------- //\n';
// -------------------------------------------------------------- //
// numbers and strings                                            //
// -------------------------------------------------------------- //
const numbersAndStrings = '// numbers and strings                                            //\n';
console.log(line + numbersAndStrings + line);
function add(arg1, arg2) {
    return arg1 + arg2;
}
function concatenate(arg1, arg2) {
    return arg1 + arg2;
}
const addArg1 = 1;
const addArg2 = 2;
const addResult = add(addArg1, addArg2);
console.log(addResult);
const concatenateArg1 = 'Cute';
const concatenateArg2 = ' Kitty!';
const concatenateResult = concatenate(concatenateArg1, concatenateArg2);
console.log(concatenateResult);
// -------------------------------------------------------------- //
// objects                                                        //
// -------------------------------------------------------------- //
const objects = '// objects                                                        //\n';
console.log('\n' + line + objects + line);
const kittyObject = {
    name: 'Macarooni',
    age: 3,
    hobbies: ['toppling drinks', 'catching lizards', 'sleeping']
};
function logKittyObject(kitty) {
    console.log(kitty.name);
    console.log(kitty.age);
    console.log(kitty.hobbies);
}
logKittyObject(kittyObject);
// -------------------------------------------------------------- //
// undefined                                                      //
// -------------------------------------------------------------- //
const undefinedLine = '// undefined                                                      //\n';
console.log('\n' + line + undefinedLine + line);
// probably shouldn't ever use any
function showNumberOrUndefined(argUndefined) {
    if (argUndefined) {
        console.log(argUndefined);
    }
    else {
        console.log('It is undefined, so why show it?');
    }
}
let undefinedVariable;
showNumberOrUndefined(undefinedVariable);
undefinedVariable = 'Kitty!';
showNumberOrUndefined(undefinedVariable);
// -------------------------------------------------------------- //
// unions                                                         //
// -------------------------------------------------------------- //
const union = '// unions                                                         //\n';
console.log('\n' + line + union + line);
function addOrConcatenate(ac1, ac2) {
    if (typeof ac1 === 'number' && typeof ac2 === 'number') {
        return ac1 + ac2;
    }
    else {
        if (typeof ac1 === 'number') {
            ac1 = String(ac1);
        }
        if (typeof ac2 === 'number') {
            ac2 = String(ac2);
        }
        return ac1.concat(ac2);
    }
}
let ac1 = 1;
let ac2 = 2;
console.log(addOrConcatenate(ac1, ac2));
let ac11 = '1';
let ac22 = '2';
console.log(addOrConcatenate(ac11, ac22));
// -------------------------------------------------------------- //
// type alias                                                     //
// -------------------------------------------------------------- //
const typeAlias = '// type alias                                                     //\n';
console.log('\n' + line + typeAlias + line);
const kittyObject2 = {
    name: 'Macarooni',
    age: 3,
    hobbies: ['toppling drinks', 'catching lizards', 'sleeping']
};
function logKittyObject2(kitty) {
    console.log(kitty.name);
    console.log(kitty.age);
    console.log(kitty.hobbies);
}
logKittyObject2(kittyObject);
// -------------------------------------------------------------- //
// interfaces                                                     //
// -------------------------------------------------------------- //
const interfaces = '/ interfaces                                                     //\n';
console.log('\n' + line + interfaces + line);
const kittyObject3 = {
    name: 'Macarooni',
    age: 3,
    hobbies: ['toppling drinks', 'catching lizards', 'sleeping']
};
function logKittyObject3(kitty) {
    console.log(kitty.name);
    console.log(kitty.age);
    console.log(kitty.hobbies);
}
logKittyObject3(kittyObject);
// -------------------------------------------------------------- //
// extending interfaces                                           //
// -------------------------------------------------------------- //
const extendingInterfaces = '// extending interfaces                                           //\n';
console.log('\n' + line + extendingInterfaces + line);
const kittyObject4 = {
    name: 'Macarooni',
    age: 3,
    hobbies: ['toppling drinks', 'catching lizards', 'sleeping'],
    colors: ['black', 'gray']
};
function logKittyObject4(kitty) {
    console.log(kitty.name);
    console.log(kitty.age);
    console.log(kitty.hobbies);
    console.log(kitty.colors);
}
logKittyObject4(kittyObject4);
// -------------------------------------------------------------- //
// intersection types                                             //
// -------------------------------------------------------------- //
const intersectionTypes = '// intersection types                                             //\n';
console.log('\n' + line + intersectionTypes + line);
const kittyObject5 = {
    name: 'Macarooni',
    age: 3,
    hobbies: ['toppling drinks', 'catching lizards', 'sleeping'],
    colors: ['black', 'gray']
};
function logKittyObject5(kitty) {
    console.log(kitty.name);
    console.log(kitty.age);
    console.log(kitty.hobbies);
}
logKittyObject5(kittyObject5);
// -------------------------------------------------------------- //
// enums                                                          //
// -------------------------------------------------------------- //
const enums = '// enums                                                          //\n';
console.log('\n' + line + enums + line);
var PetTypes;
(function (PetTypes) {
    PetTypes["Cat"] = "cat";
    PetTypes["Dog"] = "dog";
})(PetTypes || (PetTypes = {}));
function printPetType(petType) {
    console.log(petType);
}
printPetType(PetTypes.Cat);
printPetType(PetTypes.Dog);
// -------------------------------------------------------------- //
// generic functions and constraints                              //
// -------------------------------------------------------------- //
const generics = '// generic functions and constraints                              //\n';
console.log('\n' + line + generics + line);
function printLength(arg) {
    console.log(arg.length);
}
printLength([1, 2, 3]);
printLength('kitty');
// won't compile
// printLength(5)
// -------------------------------------------------------------- //
// property modifiers                                             //
// -------------------------------------------------------------- //
const propertyModifiers = '/ property modifiers                                             //\n';
console.log('\n' + line + propertyModifiers + line);
let catVariable = {
    name: 'Kitty',
    age: 6
};
console.log(catVariable);
// won't compile
// catVariable.age = 7
// -------------------------------------------------------------- //
// classes                                                        //
// -------------------------------------------------------------- //
const classes = '// classes                                                        //\n';
console.log('\n' + line + classes + line);
class KittyClass {
    constructor() {
        this.name = '';
        this.age = 0;
        this.hobbies = [];
        this.alignment = 'evil';
        this.seniorLevel = 0;
    }
}
const kittyClass = new KittyClass();
console.log(kittyClass);
class KittenClass extends KittyClass {
    constructor() {
        super(...arguments);
        this.cutenessLevel = 0;
    }
}
let kittenObject = new KittenClass();
kittenObject.name = 'Macarooni';
kittenObject.age = 1;
// will not compile
// kittenObject.alignment = 'good'
// will not compile
// kittenObject.seniorLevel = 2
console.log(kittenObject);
// -------------------------------------------------------------- //
// getters and setters                                            //
// -------------------------------------------------------------- //
const gettersSetters = '// getters and setters                                            //\n';
console.log('\n' + line + gettersSetters + line);
class KittyClass1 {
    constructor() {
        this.name = '';
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
}
let kittyObject1 = new KittyClass1();
kittyObject1.setName = 'Macarooni';
console.log(kittyObject1);
// -------------------------------------------------------------- //
// static variables.                                              //
// -------------------------------------------------------------- //
const staticVariables = '// static variables.                                              //\n';
console.log('\n' + line + staticVariables + line);
class CatClass {
    constructor() {
        this.name = '';
        this.age = 0;
    }
    showAligment() {
        return CatClass.ALIGNMENT;
    }
}
CatClass.ALIGNMENT = 'evil';
let catObject = new CatClass();
catObject.name = 'Macarooni';
catObject.age = 6;
console.log(catObject);
console.log(catObject.showAligment());
