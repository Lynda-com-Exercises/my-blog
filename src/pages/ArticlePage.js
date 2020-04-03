import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';
import ArticleList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);
    const otherArticles =  articleContent.filter(article => article.name !== name);
    
    if(!article) return <NotFoundPage />
    
    return(
        <React.Fragment>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key)=> (
                <p key={key}>{paragraph}</p>
            ))}

            <ArticleList articles={otherArticles} />
        </React.Fragment>
    )
}

export default ArticlePage;