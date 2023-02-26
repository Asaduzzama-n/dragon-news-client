import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCard from '../../Shared/SummaryCard/SummaryCard';

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            {
                news.map(news=><SummaryCard key={news.key} news = {news}></SummaryCard>)
            }
        </div>
    );
};

export default Home;