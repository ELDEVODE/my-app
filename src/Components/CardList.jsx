import React from 'react';
import axios from 'axios';

export default class CardList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://assessment-edvora.herokuapp.com/`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
      const f = persons[Object.keys(persons)[0]];
      console.log(f);
    });
  }

  render() {
    return <></>;
  }
}
