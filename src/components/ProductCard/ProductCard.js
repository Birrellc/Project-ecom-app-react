import './ProductCard.scss';

import Button from '../Button';

const ProductCard = () => {
  return (
    <div className='product-card-container'>
      <img src='' alt='' />
      <div className='footer'>
        <span className='name'></span>
        <span className='price'></span>
      </div>
      <Button></Button>
    </div>
  );
};

export default ProductCard;
