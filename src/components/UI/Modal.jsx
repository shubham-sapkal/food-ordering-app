import React from "react";
import ReactDOM from "react-dom";

import styles from './Modal.module.css';

const BackDrop = props => {
    return (
        <div className={styles.backdrop} onClick={props.onCloseCart} ></div>
    );
};

const ModalOverlay = props => {
    return(
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
}



const Modal = (props) => {
    // return (
    //     <React.Fragment>
    //         <BackDrop />
    //         <ModelOverlay>
    //             {props.children}    
    //         </ModelOverlay>
    //     </React.Fragment>
    // );

    const portalElement = document.getElementById('overlays');

    return (
        <React.Fragment>
            {/* creating portals  */}
            {ReactDOM.createPortal(<BackDrop onCloseCart={props.onCloseCart} /> ,portalElement ) }
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    )

}


export default Modal;