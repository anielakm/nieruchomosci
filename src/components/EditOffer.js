import React from 'react';
import PopupWindow from './PopupWindow/PopupWindow'
import SmallButton from './Button/SmallButton'

const EditOffer = ({ offer, handleForm, handleClose, handleUpdate }) => {

    return (
        <PopupWindow className="editOffer">

            <form className="form">

                <span className="form__close" onClick={handleClose}>X</span>

                <h1 className="form__title">Edytuj ofertę</h1>

                <div className="form__inputs">

                    <label className="form__label" htmlFor="" >Miasto</label><input className="form__input" type="text" name='city' value={offer.city} onChange={handleForm} /><br />
                    <label className="form__label" htmlFor="">Ulica</label><input className="form__input" type="text" name='street' value={offer.street} onChange={handleForm} /><br />
                    <label className="form__label form__label--small" htmlFor="">Nr domu</label><input className="form__input" type="text" name='property' value={offer.property} onChange={handleForm} /><br />
                    <label className="form__label form__label--small" htmlFor="">Nr mieszkania</label><input className="form__input" type="text" name='apartment' value={offer.apartment} onChange={handleForm} /><br />
                    <label className="form__label" htmlFor="">Cena</label><input className="form__input" type="text" name='price' value={offer.price} onChange={handleForm} /><br />
                    <label className="form__label" htmlFor="">Typ</label><input className="form__input" type="text" name='type' value={offer.type} onChange={handleForm} /><br />
                    <label className="form__label" htmlFor="">Opis</label><textarea className="form__textarea" id="" name='description' value={offer.description} onChange={handleForm}></textarea><br />

                </div>

                <div className="form__buttons">

                    <SmallButton className="form__button" onClick={handleUpdate} >Ok</SmallButton>

                    <SmallButton delete className="form__button" onClick={handleClose}>Anuluj</SmallButton>

                </div>

            </form>

        </PopupWindow>);
}

export default EditOffer;