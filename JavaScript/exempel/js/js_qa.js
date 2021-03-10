//JS Q & Q
console.log('Q & A')

//Radbyte
document.querySelector('.linebreak_1').innerHTML = 'Text med \n radbyte i koden'
document.querySelector('.linebreak_2').innerHTML =
  'Text med <br>\n radbyte både kod och HTML'
document.querySelector('.linebreak_3').innerHTML = `Text med 
radbyte både kod<br>
 och HTML 
 med 
 template literals`

//funktioner

//räkna tal med addition och subtraktion
let tal1 = 1;
let tal2 = 2;
let operator = '+';

if (operator === '+') {
  result = tal1 + tal2
} else if (operator === '-') {
  result = tal1 - tal2
} else {
  result = 'kunde inte göra räkning'
}
document.getElementById('output_1').innerHTML = 'Resultat: ' + result;

tal1 = 1;
tal2 = 2;
operator = '-';

if (operator === '+') {
    result = tal1 + tal2
  } else if (operator === '-') {
    result = tal1 - tal2
  } else {
    result = 'kunde inte göra räkning'
  }
  document.getElementById('output_2').innerHTML = 'Resultat: ' + result;

//som funktion
function simpleCalc(t1, t2, ope ) {
if (ope === '+') {
    result = t1 + t2
  } else if (ope === '-') {
    result = t1 - t2
  } else {
    result = 'kunde inte göra räkning'
  }
  return result;
}

document.getElementById('output_1').innerHTML = simpleCalc(3,3,'+')
document.getElementById('output_2').innerHTML = simpleCalc(3,3,'-')