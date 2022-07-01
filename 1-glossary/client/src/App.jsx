import React from 'react';
import axios from 'axios';
import Search from './components/Search.jsx'
import Form from './components/Form.jsx'
import List from './components/List.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossaries: [],
      queryString: ''
    }
    this.createOne = this.createOne.bind(this)
    this.editOne = this.editOne.bind(this)
    this.deleteOne = this.deleteOne.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('/glossary')
      .then(response => this.setState({glossaries:response.data}))
      .catch(error => console.log(error))
  }

  onSearchSubmit(term) {
    this.setState({queryString: term})
  }

  createOne(newObj) {
    axios.post('/glossary', newObj)
      .then((response) => this.setState({glossaries:response.data}))
      .catch(error => console.log(error))
    // axios.get('/glossary')
    //   .then(response => this.setState({glossaries:response.data}))
    //   .catch(error => console.log(error))
  }

  editOne(updatedObj, id) {
    console.log(updatedObj, id)
    axios.put('/glossary/' + id, updatedObj)
    .then((response) => {
      this.setState({glossaries:response.data})
      console.log("response: ", response)
    })
    .catch(error => console.log(error))
  }

  deleteOne(id) {
    axios.delete('/glossary/' + id)
    .then((response) => this.setState({glossaries:response.data}))
    .catch(error => console.log(error))
  }

  render() {
    const wordsToRender = [];
    for (let glossary of this.state.glossaries) {
      if (glossary.word.toLowerCase().includes(this.state.queryString.toLowerCase())) {
        wordsToRender.push(glossary)
      }
    }

    return(
      <div>
        <h1>Glossary App</h1>
        <Search onSearchSubmit={this.onSearchSubmit}/>
        <Form createOne={this.createOne}/>
        <List glossaries={wordsToRender} editOne={this.editOne} deleteOne={this.deleteOne}/>
      </div>
    );
  }
}
export default App;
