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
    delete: false,
    deleteId: '',
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

    //get data from API and save it in the state object
    axios.get('https://alfa.propertygrouppoland.pl/q/anielakatanamatlok/getAll').then((response) => {
      this.setState({ offers: response.data.data });
    })

  }

  addOffer = (e) => {
    e.preventDefault();

    //adding new offer via API
    axios.post('https://alfa.propertygrouppoland.pl/q/anielakatanamatlok/create', this.state.addOffer);

    //adding new offer to the state
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

    //close 'addOffer' window 
    document.querySelector('.addOffer').style.display = 'none';

  }

  handleUpdate = (e) => {
    e.preventDefault();

    //update the data via API
    axios.post(`https://alfa.propertygrouppoland.pl/q/anielakatanamatlok/update`, this.setState.editOffer);

    //update the data to the state
    let { offers } = this.state;
    let index = offers.findIndex(item => item.id === this.state.editOffer.id);
    offers[index] = this.state.editOffer;
    this.setState({ offers })

    //close 'editOffer' window
    document.querySelector('.editOffer').style.display = 'none';
  }


  handleDelete = (id) => {


    //delete data via API
    axios.delete(`https://alfa.propertygrouppoland.pl/q/anielakatanamatlok/delete/${id}`).then(response => console.log(response));

    //delete offer from state
    let { offers } = this.state;
    let index = offers.findIndex(item => item.id === id);
    offers.splice(index, 1);
    this.setState({ offers })

    this.setState({ delete: false });


  }

  openAddOffer = (e) => {
    e.preventDefault();
    document.querySelector('.addOffer').style.display = 'flex'; //open 'addOffer' window
  }
  closeAddOffer = (e) => {
    e.preventDefault();
    document.querySelector('.addOffer').style.display = 'none'; //close 'addOffer' window
  }

  openEditOffer = (e, offer) => {

    e.preventDefault();
    document.querySelector('.editOffer').style.display = 'flex'; //open 'editOffer' window

    //set the parameters of offer to the state
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
    document.querySelector('.editOffer').style.display = 'none'; //close 'editOffer' window
  }


  handleCloseDelete = (e) => {
    e.preventDefault();
    document.querySelector('.deleteOffer').style.display = 'none'; //close 'deleteOffer' window
  }

  openDeleteWindow = (e, id) => {
    e.preventDefault();

    this.setState({ deleteId: id })

    //display 'deleteOffer' window
    document.querySelector('.deleteOffer').style.display = "flex";
  }

  handleConfirmDelete = (e) => {
    e.preventDefault();

    //confirm delete, 
    this.setState({ delete: true }, this.handleDelete(this.state.deleteId));

  }

  render() {
    return (

      <div className="app">

        <div className="app__container">

          <h1 className="app__title">najnowsze oferty</h1>

          <hr className="app__hr" />

          <AddOffer handleClose={this.closeAddOffer} offer={this.state.addOffer} handleForm={this.handleFormAdd} add={this.addOffer} />
          <EditOffer offer={this.state.editOffer} handleForm={this.handleFormEdit} handleClose={this.handleCloseEdit} handleUpdate={this.handleUpdate} />
          <DeleteOffer close={this.handleCloseDelete} deleteConfirm={this.state.delete} handleConfirmDelete={this.handleConfirmDelete} />

          {this.state.offers.length === 0 ? (<p className="app__loading">Wczytywanie ofert ...</p>) : <OfferList offers={this.state.offers} edit={this.openEditOffer} deleteOffer={this.openDeleteWindow} />}

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
