import React from 'react';
import OfferItem from './OfferItem'

const OfferList = ({ offers, edit, deleteOffer }) => {


    return (<div className="list">

        {offers.map((offer) => <OfferItem key={offer.id} offer={offer} edit={edit} deleteOffer={deleteOffer} />)}

    </div>);



}

export default OfferList;