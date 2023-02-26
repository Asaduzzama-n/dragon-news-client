import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {

    const {googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(userCredential => {
            const user = userCredential.user;
            navigate(from,{replace:true});
            console.log(user)
        })
        .catch(error =>{
            console.error(error.message);
        })
        
    }

    

    return (
        <div>
            <ButtonGroup vertical className='w-100'>
                <Button onClick={handleGoogleLogin} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='my-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='my-2'><FaWhatsapp/> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='my-2'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='my-2'><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item className='my-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;