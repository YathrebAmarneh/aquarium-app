// Dependencies
import React, { Component } from 'react';
// Externals
import Aquarium from '../Aquarium';
import Carousel from '../Carousel';
import Navbar from '../Navbar';
import items from '../../assets/items';
// Internals
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      items,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(item) {
    const { selectedItems } = this.state;
    selectedItems.push(item);
    this.setState({ selectedItems });
  }

  render() {
    const { selectedItems, items } = this.state;

    return (
      <div className="app">
        <Navbar />
        <Carousel items={items} selectItem={this.selectItem} />
        <span className="aquarium-type-info">Top-Down View of Your Aquarium</span>
        <Aquarium selectedItems={selectedItems} />
      </div>
    );
  }
}

export default App;
