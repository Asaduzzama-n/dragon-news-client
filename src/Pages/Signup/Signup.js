import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {
    const {createUser,updateUserProfile,verifyUser} = useContext(AuthContext);

    const handleFormSubmit = (event) =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const imgUrl = form.imgUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        
        createUser(email,password)
        .then(userCredential =>{
            const user = userCredential.user;
            form.reset();
            //UPDATE USER PROFILE
            handleProfileUpdate(name,imgUrl);
            handleUserVerify();
            toast.error('Please verify your email before login.');
            console.log("FROM SIGNUP",user);
        })
        .catch(error => {
            console.error(error.message);
        })

        const handleProfileUpdate = (name,imgUrl) =>{
            updateUserProfile({displayName: name,photoURL:imgUrl})
            .then(()=>{console.log("Profile Update");})
            .catch(error => {console.error(error.message);})
        }

        const handleUserVerify = () =>{
            verifyUser()
        }
    }
    
    return (
        <div>
            <Form onSubmit={handleFormSubmit} className='w-50 m-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='imgUrl' placeholder="Enter Image URL" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>

                <div className='my-4'>
                    <p>Already have an account?<Link to={'/login'}> Login</Link></p>
                </div>
            </Form>
        </div>
    );
};

export default Signup;