import React from 'react';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Shoes',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    },
  ];

  return (
    <div className='categories-container'>
      {/* map the object array onto the page (title = array destructuring) */}

      {categories.map(({ title }) => (
        <div className='category-container'>
          {/* img */}
          <div className='category-body-container'>
            <h2>{title}</h2>
            <h2>Shop Now</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
