import React from 'react';

class ListEntry extends React.Component {

    constructor(props) {
    super(props)
    this.state = {
      newDefinition: '',
    }
    this.handlePopOut = this.handlePopOut.bind(this)
    this.handleWordDelete = this.handleWordDelete.bind(this)
  }

  handlePopOut() {
    console.log(this.props.editOne)
    const newDefinition = prompt(`Editing definition for ${this.props.glossary.word}`,"");
    if (newDefinition !== null && newDefinition !== "") {
      const copy = {...this.state}
      copy.newDefinition = newDefinition
      this.setState(copy)
      this.props.editOne(copy, this.props.glossary._id)
      this.setState({newDefinition:''})
    }
  }

  handleWordDelete(e) {
    e.preventDefault();
    this.props.deleteOne(this.props.glossary._id);
  }

  render() {
    const { glossary, editOne, deleteOne } = this.props;
    return(
      <div>
        <li>
        <p>{glossary.word}</p>
        <p>{glossary.definition}</p>
        <button onClick={this.handlePopOut}>Edit definition</button>
        <button onClick={this.handleWordDelete}>Delete</button>
        </li>
      </div>
    )
  }
}

export default ListEntry;