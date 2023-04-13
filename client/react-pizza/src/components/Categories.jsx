import React, { useState } from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = useState(false);

  const onSelectItem = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items.map((el, id) => {
          return (
            <li
              className={activeItem === id ? 'active' : ''}
              onClick={() => onSelectItem(id)}
              key={`${el}_${id}`}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Categories;
