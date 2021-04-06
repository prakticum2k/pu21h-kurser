//localstorage test med JavaScript

//ställer in ett objekt med namne userName och värdet Paul
//localStorage.setItem('userName', 'Paul')
//sparar userName i en variabel
const userName = localStorage.getItem('userName')
//använder värdet t.ex. till att skriva ut i HTML
document.getElementById('output').innerHTML = userName

//radera valt objekt med removeItem
//localStorage.removeItem('userName')

//radera alla objekt i localStorage med clear()
//localStorage.clear() 

function formToLocalStorage() {
    //plockar värdet från greet-fältet
    const greet = document.getElementById('greet').value 
    
    const lsEmail = document.getElementById('lsEmail').value 
    //console.log(greet)
    localStorage.greet = greet
    localStorage.lsEmail = lsEmail
}

console.log(localStorage.getItem('greet'))

if(localStorage.getItem('greet') !== null){
    document.getElementById('greet').value = localStorage.getItem('greet')
    document.getElementById('lsEmail').value = localStorage.getItem('lsEmail')
    document.getElementById('output').innerHTML = 'LocalStorage i bruk'
} else {
    document.getElementById('output').innerHTML = 'Standard greeting here'
}

function clearLS() {
    //Ta bort all local storage
    localStorage.clear()
    //ladda om sidan
    location.reload()
}