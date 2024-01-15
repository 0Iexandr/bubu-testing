import './Products.scss';

import MultiRangeSlider from 'multi-range-slider-react';

import { useCallback, useEffect, useState } from 'react';

import Container from '../../components/Container/Container';

import ball from '../../assets/img/ball.png';
import bottle from '../../assets/img/bottle.png';
import nutrilon from '../../assets/img/nutrilon.png';
import chair from '../../assets/img/chair.png';
import arrowUp from '../../assets/svg/arrow-up.svg';
import submitBtn from '../../assets/svg/button-submit.svg';

const productsData = {
  selectedCategory: 'Дитячі коляски',
  subcategories: [
    {
      id: 'qwerty1',
      name: 'Коляски 3в1',
    },
    {
      id: 'qwerty2',
      name: 'Зимові конверти',
    },
    {
      id: 'qwerty3',
      name: 'Аксесуари та комплектуючі',
    },
    {
      id: 'qwerty4',
      name: 'Коляски для двійні',
    },
    {
      id: 'qwerty5',
      name: 'Муфти',
    },
  ],
  brands: [
    {
      id: 'brand1',
      name: 'Anex',
    },
    {
      id: 'brand2',
      name: 'Bair',
    },
    {
      id: 'brand3',
      name: 'BabyOno',
    },
    {
      id: 'brand4',
      name: 'Carello',
    },
    {
      id: 'brand5',
      name: 'OK Baby',
    },
    {
      id: 'brand6',
      name: 'Babyroom',
    },
    {
      id: 'brand7',
      name: 'ZD',
    },
    {
      id: 'brand8',
      name: 'Маленька Соня',
    },
    {
      id: 'brand9',
      name: 'Espiro',
    },
  ],
  products: [
    {
      id: 1,
      name: 'Іграшка-головоломка Same Toy IQ Ball Cube',
      preview: ball,
      price: 300,
      discount: 30,
      discountPrice: 200,
      availability: true,
      rating: 5,
      brand: 'brand1',
      subcategory: 'qwerty1',
    },
    {
      id: 2,
      name: 'Пляшечка 130 мл',
      preview: bottle,
      price: 100,
      discount: null,
      discountPrice: null,
      availability: false,
      rating: 4,
      brand: 'brand2',
      subcategory: 'qwerty2',
    },
    {
      id: 3,
      name: 'Суміш молочна суха Nutrilon для...',
      preview: nutrilon,
      price: 350,
      discount: 15,
      discountPrice: 300,
      availability: false,
      rating: 4.5,
      brand: 'brand3',
      subcategory: 'qwerty3',
    },
    {
      id: 4,
      name: 'Автокрісло Maxi-Cosi Citi Concrete grey',
      preview: chair,
      price: 4300,
      discount: null,
      discountPrice: null,
      availability: true,
      rating: 4.7,
      brand: 'brand4',
      subcategory: 'qwerty4',
    },
    {
      id: 5,
      name: 'Автокрісло Maxi-Cosi Citi Concrete grey',
      preview: chair,
      price: 4300,
      discount: null,
      discountPrice: null,
      availability: true,
      rating: 4.7,
      brand: 'brand4',
      subcategory: 'qwerty4',
    },
    {
      id: 6,
      name: 'Іграшка-головоломка Same Toy IQ Ball Cube',
      preview: ball,
      price: 300,
      discount: 30,
      discountPrice: 200,
      availability: true,
      rating: 5,
      brand: 'brand1',
      subcategory: 'qwerty1',
    },
    {
      id: 7,
      name: 'Пляшечка 130 мл',
      preview: bottle,
      price: 100,
      discount: null,
      discountPrice: null,
      availability: false,
      rating: 4,
      brand: 'brand2',
      subcategory: 'qwerty2',
    },
    {
      id: 8,
      name: 'Суміш молочна суха Nutrilon для...',
      preview: nutrilon,
      price: 350,
      discount: 15,
      discountPrice: 300,
      availability: false,
      rating: 4.5,
      brand: 'brand3',
      subcategory: 'qwerty3',
    },
    {
      id: 9,
      name: 'Іграшка-головоломка Same Toy IQ Ball Cube',
      preview: ball,
      price: 300,
      discount: 30,
      discountPrice: 200,
      availability: true,
      rating: 5,
      brand: 'brand1',
      subcategory: 'qwerty1',
    },
    {
      id: 10,
      name: 'Пляшечка 130 мл',
      preview: bottle,
      price: 100,
      discount: null,
      discountPrice: null,
      availability: false,
      rating: 4,
      brand: 'brand2',
      subcategory: 'qwerty2',
    },
    {
      id: 11,
      name: 'Суміш молочна суха Nutrilon для...',
      preview: nutrilon,
      price: 350,
      discount: 15,
      discountPrice: 300,
      availability: false,
      rating: 4.5,
      brand: 'brand3',
      subcategory: 'qwerty3',
    },
    {
      id: 12,
      name: 'Автокрісло Maxi-Cosi Citi Concrete grey',
      preview: chair,
      price: 4300,
      discount: null,
      discountPrice: null,
      availability: true,
      rating: 4.7,
      brand: 'brand4',
      subcategory: 'qwerty4',
    },
    {
      id: 13,
      name: 'Суміш молочна суха Nutrilon для...',
      preview: nutrilon,
      price: 350,
      discount: 15,
      discountPrice: 300,
      availability: false,
      rating: 4.5,
      brand: 'brand3',
      subcategory: 'qwerty3',
    },
    {
      id: 14,
      name: 'Автокрісло Maxi-Cosi Citi Concrete grey',
      preview: chair,
      price: 4300,
      discount: null,
      discountPrice: null,
      availability: true,
      rating: 4.7,
      brand: 'brand4',
      subcategory: 'qwerty4',
    },
    {
      id: 15,
      name: 'Іграшка-головоломка Same Toy IQ Ball Cube',
      preview: ball,
      price: 300,
      discount: 30,
      discountPrice: 200,
      availability: true,
      rating: 5,
      brand: 'brand1',
      subcategory: 'qwerty1',
    },
    {
      id: 16,
      name: 'Пляшечка 130 мл',
      preview: bottle,
      price: 100,
      discount: null,
      discountPrice: null,
      availability: false,
      rating: 4,
      brand: 'brand2',
      subcategory: 'qwerty2',
    },
    {
      id: 17,
      name: 'Автокрісло Maxi-Cosi Citi Concrete grey',
      preview: chair,
      price: 4300,
      discount: null,
      discountPrice: null,
      availability: true,
      rating: 4.7,
      brand: 'brand4',
      subcategory: 'qwerty4',
    },
    {
      id: 18,
      name: 'Іграшка-головоломка Same Toy IQ Ball Cube',
      preview: ball,
      price: 300,
      discount: 30,
      discountPrice: 200,
      availability: true,
      rating: 5,
      brand: 'brand1',
      subcategory: 'qwerty1',
    },
    {
      id: 19,
      name: 'Пляшечка 130 мл',
      preview: bottle,
      price: 100,
      discount: null,
      discountPrice: null,
      availability: false,
      rating: 4,
      brand: 'brand2',
      subcategory: 'qwerty2',
    },
    {
      id: 20,
      name: 'Суміш молочна суха Nutrilon для...',
      preview: nutrilon,
      price: 350,
      discount: 15,
      discountPrice: 300,
      availability: false,
      rating: 4.5,
      brand: 'brand3',
      subcategory: 'qwerty3',
    },
    {
      id: 21,
      name: 'Іграшка-головоломка Same Toy IQ Ball Cube',
      preview: ball,
      price: 300,
      discount: 30,
      discountPrice: 200,
      availability: true,
      rating: 5,
      brand: 'brand1',
      subcategory: 'qwerty1',
    },
    {
      id: 22,
      name: 'Пляшечка 130 мл',
      preview: bottle,
      price: 100,
      discount: null,
      discountPrice: null,
      availability: false,
      rating: 4,
      brand: 'brand2',
      subcategory: 'qwerty2',
    },
    {
      id: 23,
      name: 'Суміш молочна суха Nutrilon для...',
      preview: nutrilon,
      price: 350,
      discount: 15,
      discountPrice: 300,
      availability: false,
      rating: 4.5,
      brand: 'brand3',
      subcategory: 'qwerty3',
    },
    {
      id: 24,
      name: 'Автокрісло Maxi-Cosi Citi Concrete grey',
      preview: chair,
      price: 4300,
      discount: null,
      discountPrice: null,
      availability: true,
      rating: 4.7,
      brand: 'brand4',
      subcategory: 'qwerty4',
    },
    {
      id: 25,
      name: 'Автокрісло Maxi-Cosi Citi Concrete grey',
      preview: chair,
      price: 4300,
      discount: null,
      discountPrice: null,
      availability: true,
      rating: 4.7,
      brand: 'brand4',
      subcategory: 'qwerty4',
    },
    {
      id: 26,
      name: 'Суміш молочна суха Nutrilon для...',
      preview: nutrilon,
      price: 350,
      discount: 15,
      discountPrice: 300,
      availability: false,
      rating: 4.5,
      brand: 'brand3',
      subcategory: 'qwerty3',
    },
    {
      id: 27,
      name: 'Пляшечка 130 мл',
      preview: bottle,
      price: 100,
      discount: null,
      discountPrice: null,
      availability: false,
      rating: 4,
      brand: 'brand2',
      subcategory: 'qwerty2',
    },
    {
      id: 28,
      name: 'Іграшка-головоломка Same Toy IQ Ball Cube',
      preview: ball,
      price: 300,
      discount: 30,
      discountPrice: 200,
      availability: true,
      rating: 5,
      brand: 'brand1',
      subcategory: 'qwerty1',
    },
    {
      id: 29,
      name: 'Іграшка-головоломка Same Toy IQ Ball Cube',
      preview: ball,
      price: 300,
      discount: 30,
      discountPrice: 200,
      availability: true,
      rating: 5,
      brand: 'brand1',
      subcategory: 'qwerty1',
    },
    {
      id: 30,
      name: 'Пляшечка 130 мл',
      preview: bottle,
      price: 100,
      discount: null,
      discountPrice: null,
      availability: false,
      rating: 4,
      brand: 'brand2',
      subcategory: 'qwerty2',
    },
    {
      id: 31,
      name: 'Суміш молочна суха Nutrilon для...',
      preview: nutrilon,
      price: 350,
      discount: 15,
      discountPrice: 300,
      availability: false,
      rating: 4.5,
      brand: 'brand3',
      subcategory: 'qwerty3',
    },
    {
      id: 32,
      name: 'Автокрісло Maxi-Cosi Citi Concrete grey',
      preview: chair,
      price: 4300,
      discount: null,
      discountPrice: null,
      availability: true,
      rating: 4.7,
      brand: 'brand4',
      subcategory: 'qwerty4',
    },
  ],
};

