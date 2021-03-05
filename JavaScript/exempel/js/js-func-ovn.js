//Uppgift 1 returna meal

//gör funktion med namn showMeal och en prameter meal
function showMeal(meal) {
    // returnernar meal då funktionen körs
    return meal
}

console.log('måltiden är ' + showMeal('lunch'))

//uppgift 2

//gör två variabler med siffervärde
let a = 3
let b = 7

/*
funktion med tre parametrar 
tal1, tal2 och operator (räknesätt)
*/
function countResult(tal1, tal2, ope) {
    if(ope === '+') {
        return tal1 + tal2
    } else if(ope === '-') {
        return tal1 - tal2
    } else if(ope === '*') {
        return tal1 * tal2
    } else if(ope === '/') {
        return tal1 / tal2
    } else {
        return 'känner inte igen operatorn'
    }
}

console.log(countResult(a, b, '/'))

// funktion som skriver i HTML
function countResultHTML(tal1, tal2, ope) {
    let output
    const result = document.getElementById('result')

    if(ope === '+') {
        output = tal1 + tal2
    } else if(ope === '-') {
        output = tal1 - tal2
    } else if(ope === '*') {
        output = tal1 * tal2
    } else if(ope === '/') {
        output = tal1 / tal2
    } else {
        output = 'känner inte igen operatorn'
    }
    
    result.innerHTML = output
}

//countResultHTML(a, b, '*')

//uppgift 3, visa tid med Date()
function showDate() {
    const d = new Date()
    const today = document.getElementById('today')

    today.innerHTML = d
}

//Uppgift 4 bas
const d = new Date()
const hour = d.getHours()
const minutes = d.getMinutes()
console.log(hour + ':' + minutes)

//uppgift 5 bas
function dagensDag(){ 
    const d = new Date()
    //Array med dagar i klartext, [0] = söndag, [1] = måndag
    const weekday= ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
    /*
    getDay hämtar dagen som siffra från 0-6 
    där 0 är söndag, 1 måndag osv.
    */
    return weekday[d.getDay()]
}
console.log(dagensDag())