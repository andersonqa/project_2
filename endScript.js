const generateButton = document.querySelector('button')
const adviceSpot = document.querySelector('p')
const imageDiv = document.querySelector('div')

generateButton.addEventListener('click', async () => {
    imageDiv.innerHTML = `<img src = https://thispersondoesnotexist.com/image?' width =\'500px\' height =\'500\'>`
    let response = await axios.get(`https://api.adviceslip.com/advice`)
    console.log(response.data.slip.advice)
    let adviceLine = response.data.slip.advice
    adviceSpot.innerHTML = `${adviceLine}`
    let imgResponse = await axios.get(`https://thispersondoesnotexist.com/image?`)
    console.log(imgResponse)
    // imageDiv.innerHTML = `<img src = https://thispersondoesnotexist.com/image?' width =\'500px\' height =\'500\'>`
})

//was in line 12:
// let person = imgResponse.data