//sparar knappen i en variabel
const aniBtn = document.querySelector('.aniBtn')

//"lysnar" på om aniBTn klickas
aniBtn.addEventListener('click', function () {
    //alert('du klickade på knappen')
    const box = document.querySelector('.box')
    //kollar om klassen animate finns i elementet
    if(box.classList.contains('animate')) {
        //om den finns, tar den bort
        box.classList.remove('animate')
    } else {
        //om den inte finns, tillägger vi den
        box.classList.add('animate')
    }
    //console.log(box.classList)
})

//exercise 5 i Css animation övning 2
const clickbox = document.querySelector(".clickbox");


clickbox.addEventListener("click", clickedBox, false);

function clickedBox(evt) {
  console.log("clicked on box.")
  if(clickbox.classList.contains('moveRight')) {
      //om moveRight finns, tar vi bort den
      clickbox.classList.remove('moveRight')
      //och tillägger moveDown istället
      clickbox.classList.add('moveDown')
      //fortsätter med else if för moveDown
  } else {
    clickbox.classList.add('moveRight')
  }
}