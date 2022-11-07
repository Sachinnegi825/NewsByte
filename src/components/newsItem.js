import React from 'react'
import './newsItem.css'

const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className="news-container">
            <div className='news1'>
                <img className='img' src={urlToImage} alt={urlToImage} />
                <h3><a href={url}>{title}</a></h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default NewsItem;
