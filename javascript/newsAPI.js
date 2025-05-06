console.log("newsAPI.js")

async function fetchNewsData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return "failed to fetch data";
    }

}
// url - key word "trump"
const url = "https://newsapi.org/v2/everything?q=trump&apiKey=454f3c8f8722430bae0c7f9b089c19e6"
const randomArticleNum = Math.floor(Math.random() * 10)

// fetch data and display it
fetchNewsData(url)
    .then(data => {
        console.log(data)
        document.querySelector('#newsWidget').innerHTML = `
        <a href=${data['articles'][randomArticleNum].url}>
            <h1>${data['articles'][randomArticleNum].title}</h1>
            <p>${data['articles'][randomArticleNum].content}</p>
        </a>
        `
    })    