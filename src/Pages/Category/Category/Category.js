import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCard from '../../Shared/SummaryCard/SummaryCard';

const Category = () => {
    const categoriesNews = useLoaderData();
    console.log(categoriesNews);
    return (
        <div>
            {
                categoriesNews.map(news => <SummaryCard key={news._id} news={news}></SummaryCard>)
            }
        </div>
    );
};

export default Category;