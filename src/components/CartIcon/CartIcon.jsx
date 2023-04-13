import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/Cart/cart-action';
import { selectCartCount, selectIsCartOpen } from '../../store/Cart/cart-selector';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cartIcon.styles';


const CartIcon = () => {
  const dispatch = useDispatch()

  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  const toogleHandler = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartIconContainer onClick={toogleHandler}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;