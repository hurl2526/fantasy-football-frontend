import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { useState } from 'react';
import './App.css';

const QBPlayer = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { displayName, position, team, _id: id } = props.player;
  return (
    <>
      <tr onClick={handleShow} key={id}>
        <td key={id}>{props.player.playerId}</td>
        <td>{displayName}</td>
        <td>{position}</td>
        <td>{team}</td>
      </tr>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <h4 className='modal-title passion'>
            <img
              style={{ height: '55px', width: '55px' }}
              id='pcTeamImg'
              src={`/images/teams/${team}.jpeg`}
              alt='...'
            />
            <span id='pcPlayerName'>{displayName}</span>-
            <span id='pcPlayerPos'>{position}</span>,{' '}
            <span id='pcPlayerTeam'>{team}</span>
          </h4>
        </Modal.Header>
        <Modal.Body>
          <h3>2019 Stats:</h3>
          <MDBTable striped bordered hover size='sm'>
            <MDBTableHead>
              <tr>
                <th>Attempts</th>
                <th>Completions</th>
                <th>Passing Yrds</th>
                <th>TDs</th>
                <th>Fantasy Points</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>{props.player.attempts}</td>
                <td>{props.player.completions}</td>
                <td>{props.player.passingYards}</td>
                <td>{props.player.passingTD}</td>
                <td>{props.player.fantasyPoints}</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              props.onChange(position, displayName);
              handleClose();
            }}
          >
            Add to Team
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

QBPlayer.propType = {
  blog: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      round: PropTypes.string,
      name2: PropTypes.string,
      round2: PropTypes.string,
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

export default QBPlayer;
