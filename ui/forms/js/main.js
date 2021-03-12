// Plockar data ur formuläret
function handleForm() {
  //plockar ut element enligt id för utskrift
  const output = document.getElementById('output')
  //plockar värden ur fälten mha id-attributet
  const fEmail = document.getElementById('f-email').value
  const fColor = document.getElementById('f-color').value
  const fTextarea = document.getElementById('f-textarea').value

  //template literals med backticks `
  console.log(`${fEmail} ${fColor} ${fTextarea}`)
  //blandat variablar och teckensträngar
  //console.log(fEmail + ' ' + fTextarea)

  //sparar formulär data och html-element i variabel
  let formOutput = `
    <div class="alert alert-primary" role="alert">
        <ul>
            <li>E-post: ${fEmail}</li>
            <li>favorit-färg: <span style="background-color: ${fColor}">${fColor}</span></li>
            <li>Text: ${fTextarea}</li>
        </ul>
    </div>`
  //Skriver ut data i output element med innerHTML
  output.innerHTML = formOutput
}
