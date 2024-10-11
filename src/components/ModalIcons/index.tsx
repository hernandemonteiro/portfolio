import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import styles from './ModalIcons.module.scss';
import { iModalIcons } from '../../interfaces/iModalIcons';

function ModalIcons(props: iModalIcons) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="modalDiv">
      <button onClick={toggle} className={styles.ModalIcon}>
        <abbr title={props.title}>{props.icon}</abbr>
      </button>

      <Modal isOpen={modal} toggle={toggle} centered={true} backdrop={true}>
        <ModalBody className={styles.ModalBackground}>
          <div className={styles.InsideModalIcon}>
            {props.icon}
            <h2>{props.title}</h2>
          </div>
          <div className="text-center">
            <h5>Conhecimento desde {props.since}</h5>
            <p style={{ marginTop: '2%', padding: '2%' }}>
              {props.aboutLanguage}
            </p>
          </div>
        </ModalBody>
        <ModalFooter className={styles.ModalBackground}>
          <Button onClick={toggle}>Fechar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalIcons;
