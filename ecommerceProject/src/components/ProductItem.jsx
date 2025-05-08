import './ProductItem.css';

function ProductItem({ product }) {
  const { name, price, description, image } = product;

  return (
    <div className="product-item">
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p className="price">${price.toFixed(2)}</p>
      <p className="description">{description}</p>
    </div>
  );
}

export default ProductItem;
