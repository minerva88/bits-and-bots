import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckoutError from "../common/CheckoutError";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const schema = yup.object().shape({
    name: yup.string().required("Please enter your full name").min(10),
    adress: yup.string().required("Please enter your street adress").min(7),
    zipCode: yup.number().required("Please enter your zip code").min(4),
    city: yup.string().required("Please enter your city name").min(5),
    cardNumber: yup.number().required("Please enter your creditcard number").min(16).max(16),
    expiryMonth: yup.number().required("Please enter expiry month").min(2).max(2),
    expiryYear: yup.number().required("Please enter expiry month").min(2).max(2),
    cvc: yup.number().required("Please enter your cvc-code"),

});

export default function CheckoutForm() {

    const [checkout, setCheckout] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        setCheckout(true);
        setError(null);

        console.log(data);

        //display success modal here
        //delete cart from localStorage
        navigate('/browse');
    }

    return (
        <>
        <Form className="checkoutform shadow" onSubmit={handleSubmit(onSubmit)}>
            {error && <CheckoutError>{errors}</CheckoutError>}
            <Form.Group className="checkoutform__name m-3" controlId="checkoutName" disabled={checkout}>
                <Form.Label>Full name</Form.Label>
                <Form.Control type="name" placeholder="Enter full name" {...register("name")} />
                {error && <CheckoutError>{errors}</CheckoutError>}
            </Form.Group>
            <Form.Group className="checkoutform__adress m-3" controlId="checkoutAdress" disabled={checkout}>
                <Form.Label>Adress</Form.Label>
                <Form.Control className="checkoutform__adress--adress" type="adress" placeholder="Enter street adress" {...register("adress")} />
                <Form.Control className="checkoutform__adress--zip" type="zip" placeholder="Enter zipcode" {...register("zipCode")} />
                <Form.Control className="checkoutform__adress--city" type="city" placeholder="Enter city" {...register("city")} />
                {error && <CheckoutError>{errors}</CheckoutError>}
            </Form.Group>
            <Form.Group className="checkoutform__cardinfo m-3" controlId="checkoutCard" disabled={checkout}>
                <Form.Label>Credit card info</Form.Label>
                <Form.Control className="checkoutform__cardinfo--cardnumber" type="cardnumber" placeholder="Enter credit card number" {...register("cardnumber")} />
                <Form.Control className="checkoutform__cardinfo--exmonth" type="month" placeholder="Exp month" {...register("expiryMonth")} />
                <Form.Control className="checkoutform__cardinfo--year" type="year" placeholder="Exp year" {...register("expiryYear")} />
                <Form.Control className="checkoutform__cardinfo--cvc" type="cvc" placeholder="CVC" {...register("cvc")} />
                {error && <CheckoutError>{errors}</CheckoutError>}
            </Form.Group>
            <Button className="checkoutform__button m-3" variant="primary" type="submit">{checkout ? "Checking out.." : "Checkout"}</Button>
        </Form>
        </>
    )
}