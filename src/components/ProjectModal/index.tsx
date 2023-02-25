import React, { useState } from 'react';
import styles from './ProjectModal.module.scss';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { iProjectModal } from '../../interfaces/iProjectModal';
import Link from 'next/link';

function ProjectModal(props: iProjectModal) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="modalDiv">
      <button onClick={toggle} className={styles.ModalOpenButton}>
        {props.projectCard}
      </button>
      <Modal isOpen={modal} toggle={toggle} centered={true} backdrop={true}>
        <ModalHeader
          toggle={toggle}
          className={styles.ModalBackground}
        ></ModalHeader>
        <ModalBody className={styles.ModalBackground}>
          <div className="text-center">
            <h1 className={styles.projectTitle}>{props.projectTitle}</h1>
            <p className={styles.contentModal}>{props.aboutTheProject}</p>
          </div>
          <div className={'text-center ' + styles.tecnologiesTitle}>
            <h3>Tecnologias Utilizadas</h3>
          </div>
          <div className={'text-center ' + styles.tecnologiesBox}>
            {props.tecnologiesUsed.map((tecnologie) => (
              <div className={styles.tecnologiesUsed} key={tecnologie}>
                {tecnologie}
              </div>
            ))}
          </div>
        </ModalBody>
        <ModalFooter className={styles.ModalBackground}>
          <div className={styles.footerButtons}>
            {props.projectLink && (
              <Link onClick={toggle} href={props.projectLink} target="_blank">
                <Button>Ver Projeto</Button>
              </Link>
            )}
            {props.codeLink && (
              <Link onClick={toggle} href={props.codeLink} target="_blank">
                <Button>Ver Código</Button>
              </Link>
            )}
            {/* <Button onClick={toggle}>Fechar</Button> */}
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProjectModal;
