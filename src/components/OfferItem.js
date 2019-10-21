import React from 'react';
import SmallButton from './Button/SmallButton'

const OfferItem = ({ offer, edit, deleteOffer }) => {

    const { id, city, street, property, apartment, price, type, description } = offer;

    return (

        <div className="offer">

            <form className="offer__container">

                <h1 className="offer__h1">{city}</h1>
                <h2 className="offer__h2">ul. {street} <span>{property}</span>  <span>{apartment && ('/' + apartment)}</span></h2>
                <p className="offer__p">Cena: <span className="offer__bold">{price} zł</span></p>
                <p className="offer__p">Typ: {type}</p>
                <p className="offer__p">{description}</p>

                <div className="offer__buttons">

                    <SmallButton className="offer__button" onClick={(e) => edit(e, offer)}>Edytuj</SmallButton>
                    <SmallButton delete className="offer__button" onClick={(e) => deleteOffer(e, id)}>Usuń</SmallButton>

                </div>
            </form>
        </div>
    );
}

export default OfferItem;