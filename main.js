// function greetings() {
//     return "Hola";
//   }

const greeting = () => {
    return "Hola";
  };

// function division(a, b) {
//     return a / b;
//   }

const division = (a,b) => a / b;

//   function myName(name) {
//     return `Mi nombre es ${name}`;
//   }

const myName = (name) => `Mi nombre es ${name}`;

// function test2() {
//     console.log("Función test 2 ejecutada.");
//     }
//     function test1(callback) {
//     callback();
//     }

const test2 = () => {
    console.log("Función test 2 ejecutada.");
    }
    const test1 = (callback) => {
    callback();
    }


    let people = [
        { name: 'Jamiro', age: 45 },
        { name: 'Juan', age: 35 },
        { name: 'Paco', age: 34 },
        { name: 'Pepe', age: 14 },
        { name: 'Pilar', age: 24 },
        { name: 'Laura', age: 24 },
        { name: 'Jenny', edad: 10 },
       ]
        
    const oldpeople = people.forEach((person) => {
        if (person.age > 25) {
            console.log(person.name);
        }
    });

    const jpeople = people.forEach((person) => {
        for (let i = 0; i < person.name.length; i++) {
            if (person.name[i] === 'J') {
                console.log(person.name);
            }
        }
    });

    const old =[]
    const moreoldpeople = people.map((person) => {
        if (person.age > 25) {
            old.push(person.name);
        }
    });
    console.log(old);

    const j =[]
    const morejpeople = people.map((person) => {
        for (let i = 0; i < person.name.length; i++) {
            if (person.name[i] === 'J') {
                j.push(person.name);
            }
        }
    });
    console.log(j);

// const numbers = [ 4, 5, 6, 7, 8, 9, 10]
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

    // const newNumbers = numbers.map(number => number ** number);

    // console.log(newNumbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  const pairs = numbers.filter((number) => number % 2 === 0);

//   console.log(pairs);

const foodList = [
	{ name: 'Tempeh', isVeggie: true },
	{ name: 'Cheesbacon burguer', isVeggie: false },
	{ name: 'Tofu burguer', isVeggie: true },
	{ name: 'Entrecot', isVeggie: false }
]
	/* [
			'Que rico Tempeh me voy a comer!',
			'Que rica Tofu burguer me voy a comer!'
			]
	*/

let veggiefood = []
 const veggie = foodList.filter((food) => food.isVeggie === true);
 veggie.forEach((food) => {
    veggiefood.push(`Que rico ${food.name} me voy a comer!`)

 });
    console.log(veggiefood);

const numbers = [39, 2, 4, 25, 62]
// Salida--> 483600

    const multiply = numbers.reduce((acc, number) => {
        return acc * number;
    }, 1);
    console.log(multiply);


const staff = [
        {
          name: "Pepe",
          role: "The Boss",
          hobbies: ["leer", "ver pelis"],
        },
        {
          name: "Ana",
          role: "becaria",
          hobbies: ["nadar", "bailar"],
        },
        {
          name: "Luis",
          role: "programador",
          hobbies: ["dormir", "comprar"],
        },
        {
          name: "Carlos",
          role: "secretario",
          hobbies: ["futbol", "queso"],
        }
      ]
      
    
    const staffList = staff.map((person) => {
        return `${person.name} es ${person.role} y le gusta ${person.hobbies.join(" y ")}`;
    });
    console.log(staffList); 
   

    