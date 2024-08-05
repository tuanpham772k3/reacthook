import React, { useState, useEffect, useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { updateUser } from '../UserContext/ApiAPI';
import { usersContext } from '../UserContext/UserContext';
import { toast } from 'react-toastify';

export default function Update({ show, handleClose, userData }) {
    const [formData, setFormData] = useState({ id: '', first_name: '', last_name: '', email: '', avatar: '' });
    const { dispatch } = useContext(usersContext);



    useEffect(() => {
        if (userData) {
            setFormData({
                id: userData.id,
                first_name: userData.first_name,
                last_name: userData.last_name,
                email: userData.email,
                avatar: userData.avatar
            });
        }
    }, [userData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    // console.log(formData);

    const handleSaveChanges = async () => {
        try {
            await updateUser(formData, dispatch);
            handleClose();
            toast.success('Update successful!');
        } catch (error) {
            toast.error('Failed to update. Please try again.');
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update User Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formUserId">
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter id"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formUserFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            name="first_name"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formUserLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            name="last_name"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formUserEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formUserEmail">
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter avatar"
                            name="avatar"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
