import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
// import { Tooltip } from 'react';
// import { OverlayTrigger } from 'react';
import './App.css';

const OverallPlayer = (props) => {
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
                <th>OverallRank</th>
                <th>NerdRank</th>
                <th>PositionRank</th>
                <th>StandDev</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>{overallRank}</td>
                <td>{props.player.nerdRank}</td>
                <td>{props.player.positionRank}</td>
                <td>{props.player.standDev}</td>
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

OverallPlayer.propType = {
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

export default OverallPlayer;
