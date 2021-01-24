// Create an interface that represents the data used in the function below it.
// Type the function parameter with your interface.

interface Fruit {
  name: string,
  color: string,
  sweetness: number,
  stars: number
}

function fruitMessage(fruit: Fruit) {
  let review: string = `This ${fruit.name} has a nice ${fruit.color} color.`;
  if (fruit.sweetness < 50) {
    review += " It should be a little sweeter.";
  } else {
    review += " When I tasted it, it was just right.";
  }

  review += ` I would give it ${fruit.stars} stars.`;

  return review;
}

console.log(
  fruitMessage({ name: "Apple", color: "red", sweetness: 80, stars: 4.5 })
);


// Create an interface for an Apple by extending the Fruit interface you already made
// Add a string property to represent the 'kind' of apple. (Ex - Fuji Apple)

interface Apple extends Fruit {
  kind: string
}

// Final Problem:




//  Create an interface called Class that contains:
//  - An interface representing a Teacher
//  - An interface representing a list of Student

//  Teacher and Student contain a fullName, age, and bloodType. 
//  The only difference is: Teacher has facultyId and student has studentId.
//  Use interface inheritance through "extends" to share the common properties
//  through a Person interface. 
 
//  Class should look like this:

 interface Class {
   instructor: Teacher,
   students: Student[]
 }

 interface Person {
   fullName: string,
   age: number,
   bloodType: string
 }

 interface Teacher extends Person {
   facultyId: number,
 }

 interface Student extends Person {
  studentId: number,
}

//  Create a variable called oopClass which contains a fake object with data you create
//  that correctly follows the Class interface. 

// Teacher
let classInstructor: Teacher = {
  fullName: 'James Steve',
  age: 35,
  bloodType: 'O+',
  facultyId: 123456
}

// Students
let student1: Student = {
  fullName: 'Steve S',
  age: 25,
  bloodType: 'O-',
  studentId: 623523
}

let student2: Student = {
  fullName: 'Bob L',
  age: 24,
  bloodType: 'O+',
  studentId: 343523
}

let student3: Student = {
  fullName: 'Alex A',
  age: 23,
  bloodType: 'A+',
  studentId: 898989
}


let studentList: Student[] = [
  student1, student2, student3
]

 let oopClass: Class = {
  instructor: classInstructor,
  students: studentList
 }


console.log(studentList, classInstructor);