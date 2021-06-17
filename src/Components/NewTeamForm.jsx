import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../css/newteamform.css';
import swal from 'sweetalert';

const NewTeamForm = ({ toggle, openModal, setOpenModal, team, setTeam }) => {
  const [error, setError] = useState(false);

  let starterTeam = JSON.parse(localStorage.getItem('team'));
  if (!starterTeam) {
    starterTeam = [];
  }
  const [newTeam, setNewTeam] = useState(starterTeam);

  const handleChange = (e) => {
    setTeam({
      ...team,
      [e.target.name]: e.target.value,
    });
  };
  const { name } = team;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      // console.log(`name`, name);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    } else {
      setError(false);
      setTeam({
        [e.target.name]: '',
      });
    }
  };
  // console.log(team);
  return (
    <>
      <Modal isOpen={openModal} toggle={toggle} className="new-team-form">
        <ModalHeader>Nuevo Equipo</ModalHeader>
        <ModalBody>
          {error ? (
            <p className="error">Debes asignar un nombre a tu Equipo</p>
          ) : null}
          <form action="" className="newteam-form">
            <label htmlFor="name">Nombre del Equipo</label>
            <input
              type="text"
              name="name"
              placeholder="Ingresa el nombre de tu equipo"
              onChange={handleChange}
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <button type="submit" onClick={handleSubmit}>
            Crear Equipo
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default NewTeamForm;