const Products = () => {
  const [sortedProducts, setSortedProducts] = useState(productsData.products);
  const [minValue, setMinValue] = useState(100);
  const [maxValue, setMaxValue] = useState(5000);
  const [tempMinValue, setTempMinValue] = useState(minValue);
  const [tempMaxValue, setTempMaxValue] = useState(maxValue);
  const [filters, setFilters] = useState({
    category: null,
    availability: false,
    discount: false,
    brands: [],
  });

  const handleInput = e => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  const [activeSort, setActiveSort] = useState('default');

  const applyFiltersAndSort = useCallback(() => {
    let filteredProducts = productsData.products;

    if (filters.category) {
      filteredProducts = filteredProducts.filter(
        product => product.subcategory === filters.category,
      );
    }

    if (filters.availability) {
      filteredProducts = filteredProducts.filter(
        product => product.availability,
      );
    }

    if (filters.discount) {
      filteredProducts = filteredProducts.filter(product => product.discount);
    }

    if (filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        filters.brands.includes(product.brand),
      );
    }

    filteredProducts = filteredProducts.filter(product => {
      const price = product.discount ? product.discountPrice : product.price;
      return price >= minValue && price <= maxValue;
    });

    switch (activeSort) {
      case 'popularity':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'cheapest':
        filteredProducts.sort(
          (a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price),
        );
        break;
      case 'mostExpensive':
        filteredProducts.sort(
          (a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price),
        );
        break;
      default:
        break;
    }

    setSortedProducts(filteredProducts);
  }, [minValue, maxValue, filters, activeSort]);

  useEffect(() => {
    setTempMinValue(minValue);
    setTempMaxValue(maxValue);
    applyFiltersAndSort();
  }, [minValue, maxValue, filters, applyFiltersAndSort]);

  const handleMinInputChange = e => {
    const value =
      e.target.value.trim() === '' ? 0 : parseInt(e.target.value, 10);
    setTempMinValue(
      value || value === 0 ? value.toString().replace(/^0+/, '') : '',
    );
  };

  const handleMaxInputChange = e => {
    const value =
      e.target.value.trim() === '' ? 0 : parseInt(e.target.value, 10);
    setTempMaxValue(
      value || value === 0 ? value.toString().replace(/^0+/, '') : '',
    );
  };

  const submitStateUpdate = () => {
    setMinValue(tempMinValue);
    setMaxValue(tempMaxValue);
    applyFiltersAndSort();
  };

  const handleSubmitPrice = () => {
    if (tempMaxValue - tempMinValue >= 0) {
      submitStateUpdate();
    }
  };

  const isButtonDisabled = minValue > maxValue;

  const handleFilterChange = (filter, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filter]: prevFilters[filter] === value ? null : value,
    }));
  };

  const handleBrandFilterChange = brandId => {
    setFilters(prevFilters => ({
      ...prevFilters,
      brands: prevFilters.brands.includes(brandId)
        ? prevFilters.brands.filter(id => id !== brandId)
        : [...prevFilters.brands, brandId],
    }));
  };

  const sortByDefault = () => {
    setActiveSort('default');
    applyFiltersAndSort();
  };

  const sortByPopularity = () => {
    setActiveSort('popularity');
    applyFiltersAndSort();
  };

  const sortByCheapest = () => {
    setActiveSort('cheapest');
    applyFiltersAndSort();
  };

  const sortByMostExpensive = () => {
    setActiveSort('mostExpensive');
    applyFiltersAndSort();
  };

  return (
    <section className="products">
      <Container>
        <div className="products__sorting">
          <h3 className="products__selected-category">
            {productsData.selectedCategory}
          </h3>
          <div className="products-sort">
            <button
              className={`products-sort__button ${
                activeSort === 'default'
                  ? 'products-sort__button--active'
                  : null
              }`}
              onClick={sortByDefault}
            >
              За замовчуванням
            </button>
            <button
              className={`products-sort__button ${
                activeSort === 'popularity'
                  ? 'products-sort__button--active'
                  : null
              }`}
              onClick={sortByPopularity}
            >
              По популярності
            </button>
            <button
              className={`products-sort__button ${
                activeSort === 'cheapest'
                  ? 'products-sort__button--active'
                  : null
              }`}
              onClick={sortByCheapest}
            >
              Дешевші
            </button>
            <button
              className={`products-sort__button ${
                activeSort === 'mostExpensive'
                  ? 'products-sort__button--active'
                  : null
              }`}
              onClick={sortByMostExpensive}
            >
              Дорожчі
            </button>
          </div>
        </div>
        <div className="products__controls">
          <div className="filter">
            <div className="filter__category-wrapper">
              <button
                className="filter__category-btn"
                onClick={() => handleFilterChange('category', null)}
              >
                Категорія{' '}
                <span>
                  <img src={arrowUp} alt="arrow up" />
                </span>
              </button>
              <ul className="filter__subcategories-list">
                {productsData.subcategories.map(({ name, id }) => {
                  return (
                    <li
                      key={id}
                      className="filter__subcategories-item"
                      onClick={() => handleFilterChange('category', id)}
                    >
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <hr className="filter__separator" />
            <label className="filter__checkbox">
              <input
                type="checkbox"
                className="filter__checkbox-input"
                id="availability"
                checked={filters.availability}
                onChange={() =>
                  handleFilterChange('availability', !filters.availability)
                }
              />
              <span className="filter__checkbox-checkmark"></span>В наявності
            </label>
            <hr className="filter__separator" />
            <label className="filter__checkbox">
              <input
                type="checkbox"
                className="filter__checkbox-input"
                id="discount"
                checked={filters.discount}
                onChange={() =>
                  handleFilterChange('discount', !filters.discount)
                }
              />
              <span className="filter__checkbox-checkmark"></span>Зі знижкою
            </label>
            <hr className="filter__separator" />
            <div className="filter__price-wrapper">
              <button className="filter__category-btn">
                Ціна{' '}
                <span>
                  <img src={arrowUp} alt="arrow up" />
                </span>
              </button>
              <div className="filter__price-controls">
                <MultiRangeSlider
                  min={0}
                  max={7000}
                  step={10}
                  minValue={minValue}
                  maxValue={maxValue}
                  ruler={false}
                  label={false}
                  onInput={e => {
                    handleInput(e);
                  }}
                />
                <div className="filter__price-form">
                  <input
                    type="number"
                    className="filter__price-input"
                    value={tempMinValue}
                    onChange={handleMinInputChange}
                  />
                  <span className="filter__price-span">-</span>
                  <input
                    type="number"
                    className="filter__price-input"
                    value={tempMaxValue}
                    onChange={handleMaxInputChange}
                  />
                  <button
                    onClick={handleSubmitPrice}
                    disabled={isButtonDisabled}
                  >
                    <img
                      src={submitBtn}
                      alt="submit button"
                      className="filter__price-img"
                    />
                  </button>
                </div>
              </div>
            </div>
            <hr className="filter__separator" />
            <div className="filter__brands-wrapper">
              <button className="filter__category-btn">
                Виробник{' '}
                <span>
                  <img src={arrowUp} alt="arrow up" />
                </span>
              </button>
              <ul className="filter__brands-list">
                {productsData.brands.map(({ name, id }) => {
                  return (
                    <li key={id}>
                      <label className="filter__checkbox">
                        <input
                          type="checkbox"
                          className="filter__checkbox-input"
                          id={id}
                          checked={filters.brands.includes(id)}
                          onChange={() => handleBrandFilterChange(id)}
                        />
                        <span className="filter__checkbox-checkmark"></span>
                        {name}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <ul className="products__list">
            {sortedProducts.length > 0 ? (
              sortedProducts.map(
                ({ id, name, preview, price, discount, discountPrice }) => (
                  <li className="products__item" key={id}>
                    <img
                      src={preview}
                      alt={name}
                      className="products__item-img"
                    />
                    <h4 className="products__item-title">{name}</h4>
                    {discount ? (
                      <p className="products__item-price discount-price">
                        <span className="products__item-price--strikethrough">
                          {discountPrice} грн
                        </span>
                        {price} грн
                      </p>
                    ) : (
                      <p className="products__item-price">{price} грн</p>
                    )}
                    {discount && (
                      <span className="products__item-discount">
                        -{discount}%
                      </span>
                    )}
                  </li>
                ),
              )
            ) : (
              <p className="products__empty">Немає товарів</p>
            )}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Products;
