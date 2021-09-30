let userName = 'Tanvir';
let age = 24;
let hobbies = true;

function user(name, userAge, userHobbies){
    return "Name is " +name+ ", age is " +userAge+ ", user has hobbies: " +userHobbies;   
}
console.log(user(userName, age, hobbies));

//function
const add = (a, b) => a+b;

console.log(add(2, 3));

const addSingle = (a) => a+1;

console.log(addSingle(2));

