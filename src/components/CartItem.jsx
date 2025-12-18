function CartItem({ item }) {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}

export default CartItem;
