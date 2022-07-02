import React from "react";
import axios from "axios";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      addressZip: '',
      cardNumber: '',
      cardExp: '',
      cardCvv: '',
      billingZip: '',
      pageNum: 0
    }
    this.checkUser = this.checkUser.bind(this);
    this.changePage = this.changePage.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  checkUser() {
    axios.get('/checkout')
    .then(response => {
      if (response.status === 200) {
        this.changePage();
      }
    })
    .catch(err => {
       alert('Purchase Completed, Bye!')});
  }

  changePage() {
    this.setState({pageNum: this.state.pageNum + 1});
  }

  handleInputChange(e) {
    const copy = {...this.state};
    const tName = e.target.name;
    const tValue = e.target.value;
    copy[tName] = tValue;
    this.setState(copy);
  }

  handlePurchase() {
    const newOrder = this.state;
    axios.post('/checkout/done', newOrder)
    .then((response) => console.log(response))
    .catch(error => console.log(error))
  }

  renderForm() {
    if(this.state.pageNum === 1) {
      return (
        <form>
          <div>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder='enter your name' />
          </div>
          <div>
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder='enter your email' />
          </div>
          <div>
            <input
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder='create a password' />
          </div>
          <button onClick={this.changePage}>Next</button>
        </form>
      )
    }
    if(this.state.pageNum === 2) {
      return (
        <form>
          <div>
            <input
              type='text'
              name='address1'
              value={this.state.address1}
              onChange={this.handleInputChange}
              placeholder='street address' />
          </div>
          <div>
            <input
              type='text'
              name='address2'
              value={this.state.address2}
              onChange={this.handleInputChange}
              placeholder='address line 2' />
          </div>
          <div>
            <input
              type='text'
              name='city'
              value={this.state.city}
              onChange={this.handleInputChange}
              placeholder='City' />
          </div>
          <div>
            <input
              type='text'
              name='state'
              value={this.state.state}
              onChange={this.handleInputChange}
              placeholder='State / Province/ Region' />
          </div>
          <div>
            <input
              type='number'
              name='addressZip'
              value={this.state.addressZip}
              onChange={this.handleInputChange}
              placeholder='Postal / Zip Code' />
          </div>
          <button onClick={this.changePage}>Next</button>
        </form>
      )
    }
    if(this.state.pageNum === 3) {
      return (
        <form>
          <div>
            <input
              type='number'
              name='cardNumber'
              value={this.state.cardNumber}
              onChange={this.handleInputChange}
              placeholder='enter your credit card number' />
          </div>
          <div>
            <input
              type='date'
              name='cardExp'
              value={this.state.cardExp}
              onChange={this.handleInputChange}
              placeholder='enter your credit card exp date' />
          </div>
          <div>
            <input
              type='number'
              name='cardCvv'
              value={this.state.cardCvv}
              onChange={this.handleInputChange}
              placeholder='cvv' />
          </div>
          <div>
            <input
              type='number'
              name='billingZip'
              value={this.state.billingZip}
              onChange={this.handleInputChange}
              placeholder='Billing Postal / Zip Code' />
          </div>
          <button onClick={this.changePage}>Next</button>
        </form>
      )
    }
    if(this.state.pageNum === 4) {
      return (
        <div>
          <h4>Name: {this.state.name}</h4>
          <h4>Email: {this.state.email}</h4>
          <h4>Password: {this.state.password}</h4>
          <h4>Address: {this.state.address1}</h4>
          <h4>Address2: {this.state.address2}</h4>
          <h4>City: {this.state.city}</h4>
          <h4>State: {this.state.state}</h4>
          <h4>Zip Code: {this.state.addressZip}</h4>
          <h4>CreditCard#: {this.state.cardNumber}</h4>
          <h4>Expiration Date: {this.state.cardExp}</h4>
          <h4>CVV: {this.state.cardCvv}</h4>
          <h4>Billing Zip Code: {this.state.billingZip}</h4>
          <input
            type="submit"
            value="Purchase"
            onClick={() => {
              this.handlePurchase()
              this.changePage()
            }} />
        </div>
      )
    }
    if(this.state.pageNum === 5) {
      return (
        <div>
          <h1>Thanks for Your Purchase!</h1>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        {this.state.pageNum === 0 ?
        (<div>
          <h1>Shopping Cart</h1>
          <li>React Tutorial</li>
          <li>NodeJS Tutorial</li>
          <h2>Ready to check out?</h2>
          <button onClick={this.checkUser}>Continue</button>
          <p>
            <small>WARNING: You will lose all your data if you quit before purchase!</small>
          </p>
        </div>)
        : <></>}
        {this.renderForm()}
      </div>
    )

  }
}

export default App



