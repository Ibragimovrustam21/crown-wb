import { useDispatch, useSelector } from 'react-redux';
import { addCardItem, clearItemFromCart, removeCartItem } from '../../store/Cart/cart-action';
import { selectCartItemsArray } from '../../store/Cart/cart-selector';
import { CheckoutItemContainer, ImageContainer, NameAndPrice, Quantity, RemoveButton } from './checkoutItem.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch()
  const cartItemsArray = useSelector(selectCartItemsArray)

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItemsArray, cartItem))
  const addItemHandler = () => dispatch(addCardItem(cartItemsArray, cartItem))
  const removeItemHandler = () => dispatch(removeCartItem(cartItemsArray, cartItem))

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NameAndPrice>{name}</NameAndPrice>
      <Quantity>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </Quantity>
      <NameAndPrice> {price}</NameAndPrice>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;