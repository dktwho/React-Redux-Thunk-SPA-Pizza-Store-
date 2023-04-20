import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/action/filters';
import { fetchPizzas } from '../redux/action/pizzas';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [category]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          items={categoryNames}
          onClickCategory={onSelectCategory}
        />
        <SortPopup activeSortType={sortBy} items={sortItems} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((elem) => <PizzaBlock key={elem.id} isLoading={true} {...elem} />)
          : Array(12)
              .fill(0)
              .map((_, idx) => <PizzaLoadingBlock key={idx} />)}
      </div>
    </div>
  );
};

export default Home;
