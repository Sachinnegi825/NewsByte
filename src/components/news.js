import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './newsItem';


const News = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=tech&apiKey=c3a1757c15764e3282149fc047802666`);
            setArticles(response.data.articles);
           
        }
        getArticles();
    }, [])
    return (
        <div>
            {articles.map(article => {
                return(
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                );
            })}
        </div>
    );
}

export default News;
