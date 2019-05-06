import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes.js";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    //const { params } = this.props.match.params;
    this.ref = base.syncState(`${this}`);
  }

  addFish = fish => {
    //Take a copy of existing state
    const fishes = { ...this.state.fishes };
    //add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishes object to state
    this.setState({
      fishes: fishes
    });

    console.log("Adding a fish!");
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    const order = { ...this.state.order };

    order[key] = order[key] + 1 || 1;

    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood of the Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
