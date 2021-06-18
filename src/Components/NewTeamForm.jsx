import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import '../css/newteamform.css';
import uuid from 'uuid/dist/v4';
import swal from 'sweetalert';

const NewTeamForm = ({
  toggle,
  openModal,
  setOpenModal,
  team,
  setTeam,
  crearEquipo,
}) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (team.name === '') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    setError(false);
    team.id = uuid();
    crearEquipo(team);
    swal({
      title: 'Listo!',
      text: 'Equipo Creado!',
      icon: 'success',
    });
    setTeam({
      name: '',
      characters: [],
    });

    console.log(`Equipo:`, team);
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
          <form action="" className="newteam-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre del Equipo</label>
            <input
              type="text"
              name="name"
              placeholder="Ingresa el nombre de tu equipo"
              onChange={handleChange}
              value={team.name}
            />
            <button type="submit">Crear Equipo</button>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default NewTeamForm;
