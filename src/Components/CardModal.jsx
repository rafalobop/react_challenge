import React, { useState } from 'react';
import '../css/cardmodal.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CardModal = ({ openModal, setOpenModal, toggle, elem }) => {
  return (
    <>
      <Modal isOpen={openModal} toggle={toggle} className="modal-hero">
        <ModalHeader>
          <div className="modal-header-top">
            <div className="modal-top">
              <div className="modal-publisher">
                <p>{elem.biography.publisher}</p>
              </div>
              <div className="modal-card-number">
                <h4>{elem.id}</h4>
              </div>
            </div>
            <div className="modal-bottom">
              <div className="modal-card-title">
                <h3>{elem.name}</h3>
              </div>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="modal-left">
            <div className="modal-img-container">
              <img src={elem.images.md} alt={elem.name} />
            </div>
          </div>
          <div className="modal-right">
            <div className="modal-info">
              <p>Peso: {elem.appearance.weight[1]}</p>
              <p>Altura: {elem.appearance.height[1]}</p>
              <p>Nombre: {elem.name}</p>
              <p>Alias: {elem.biography.aliases}</p>
              <p>Color de Ojos: {elem.appearance.eyeColor}</p>
              <p>Color de Pelo: {elem.appearance.hairColor}</p>
              <p>Lugar de Trabajo: {elem.work.base}</p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="button-modal" onClick={toggle}>
            Cerrar
          </Button>
          <Button
            className="button-add"
            /*onClick={() => seleccionarHeroe(heroes.id)}*/
          >
            Agregar al Equipo
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CardModal;
