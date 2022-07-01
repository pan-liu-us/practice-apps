import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      word: '',
      definition: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    if (this.state.word.length === 0 || this.state.definition.length === 0 ) {
      alert('You forget to put something')
    } else {
      alert('You add a new word: ' + this.state.word);
      event.preventDefault();
      this.props.createOne(this.state);
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Add A New Word</h2>
            <label>Enter your word
              <input
                type="text"
                name="word"
                id="word"
                onChange={this.handleInputChange} />
            </label>
            <br/>
            <label>Enter your definition
              <input
                type="text"
                name="definition"
                id="definition"
                onChange={this.handleInputChange} />
           </label>
           <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Form;