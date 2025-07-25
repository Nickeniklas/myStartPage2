console.log("newsAPI.js")

async function fetchNewsData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log(data)
        document.querySelector('#newsWidget').style.display="flex";
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return "failed to fetch data";
    }

}
// Get api key from LocalStorage
let apikey = null;
if (localStorage.getItem('news-api-key')) {
    apikey = localStorage.getItem('news-api-key');
} else apikey = null;

// URL - key word "trump"
const keyword = "trump";

const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apikey}`;
const randomArticleNum = Math.floor(Math.random() * 10)

// fetch data and display it
fetchNewsData(url)
    .then(data => {
        if (data.status == "ok"){
            document.querySelector('#newsWidget').innerHTML = `
        <a href=${data['articles'][randomArticleNum].url}>
            <h1>${data['articles'][randomArticleNum].title}</h1>
            <p>${data['articles'][randomArticleNum].description}</p>
        </a>
        `
        }
        else console.log("error with the news fetch...")
    })    