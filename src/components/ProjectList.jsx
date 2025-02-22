import React from 'react';
import PropTypes from 'prop-types';


const ProjectList = ({ projects }) => {
  return (
    <ul className="project-list">
      {projects.map((item, index) => {
        return (
          <li key={index} className="project-list__item">
            <img
              className="project-list__img"
              src={item.img}
              alt={`image of ${item.category} category`}
            />
          </li>
        );
      })}
    </ul>
  );
};


ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectList;
