const qoute = document.getElementById("quote")
const author = document.getElementById("author")
const apiUrl = "https://dummyjson.com/quotes/random"
async function getData(url) {
    let response = await fetch(url);
    let data = await response.json()
    // console.log(data)
    qoute.innerText = data.quote
    author.innerText = data.author

}

// getData(apiUrl)
// getData(apiUrl)

