const citiesRussia = ['Moscow', 'Kazan', 'Spb', 'Novosibirsk']
const citiesEurope = ['Berlin', 'Riga', 'Stockholm', 'Helsinki']

const citiesRussiaWithPopulation = {
    Moscow: 10,
    Kazan: 7,
    Spb: 8,
    Novosibirsk: 4.2
}
const citiesEuropeWithPopulation = {
    Moscow: 16,
    Berlin: 5.2,
    Riga: 3.2,
    Stockholm: 6.1,
    Helsinki:3.3 
}

//! Spread  это три точки которые позволяют работать с массивами////// ... оператор троетоочия разворачивает элементы массива,убирая из него массив
/*const allCities = [...citiesRussia, 'Washington', ...citiesEurope]// вывели наши два массива и между ними добавили эллемент Вашингтон
const allCities = citiesEurope.concat(citiesRussia)// старая версия объединения двух массивов
console.log(allCities)*/
console.log({ ...citiesRussiaWithPopulation })// так как в этом случае работа идёт с объетами, то просто применить оперетор Spread не получится, нужно объкт засунуть в фигурные скобки, для создания нового объекта
console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation })// в этом примере вывода мы сделали обьединение двух объектов в один
//? Если в соединяемых объетках есть одинаковые поля то будет записано последнее поле поверх предыдущего, то есть строка 23, там популяции России и Европы, и город Москва есть у обоих объектов , но в выводе Европа последння поэтому будут взяты ее значения

/// Practice
const numbers =[5,2,43,67,8,2,54,35,756]
console.log(Math.max(23, 1, 56, 3, 8, 56.1))// Глобальная переменная Math и функция  max, котрая находит максимальное значение у числе входящих в нее
//console.log((Math.max(...numbers)))// Если же не использовать оперторп Spread то считывание данных из массива невозможно, и функция max выведет NaN
//console.log(Math.max.apply(null, numbers))// ранее вместо Spread использовался вызов функции apply ( контест не важен можно поставить null, а вот масиив у нас есть numbers его и передаем )
const divs = document.querySelectorAll('div')
const nodes = [...divs]// конвертировали строку в массив
console.log(divs, Array.isArray(divs))//вывод элемента и проверка на то является ли он массивом(нет)

console.log(nodes, Array.isArray(nodes))//вывод элемента и проверка на то является ли он массивом(да)
//todo Rest
function sum(a, b,...rest) {// сложатся два первых элемента, а остальные выведутся с помощью rest массив [3,4,5]
    //console.log(rest)// если при выводе добавить в rest Spread(...) то выведет не в формате массива, а в формате строки
    
    return a+b+rest.reduce((a,i)=>a+i,0)//reduce первым парамтером принимает функцию, а вторым парамметром начальное значение акумулятора
}
const numbers2 = [1, 2, 3, 4, 5]
// Spread!
console.log(sum(...numbers2))

//const a = numbers2[0]// записываем в a значениепервого элемента,в b второго
//const b = numbers2[1]

const [a,b,...other]= numbers2//идентично тому что на строчках 46,47+ с помощью Spread и переменной other вывели остальные элементы массива
console.log(a, b, other)// если тут перед other сделать Spread то оставшиеся числа выведутся не в массивном виде, а в строчном
const person = {
    name: 'Ivan',
    age: 20,
    city: 'Moscow',
    country:'Russia'
}
const {name,age,...adress } = person// для объектов используем фигурные скобки, передадим туда поля name,age и спомощью rest запишем оставшиеся поля объекта в объект аdress
console.log(name,age,adress)


