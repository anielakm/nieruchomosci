import React from 'react';
import PopupWindow from './PopupWindow/PopupWindow'
import SmallButton from './Button/SmallButton'

const DeleteOffer = ({ close }) => {
    return (<PopupWindow className="deleteOffer">
        <div className="delete">
            <span className="delete__close" onClick={close}>X</span>
            <h1 className="delete__title">Oferta usunięta</h1>
            <SmallButton onClick={close}>ok</SmallButton>
        </div>
    </PopupWindow>);
}

export default DeleteOffer;