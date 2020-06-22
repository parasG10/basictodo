// localStorage.setItem('hero', 'spiderman');
// var myHero = localStorage.getItem('hero');
// console.log(myHero);

const student = {
    name: 'John',
    age: 23,
    isActive: true,
}

const studentObjToString = JSON.stringify(student);

console.log(typeof studentObjToString);

localStorage.setItem('student', studentObjToString);

const toJSON = JSON.parse(studentObjToString);

console.log(typeof toJSON);

console.log(toJSON.age);


