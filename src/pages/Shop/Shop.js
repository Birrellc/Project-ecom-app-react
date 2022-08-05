import ProductData from '../../shopData.json';

const Shop = () => {
  return (
    <div>
      {ProductData.map((id, name) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
