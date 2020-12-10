#!/usr/bin/env node

const students7_1 = [
    'Alex',
    'Alvi',
    'Angelina',
    'Candy',
    'Cassidy',
    'Cristobal',
    'Damien',
    'Daniel',
    'David',
    'Du Min',
    'Esay',
    'Fezz',
    'Geormary',
    'Grace',
    'Hady',
    'Imran',
    'Ivan',
    'Jamee',
    'James',
    'Jarrett',
    'Jasleen',
    'Jenna',
    'Jessica',
    'Jordan',
    'Kathy',
    'Kelvin',
    'Hafiz',
    'Nora',
    'Quisa',
    'Ray F.',
    'Ray U.',
    'Rob',
    'Sarah',
    'Talia',
    'Teyanna',
    'Theodore',
    'Tiffany',
    'Yesenia'
]



let section = process.argv[2]

switch(section) {
    case '7.1': printStudent(students7_1); break;
    default: console.log('Specify section!')
}

function printStudent(names) {
    let count = 0

    const id = setInterval(function(){
        process.stdout.clearLine()
        process.stdout.cursorTo(0)
        switch (count%4) {
            case 0: 
                process.stdout.write("/-\\|/-\\|/-\\|/-\\|");
                break;
            case 1: 
                process.stdout.write('-\\|/-\\|/-\\|/-\\|/');
                break;
            case 2: 
                process.stdout.write("\\|/-\\|/-\\|/-\\|/-");
                break;
            case 3: 
                process.stdout.write('|/-\\|/-\\|/-\\|/-\\');
                break;
        }
        count += 1
    }, 100)

    setTimeout(function() {
        process.stdout.clearLine()
        process.stdout.cursorTo(0)
        clearInterval(id)
        console.log(`The winner is: 🎉 ${names[Math.floor(names.length * Math.random())]} 🎉`)
    }, 1600)  
}

