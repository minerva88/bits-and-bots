import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export default function SuccessModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Success!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your order was successfully checked out!</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>Back to Browse</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}