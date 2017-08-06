// Dependencies
import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
// Internals
import './index.css';


class Carousel extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      phEffect: PropTypes.number.isRequired,
      co2Effect: PropTypes.number.isRequired,
    })).isRequired,
    selectItem: PropTypes.func.isRequired,
  };

  render() {
    const { selectItem, items } = this.props;

    return (
      <div className="carousel">
        {map(items, (item) => (
          <button onClick={() => selectItem(item)}>
            {item.displayName}
          </button>
        ))}
      </div>
    );
  }
}

export default Carousel;
