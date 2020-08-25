import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { useState } from 'react';
import './App.css';

const RBPlayer = (props) => {
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
      <Modal size='lg' show={show} onHide={handleClose} animation={false}>
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
                <th>RushAtt</th>
                <th>RushYrds</th>
                <th>RushTDs</th>
                <th>Receptions</th>
                <th>RecYrds</th>
                <th>RecTDs</th>

                <th>Fantasy Points</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>{props.player.rushAtt}</td>
                <td>{props.player.rushYards}</td>
                <td>{props.player.rushTD}</td>
                <td>{props.player.rec}</td>
                <td>{props.player.recYards}</td>
                <td>{props.player.recTD}</td>

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

RBPlayer.propType = {
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

export default RBPlayer;
