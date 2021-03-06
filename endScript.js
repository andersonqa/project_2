const generateButton = document.querySelector('button')
const refreshButton = document.querySelector('#Refresh')
const adviceSpot = document.querySelector('p')
const imageDiv = document.querySelector('div')
const howTo = document.querySelector('h1')

// on click, the person's image appears in the div and the advice appears in the 'p'

generateButton.addEventListener('click', async () => {
    imageDiv.innerHTML = `<img src = https://thispersondoesnotexist.com/image?' width =\'500px\' height =\'500\'>`
    let response = await axios.get(`https://api.adviceslip.com/advice`)
    console.log(response.data.slip.advice)
    let adviceLine = response.data.slip.advice
    adviceSpot.innerHTML = `${adviceLine}`
    howTo.innerText = `Note: for advice from someone else, click "Someone Else" and click "Advice" again`

})
refreshButton.addEventListener('click',() =>{
    location.reload()
})



// Element.setAttribute(img, src = https://thispersondoesnotexist.com/image?);