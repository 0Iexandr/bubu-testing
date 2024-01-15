import './Catalog.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import carriage from '../../assets/svg/carriage.svg';
import room from '../../assets/svg/room.svg';
import chair from '../../assets/svg/chair.svg';
import feeding from '../../assets/svg/feeding.svg';
import soap from '../../assets/svg/soap.svg';
import autochair from '../../assets/svg/autochair.svg';
import car from '../../assets/svg/car.svg';
import toy from '../../assets/svg/toy.svg';
import clothes from '../../assets/svg/clothes.svg';
import newProducts from '../../assets/svg/new.svg';
import menu from '../../assets/svg/Menu.svg';
import back from '../../assets/svg/back.svg';

const catalogData = [
  {
    icon: carriage,
    name: 'Дитячі коляски',
    subcategories: [
      'Коляски 3 в 1',
      'Зимові конверти',
      'Аксесуари та комплектуючі',
      'Коляски для двійні',
      'Муфти',
    ],
  },
  {
    icon: room,
    name: 'Дитяча кімната',
    subcategories: [
      'Коляски 3 в 1',
      'Зимові конверти',
      'Аксесуари та комплектуючі',
      'Коляски для двійні',
      'Муфти',
    ],
  },
  {
    icon: chair,
    name: 'Стільці і шезлонги',
    subcategories: [
      'Коляски 3 в 1',
      'Зимові конверти',
      'Аксесуари та комплектуючі',
      'Коляски для двійні',
      'Муфти',
    ],
  },
  {
    icon: feeding,
    name: 'Для годування',
    subcategories: [
      'Коляски 3 в 1',
      'Зимові конверти',
      'Аксесуари та комплектуючі',
      'Коляски для двійні',
      'Муфти',
    ],
  },
  {
    icon: soap,
    name: 'Гігієна і догляд',
    subcategories: [
      'Коляски 3 в 1',
      'Зимові конверти',
      'Аксесуари та комплектуючі',
      'Коляски для двійні',
      'Муфти',
    ],
  },
  {
    icon: autochair,
    name: 'Автокрісла',
    subcategories: [
      'Коляски 3 в 1',
      'Зимові конверти',
      'Аксесуари та комплектуючі',
      'Коляски для двійні',
      'Муфти',
    ],
  },
  {
    icon: car,
    name: 'Дитячий транспорт',
    subcategories: [
      'Коляски 3 в 1',
      'Зимові конверти',
      'Аксесуари та комплектуючі',
      'Коляски для двійні',
      'Муфти',
    ],
  },
  {
    icon: toy,
    name: 'Іграшки',
    subcategories: [
      'Коляски 3 в 1',
      'Зимові конверти',
      'Аксесуари та комплектуючі',
      'Коляски для двійні',
      'Муфти',
    ],
  },
  {
    icon: clothes,
    name: 'Одяг',
    subcategories: [
      'Коляски 3 в 1',
      'Зимові конверти',
      'Аксесуари та комплектуючі',
      'Коляски для двійні',
      'Муфти',
    ],
  },
  {
    icon: newProducts,
    name: 'Новий товар',
    subcategories: [
      'Коляски 3 в 1',
      'Зимові конверти',
      'Аксесуари та комплектуючі',
      'Коляски для двійні',
      'Муфти',
    ],
  },
];

const Catalog = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = categoryIndex => {
    setMenuOpen(true);
    setSelectedCategory(categoryIndex);
  };

  const handleSubcategoryClick = () => {
    setMenuOpen(false);
  };

  const handleBackButtonClick = () => {
    setSelectedCategory(null);
  };

  return (
    <div
      className={`catalog ${menuOpen ? 'catalog--opened' : null} ${className}`}
    >
      <button
        className={`catalog__button ${
          menuOpen ? 'catalog__button--opened' : null
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="catalog__button--span">
          <img src={menu} alt="меню" />
          КАТАЛОГ
        </span>
        {menuOpen && <hr className="catalog__button--separator" />}
      </button>
      {menuOpen && (
        <ul className="catalog__list">
          {selectedCategory === null && (
            <button
              className="back-button menu-button"
              onClick={() => setMenuOpen(false)}
            >
              <img src={back} alt="back" />
              Меню
            </button>
          )}
          {selectedCategory === null ? (
            catalogData.map((category, index) => (
              <li
                key={index}
                className="catalog__item"
                onClick={() => handleCategoryClick(index)}
              >
                <img src={category.icon} alt={category.name} />
                <span className="catalog__item--span">{category.name}</span>
              </li>
            ))
          ) : (
            <>
              <button className="back-button" onClick={handleBackButtonClick}>
                <img src={back} alt="back" />
                Каталог
              </button>
              {catalogData[selectedCategory].subcategories.map(
                (subcategory, index) => (
                  <li key={index}>
                    <Link
                      to="/shop"
                      onClick={() => handleSubcategoryClick()}
                      className="catalog__item--span"
                    >
                      {subcategory}
                    </Link>
                  </li>
                ),
              )}
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default Catalog;
