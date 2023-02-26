import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';


const News = () => {
    const selectedNews = useLoaderData();
    return (
        <div className='mb-3'>
        <Card>

            <Card.Img variant="top" src={selectedNews.image_url}></Card.Img>
            <Card.Body>
                <Card.Title className='text-center'>{selectedNews.title}</Card.Title>
                <hr />
                <div className='d-flex justify-content-between align-items-center mx-3'>
                    <p>Author:{selectedNews.author.name}</p>
                    <p>Published Date: {selectedNews.author.published_date}</p>
                    <p><FaStar className='text-warning'></FaStar>{selectedNews.rating.number}</p>
                </div>


                <Card.Text>
                    {selectedNews.details}
                </Card.Text>
                <Link to={`/category/${selectedNews.category_id}`}><Button variant="primary">Go to this category news</Button></Link>
            </Card.Body>
        </Card>
    </div>
    );
};

export default News;