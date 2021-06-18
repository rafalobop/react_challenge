import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import '../css/home.css';
import NewTeamForm from '../Components/NewTeamForm';

const Home = () => {
  const [team, setTeam] = useState({
    name: '',
    characters: [],
  });
  let equipoInicial = JSON.parse(localStorage.getItem('listaEquipos'));
  if (!equipoInicial) {
    equipoInicial = [];
  }
  const [listaEquipos, setListaEquipos] = useState(equipoInicial);
  const [myteamActive, setMyteamActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);

  useEffect(() => {
    if (listaEquipos) {
      localStorage.setItem('listaEquipos', JSON.stringify(listaEquipos));
    } else {
      localStorage.setItem('listaEquipos', JSON.stringify([]));
    }
  }, []);
  const crearEquipo = (team) => {
    setListaEquipos([...listaEquipos, team]);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {!myteamActive ? (
          <div className="myteam">
            <h2>No tienes equipos creados</h2>
            <button className="btn-team" onClick={toggle}>
              Crear Equipo
            </button>
            <NewTeamForm
              toggle={toggle}
              openModal={openModal}
              setOpenModal={setOpenModal}
              team={team}
              setTeam={setTeam}
              crearEquipo={crearEquipo}
            />
          </div>
        ) : (
          <h2>Mi equipo</h2>
        )}
      </div>
    </>
  );
};

export default Home;
