import React from 'react';

const Categories = ({ items }) => {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((el, id) => {
          return <li key={`${el}_${id}`}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default Categories;
