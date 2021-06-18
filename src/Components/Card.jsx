import React, { useState } from 'react';
import '../css/card.css';
import CardModal from '../Components/CardModal';

const Card = ({ elem }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);
  return (
    <>
      <div className="card" key={elem.id} onClick={toggle}>
        <div className="face back">
          <div className="card-back-container">
            <div className="back-img-container">
              <img src={elem.images.sm} alt={elem.name} className="back-img" />
              <CardModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                toggle={toggle}
                elem={elem}
              />
            </div>
            <div className="bottom">
              <div className="hero-stats">
                <div className="stats-container">
                  <p>Inteligencia: {elem.powerstats.intelligence}</p>
                  <p>Fuerza: {elem.powerstats.strength}</p>
                  <p>Velocidad: {elem.powerstats.speed}</p>
                  <p>Dureza: {elem.powerstats.durability}</p>
                  <p>Poder: {elem.powerstats.power}</p>
                  <p>Combate: {elem.powerstats.combat}</p>
                </div>
              </div>
              <div className="overall-container">
                <div className="overall">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="face front">
          <div className="card-front-container">
            <div className="card-item">
              <div className="card-header">
                <div className="top">
                  <div className="publisher">
                    <p>{elem.biography.publisher}</p>
                  </div>
                  <div className="card-number">
                    <h4>{elem.id}</h4>
                  </div>
                </div>
                <div className="bottom">
                  <div className="card-title">
                    <h3>{elem.name}</h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="img-container">
                  <img
                    src={elem.images.md}
                    alt={elem.name}
                    className="card-img"
                  />
                </div>
              </div>
              <div className="card-footer">
                <div className="top">
                  <div className="hero-info">
                    <div className="height">
                      <h4>Height</h4>
                      <hr />
                      <p>{elem.appearance.height[1]}</p>
                    </div>
                    <div className="weight">
                      <h4>Weight</h4>
                      <hr />
                      <p>{elem.appearance.weight[1]}</p>
                    </div>
                  </div>
                  <div className="orientation">
                    <p className="alignment">{elem.biography.alignment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
