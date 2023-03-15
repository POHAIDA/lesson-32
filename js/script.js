//Завдання 1

let mixin = {
    getPrice() { return this.price },
    getVat() {return this.price + this.price * 0.2},
    getExciseDuty() { return (this.price + this.price * 0.3)+10},
    getSingleTax() { return this.price +1},
}

class Cola {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
Object.assign(Cola.prototype, mixin)

class Whiskey {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
Object.assign(Whiskey.prototype, mixin)

class Ice {
    constructor(price) {
        this.price = price;
    }
}
Object.assign(Ice.prototype, mixin)

let cocaCola = new Cola('Coca-Cola', 10)
let jonnwalker = new Whiskey('jonn walker', 100)
let ice = new Ice(2)

console.log(cocaCola.getVat())
console.log(jonnwalker.getExciseDuty())
console.log(ice.getSingleTax())

//Завдання 2


const uniceString = (str) => {
    let res = str.split('; ')
    return new Set(res)
}
console.log(uniceString('cherry; orange; cherry; banana; banana'))

//Завдання 3

const phoneList = document.querySelectorAll('.shop-list li')
const result = [] 

const uniquePhone = () => {
    for (let i = 0; i < phoneList.length; i++) {
        const currentItem = phoneList[i].textContent;
            if (!result.includes(currentItem)) {
                result.push(currentItem);
            }
    }
console.log(result);
}
uniquePhone()


//Завдання 4

let mike = {name: 'Mike', age: 18}
let bob = {name: 'Bob', age: 25}
let nikola = { name: 'Nikola', age: 32 }

const userVisits = new Map();
function userVisit(value = 1) {
    return function () {
        userVisits.set(mike, value);
    return value++;
    };
} 
const mikeVisits = userVisit();

const userVisits1 = new Map();
function userVisit1(value = 1) {
    return function () {
        userVisits.set(bob, value);
    return value++;
    };
} 


const bobVisits = userVisit1()

const userVisits2 = new Map();
function userVisit2(value = 1) {
    return function () {
        userVisits.set(nikola, value);
    return value++;
    };
} 

const nikolaVisits = userVisit2()


mikeVisits(mike)
mikeVisits(mike)
mikeVisits(mike)
bobVisits(bob)
nikolaVisits(nikola)
nikolaVisits(nikola)
console.log(userVisits.get(mike))
console.log(userVisits.get(bob))
console.log(userVisits.get(nikola))
