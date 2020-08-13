
import React from 'react';
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useState } from 'react'

function Modals(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Christian McCaffrey</Modal.Title>
        </Modal.Header>
        <Modal.Body>Put a bunch of stats passed from props</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add to Team
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Modals