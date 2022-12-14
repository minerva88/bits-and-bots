import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default function LoginForm () {


    return (
        <>
        <Form className='registerform shadow'>
            <Form.Group className='mb-3' controlId='registerEmail'>
                <Form.Label>Email adress</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='registerPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password' />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
        </>
    )
}