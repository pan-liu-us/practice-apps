import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {

  render() {
    const { glossaries, editOne, deleteOne } = this.props;
    return(
      <div>
        <ul>
        <h2>Lists</h2>
        {glossaries.map((glossary) =>
        <ListEntry
          key={glossary._id}
          glossary={glossary}
          editOne={editOne}
          deleteOne={deleteOne}
        />)}
        </ul>
    </div>
    )
  }
}

export default List;