const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch (error) {
        console.error('There was an error', error);
    }
}

fetchNews();

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const articleDiv =  document.createElement('div');

        const headline = document.createElement('h2');
        headline.textContent = article.headline;
        articleDiv.appendChild(headline);

        const title = document.createElement('h3');
        title.textContent = article.title;
        articleDiv.appendChild(title);

        const description = document.createElement('div');
        description.textContent = article.description;
        articleDiv.appendChild(description);

        const author = document.createElement('h5');
     

        if (article.author) {
            author.textContent = `Author: ${article.author}`;
        articleDiv.appendChild(author);
        }
        

        const url = document.createElement('h6');
        url.textContent = article.url;
        articleDiv.appendChild(url);

        newsDiv.appendChild(articleDiv);

    }
}