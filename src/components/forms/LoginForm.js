import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { BASE_URL, TOKEN_PATH } from '../../constants/api';
import LoginError from '../common/LoginFormError';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
    username: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
});


export default function LoginForm () {

    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    async function onSubmit(data) {
        setSubmitting(true);
        setLoginError(null);

        console.log(data);

        try {
            const response = await axios.post(url, data);
            console.log("response", response.data);
        } catch (error) {
            console.log("error", error);
            setLoginError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }


    return (
        <>
        <Form className='loginform shadow' onSubmit={handleSubmit(onSubmit)}>
            {loginError && <LoginError>{loginError}</LoginError>}
            <Form.Group className='mb-3' controlId='formEmail' disabled={submitting}>
                <Form.Label>Username</Form.Label>
                <Form.Control type='username' placeholder='Enter username' ref={register} />
                {errors.username && <LoginError>{errors.username.message}</LoginError>}
            </Form.Group>
            <Form.Group className='mb-3' controlId='formPassword' disabled={submitting}>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password' ref={register} />
                {errors.password && <LoginError>{errors.password.message}</LoginError>}
            </Form.Group>
            <Button variant='primary' type='submit'>{submitting ? "Logging in..." : "Login"}</Button>
        </Form>
        </>
    )
}