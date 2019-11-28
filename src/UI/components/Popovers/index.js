import React, {useEffect} from 'react';
import './popovers.scss';
import Modal from './Modal';
import Spinner from './Spinner';
import ProgressBar from './ProgressBar';

export default ({
    showModal,
    popOverType,
    progress,
    ...rest
}) => {
    console.log("REST: ", rest);
    return (
        <div className={`easyPopover ${showModal ? 'showModal' : ''}`}>
            {
                (popOverType === 'spinner') ? (
                    <Spinner message={ rest.message } />
                ) : (popOverType === 'progressBar') ? (
                    <ProgressBar progress={progress} messaage={rest.messaage} />
                ) : (
                    <Modal {...rest} />
                )
            }
        </div>
    );
}