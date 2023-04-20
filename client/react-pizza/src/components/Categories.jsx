import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((el, id) => {
            return (
              <li
                className={activeCategory === id ? 'active' : ''}
                onClick={() => onClickCategory(id)}
                key={`${el}_${id}`}
              >
                {el}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = { activeCategory: null, items: [] };
export default Categories;
