import React from 'react';
import PopupWindow from './PopupWindow/PopupWindow'
import SmallButton from './Button/SmallButton'

const DeleteOffer = ({ close, deleteConfirm, handleConfirmDelete }) => {
    return (

        <PopupWindow className="deleteOffer">

            <div className="delete">

                <span className="delete__close" onClick={close}>X</span>

                <h1 className="delete__title">{deleteConfirm ? 'Oferta została usunięta' : 'Czy na pewno checsz usunąć tę ofertę?'}</h1>

                {deleteConfirm ? <SmallButton onClick={close}>ok</SmallButton> : (<div className='delete__buttons'><SmallButton onClick={handleConfirmDelete} className="delete__button">tak</SmallButton><SmallButton delete onClick={close} className="delete__button">nie</SmallButton></div>)}

            </div>

        </PopupWindow>
    );
}

export default DeleteOffer;