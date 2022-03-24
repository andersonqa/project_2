const generateButton = document.querySelector('button')
const adviceSpot = document.querySelector('p')
const imageDiv = document.querySelector('div')

generateButton.addEventListener('click', async () => {
    let response = await axios.get(`https://api.adviceslip.com/advice`)
    console.log(response.data.slip.advice)
    let adviceLine = response.data.slip.advice
    adviceSpot.innerHTML = `Your advice is... ${adviceLine}`
    let imgResponse = await axios.get("https://cors-anywhere.herokuapp.com/https://thispersondoesnotexist.com/image")

    {/* // console.log(response.data)
    // let person = response.data.
    // imageDiv.innerHTML = `<img src = ${person}>` */}
})