import CategoryItems from '../CategoryItems/CategoryItems';

import './CategoryMenu.scss';

const CategoryMenu = ({ categories }) => {
  return (
    <div className='category-menu-container'>
      {categories.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;
