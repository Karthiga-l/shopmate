import './CartCard.css';

export const CartCard = ({ products }) => {
  const { name, price, image } = products;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
    </div>
  );
};
