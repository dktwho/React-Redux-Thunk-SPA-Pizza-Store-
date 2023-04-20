import React, { useState } from 'react';

const Categories = React.memo(({ activeCategory, items, onClickItem }) => {
  // const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (id) => {
    onClickItem(id);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((el, id) => {
            return (
              <li
                className={activeCategory === id ? 'active' : ''}
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
