import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    // const filteredmonsteres = monsters.filter(monster =>
    //   monsters.namne.toLowerCase().includes(searchField.toLowerCase())
    // );

    const filteredmonsteres = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) ||
      monster.email.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monseter"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredmonsteres} />
      </div>
    );
  }
}

export default App;
