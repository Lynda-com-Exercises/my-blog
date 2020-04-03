import React from 'react';
import ArticleList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticlesListPage = () => (
    <React.Fragment>
        <h1>Articles</h1>
        <ArticleList articles={articleContent} />
    </React.Fragment>

)

export default ArticlesListPage;