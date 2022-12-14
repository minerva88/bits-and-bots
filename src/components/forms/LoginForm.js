import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { BASE_URL, TOKEN_PATH } from '../../constants/api';
import AuthContext from '../context/AuthContext';
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

    const navigate = useNavigate();

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const [auth, setAuth] = useContext(AuthContext);

    async function onSubmit(data) {
        setSubmitting(true);
        setLoginError(null);

        console.log(data);

        try {
            const response = await axios.post(url, data);
            console.log("response", response.data);
            setAuth(response.data);
            navigate('/browse');
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
            <Form.Group className='loginform__username m-3' controlId='loginEmail' disabled={submitting}>
                <Form.Label>Username</Form.Label>
                <Form.Control type='username' placeholder='Enter username' {...register('username')} />
                {errors && <LoginError>{errors}</LoginError>}
            </Form.Group>
            <Form.Group className='loginform__password m-3' controlId='loginPassword' disabled={submitting}>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password' {...register('password')} />
                {errors && <LoginError>{errors}</LoginError>}
            </Form.Group>
            <Button className='loginform__button' variant='primary' type='submit'>{submitting ? "Logging in..." : "Login"}</Button>
        </Form>
        </>
    )
}