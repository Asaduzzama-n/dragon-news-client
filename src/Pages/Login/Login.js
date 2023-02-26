import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const {userEmailLogin,setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;


        userEmailLogin(email,password)
        .then(userCredential => {
            const user = userCredential.user;
            if(user.emailVerified){
                navigate(from,{replace:true});
            }else{
                toast.error('Your email is not verified. Please verified your email.')
            }

            console.log("FROM LOGIN",user);
        })
        .catch(error => {
            console.log(error.message);
        })
        .finally(()=>{setLoading(false)})


    }


    return (
        <div>
            <Form onSubmit={handleFormSubmit} className='w-50 m-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="password" name='password' placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Login
                </Button>

                <div className='my-4'>
                    <p>Don't have an account?<Link to={'/signup'}> Create an account</Link></p>
                </div>

            </Form>

        </div>
    );
};

export default Login;