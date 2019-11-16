import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ModalHeader from './ModalHeaders';
import ModalFooter from './ModalFooter';

export default ({
    headerTitle = '',
    footerOptions = [],
    message = '',
    customComponent = null,
    size = 'default',
    type = 'default',
    onModalClose = () => {},
    setShowModal = () => {}
}) => {
    const closeModal = () => {
        onModalClose();
        setShowModal(false);
    }
    const footerButtons = (footerOptions.length > 0) ? footerOptions : [{
        onClick: closeModal
    }];
    return (
        <div className={`easyModal ${ size } shadow`}>
            <FontAwesomeIcon 
                icon={ faTimes } 
                color="#000"
                onClick={ closeModal } 
                className="easyModal__close" 
                size="lg" 
            />
            {
                headerTitle ? (
                    <ModalHeader type={type} message headerTitle={headerTitle} />
                ) : null
            }
            <section className="easyModal__body">
                {
                    customComponent ? customComponent : message ? (<p>
                        {
                            message
                        }
                    </p>) : null
                }
            </section>
            {
                (customComponent) ? null : (
                    <ModalFooter footerOptions={ footerButtons } />
                )
            }
        </div>
    );
}