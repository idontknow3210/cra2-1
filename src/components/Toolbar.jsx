import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <ul className="toolbar">
      {filters.map((filter, index) => {
        const className = `toolbar__item${filter === selected ? " toolbar__item_selected" : ""}`;
        return (
          <li
            key={index}
            className={className}
            onClick={() => onSelectFilter(filter)}
          >
            {filter}
          </li>
        );
      })}
    </ul>
  );
}


Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;