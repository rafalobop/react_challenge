import React, { useState } from 'react';
import '../css/myteam.css';
import Card from '../Components/Card';

const MyTeam = ({
  listaEquipos,
  team,
  setTeam,
  characterData,
  characters,
  setCharacters,
}) => {
  const [showCharacters, setShowCharacters] = useState(false);

  const agregarHeroe = () => {
    setShowCharacters(!showCharacters);
  };
  return (
    <>
      <h2 className="myteam-title">Mi Equipo</h2>
      <div className="myteam-container">
        {!showCharacters ? (
          <button className="show-btn" onClick={agregarHeroe}>
            Agregar Personaje
          </button>
        ) : (
          <button
            className="close-btn"
            onClick={() => setShowCharacters(!showCharacters)}
          >
            X
          </button>
        )}

        <div className="characters-container">
          {characters.loading ? (
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : null}
          {showCharacters
            ? characterData.map((elem) => {
                return <Card key={elem.id} elem={elem} />;
              })
            : null}
        </div>
        <div className="characters-selected"></div>
      </div>
    </>
  );
};

export default MyTeam;
