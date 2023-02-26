import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaShareAlt, FaRegBookmark,FaStar } from 'react-icons/fa';

const SummaryCard = ({ news }) => {
    const { title, details, author, rating, image_url, thumbnail_url } = news;
    return (
        <div className='mb-3'>
            <Card>
                <Card.Header as="h5" className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image roundedCircle variant="top" src={author.img} height="60px" ></Image>
                        <div className='mx-2'>
                            <h5>{author.name}</h5>
                            <p className='text-muted'><small>{author.published_date}</small></p>
                        </div>
                    </div>
                    <div className='mx-2'>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Img variant="top" src={image_url}></Card.Img>
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <hr />
                    <div className='d-flex justify-content-between align-items-center mx-3'>
                        <p>Author:{author.name}</p>
                        <p>Published Date: {author.published_date}</p>
                        <p><FaStar className='text-warning'></FaStar>{rating.number}</p>
                    </div>


                    <Card.Text>
                        {
                            (details.length > 250) ? <p>{details.slice(0, 250) + '....'}<Link to={`/news/${news._id}`} >Read more</Link></p> : <p>{details}</p>
                        }
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default SummaryCard;