import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

const Home = ({ items }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          // onClickItem={(name) => console.log(name)}
        />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((elem) => {
          return <PizzaBlock key={elem.id} {...elem} />;
        })}
      </div>
    </div>
  );
};

export default Home;
