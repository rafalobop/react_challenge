import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import '../css/home.css';
import NewTeamForm from '../Components/NewTeamForm';

const Home = () => {
  const [myteamActive, setMyteamActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);
  const [team, setTeam] = useState({
    name: '',
    characters: [],
  });

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
