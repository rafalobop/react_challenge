import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import '../css/home.css';
import NewTeamForm from '../Components/NewTeamForm';
import MyTeam from '../Components/MyTeam';
import { getCharacters } from '../helpers/rutaHeroes';
const Home = () => {
  const [characters, setCharacters] = useState({
    data: [],
    loading: true,
  });

  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    getCharacters().then((character) => {
      setCharacters({
        data: character,
        loading: false,
      });
    });
  }, []);

  const characterData = characters.data.map((char) => {
    console.log(char);
    return char;
  });
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
    console.log(team);
    setMyteamActive(true);
  };
  console.log(team.name);
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
          <div>
            <MyTeam
              listaEquipos={listaEquipos}
              team={team}
              setTeam={setTeam}
              characterData={characterData}
              characters={characters}
              setCharacters={setCharacters}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
