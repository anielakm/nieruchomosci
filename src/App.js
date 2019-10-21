import React from 'react';
import axios from 'axios';
import AddOffer from './components/AddOffer'
import EditOffer from './components/EditOffer'
import DeleteOffer from './components/DeleteOffer'
import OfferList from './components/OfferList';
import Button from './components/Button/Button'

class App extends React.Component {

  state = {
    offers: [],
    addOffer: {
      city: '',
      street: '',
      property: '',
      apartment: '',
      price: '',
      type: '',
      description: ''
    },
    editOffer: {
      id: '',
      city: '',
      street: '',
      property: '',
      apartment: '',
      price: '',
      type: '',
      description: ''
    }
  }

  componentDidMount() {

    axios.get('https://alfa.propertygrouppoland.pl/q/anielakatanamatlok/getAll').then((response) => {
      this.setState({ offers: response.data.data });
    })
  }

  addOffer = (e) => {
    e.preventDefault();

    axios.post('https://alfa.propertygrouppoland.pl/q/anielakatanamatlok/create', this.state.addOffer);

    let { offers } = this.state;
    offers.push(this.state.addOffer);

    offers[offers.length - 1].id = offers[offers.length - 2].id + 1;
    this.setState({
      offers,
      addOffer: {
        city: '',
        street: '',
        property: '',
        apartment: '',
        price: '',
        type: '',
        description: ''
      }
    });

    document.querySelector('.addOffer').style.display = 'none';

  }

  handleUpdate = (e) => {
    e.preventDefault();
    axios.post(`https://alfa.propertygrouppoland.pl/q/anielakatanamatlok/update`, this.setState.editOffer);

    let { offers } = this.state;


    let index = offers.findIndex(item => item.id === this.state.editOffer.id);
    offers[index] = this.state.editOffer;
    this.setState({ offers })

    document.querySelector('.editOffer').style.display = 'none';
  }


  handleDelete = (e, id) => {
    e.preventDefault();
    axios.delete(`https://alfa.propertygrouppoland.pl/q/anielakatanamatlok/delete/${id}`).then(response => console.log(response));
    document.querySelector('.deleteOffer').style.display = "flex";
    let { offers } = this.state;
    let index = offers.findIndex(item => item.id === id);
    offers.splice(index, 1);
    this.setState({ offers })

  }

  openAddOffer = (e) => {
    e.preventDefault();
    document.querySelector('.addOffer').style.display = 'flex';
  }
  closeAddOffer = (e) => {
    e.preventDefault();
    document.querySelector('.addOffer').style.display = 'none';
  }
  openEditOffer = (e, offer) => {

    e.preventDefault();
    document.querySelector('.editOffer').style.display = 'flex';

    const { id, city, street, property, apartment, price, type, description } = offer;

    this.setState({
      editOffer: {
        id,
        city,
        street,
        property,
        apartment,
        price,
        type,
        description
      }
    })


  }



  handleFormEdit = (e) => {
    const name = e.target.name;

    this.setState({
      editOffer: {
        ...this.state.editOffer,
        [name]: e.target.value
      }
    })

  }

  handleFormAdd = (e) => {
    const name = e.target.name;

    this.setState({
      addOffer: {
        ...this.state.addOffer,
        [name]: e.target.value
      }
    })

  }

  handleCloseEdit = (e) => {
    e.preventDefault();
    document.querySelector('.editOffer').style.display = 'none';
  }


  handleCloseDelete = (e) => {
    e.preventDefault();
    document.querySelector('.deleteOffer').style.display = 'none';
  }

  render() {
    return (
      <div className="app">
        <div className="app__container">
          <h1 className="app__title">najnowsze oferty</h1>
          <hr className="app__hr" />
          <AddOffer handleClose={this.closeAddOffer} offer={this.state.addOffer} handleForm={this.handleFormAdd} add={this.addOffer} />
          <EditOffer offer={this.state.editOffer} handleForm={this.handleFormEdit} handleClose={this.handleCloseEdit} handleUpdate={this.handleUpdate} />
          <DeleteOffer close={this.handleCloseDelete} />


          {this.state.offers.length === 0 ? (<p className="app__loading">Wczytywanie ofert ...</p>) : <OfferList offers={this.state.offers} edit={this.openEditOffer} deleteOffer={this.handleDelete} />}
          <hr className="app__hr" />
          <div className="app__add">
            <Button className="app__button" onClick={this.openAddOffer}>Dodaj ofertę</Button>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
