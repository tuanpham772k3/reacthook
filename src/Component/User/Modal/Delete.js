import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { usersContext } from '../UserContext/UserContext';
import { deleteUser } from '../UserContext/ApiAPI';
import { toast } from 'react-toastify';

export default function Delete({ show, handleClose, userDelete }) {
  const { dispatch } = useContext(usersContext);

  const handleConfirm = async () => {
    try {
      await deleteUser(userDelete, dispatch);
      handleClose();
      toast.success('Delete successful!');
    } catch (error) {
      toast.error('Failed to delete. Please try again.');
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the user with ID: {userDelete.id}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
