import React, { useState } from 'react';

const Categories = React.memo(({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (id) => {
    setActiveItem(id);
    onClickItem(id);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((el, id) => {
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
});
export default Categories;
