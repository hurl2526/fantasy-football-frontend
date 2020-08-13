import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './App.css';

const SinglePlayer = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { displayName, overallRank, position, team, _id: id } = props.player;
  return (
    <>
      <tr onClick={handleShow} key={id}>
        <td key={id}>{overallRank}</td>
        <td>{displayName}</td>
        <td>{position}</td>
        <td>{team}</td>
      </tr>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <h4 className='modal-title passion'>
            <img id='pcTeamImg' src={`/images/teams/${team}.png`} alt="..." />
            <span id='pcPlayerName'>{displayName}</span>
            "-"
            <span id='pcPlayerPos'>{position}</span>
            ", "<span id='pcPlayerTeam'>{team}</span>
          </h4>
          {/* <Modal.Title>{displayName}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>Put a bunch of stats passed from props</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Add to Team
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// BlogItem.propType = {
//   onDelete: PropTypes.func,
//   onUpdate: PropTypes.func,
//   blog: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       author: PropTypes.string,
//       subject: PropTypes.string,
//       article: PropTypes.string,
//       _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     })
//   ),
// };

export default SinglePlayer;
