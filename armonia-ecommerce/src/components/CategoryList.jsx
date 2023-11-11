import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ categoryType }) => {
  let categories = [];
  if (categoryType === 'electronics') {
    categories = [
      { id: 2, name: 'Smartphones' },
      { id: 2, name: 'Laptops' },
      { id: 3, name: 'Tablets' },
    ];
  } else if (categoryType === 'clothing') {
    categories = [
      { id: 4, name: 'Men\'s Clothing' },
      { id: 5, name: 'Women\'s Clothing' },
      { id: 6, name: 'Children\'s Clothing' },
    ];
  }

  return (
    <div className='CategoryList'>
      <h2>{categoryType === 'electronics' ? 'Electrónicos' : 'Ropa'}</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/category/${categoryType}/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;


