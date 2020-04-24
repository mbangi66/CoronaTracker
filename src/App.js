import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import coronaimg from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    states: ""
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleStatesChange = async states => {
    const fetchedData = await fetchData(states);
    this.setState({ data: fetchedData, states: states });
    console.log(fetchedData);
  };
  render() {
    const data = this.state.data;
    const states = this.state.states;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaimg} alt="Corona"></img>
        <Cards data={data} />
        <CountryPicker handleStatesChange={this.handleStatesChange} />
        <Chart data={data} states={states} />
      </div>
    );
  }
}

export default App;
