// Dependencies
import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
// Internals
import './index.css';


class Aquarium extends Component {
  static propTypes = {
    selectedItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      phEffect: PropTypes.number.isRequired,
      co2Effect: PropTypes.number.isRequired,
    })).isRequired,
  };

  render() {
    const { selectedItems } = this.props;

    return (
      <div className="aquarium">
        {map(selectedItems, (item) => (
          <img
            alt={item.displayName}
            src={item.src}
          />
        ))}
      </div>
    );
  }
}

export default Aquarium;
