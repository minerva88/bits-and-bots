import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default function RegisterForm () {

    //I was not able to find a plugin for my WordPress REST API that allows for user registration.


    return (
        <>
        <Form className='registerform shadow'>
            <Form.Group className='mb-3' controlId='registerUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='email' placeholder='Enter username' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='registerEmail'>
                <Form.Label>Email adress</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='registerPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter password' />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
        </>
    )
}