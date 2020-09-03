const url =
  'http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-02&sortBy=publishedAt&apiKey=c782072813894c54847457bfe59eca83';

export default function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}