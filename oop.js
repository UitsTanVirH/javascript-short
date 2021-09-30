let person = {
    name: 'Tanvir',
    age: 20,
    greet(){
        console.log('Hi there ' +this.name);
    }
};

console.log(person);
person.greet();

const things = ['pets', 'books', 'cloths'];
console.log(things);

things.push('computer');
console.log(things);

//copy array and objects...spread operator
const copiedArray = [...things];
console.log(copiedArray);

//make array ...rest operator
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4));