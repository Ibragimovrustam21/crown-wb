import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { CheckoutContainer, CheckoutHeader, HeaderBlock } from './checkout.styles';
import { selectCartItemsArray, selectCartTotal } from '../../store/Cart/cart-selector'
import PaymentForm from '../../components/PaymentForm/payment-form';

const Checkout = () => {
  const cartItemsArray = useSelector(selectCartItemsArray)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock className='header-block'>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock className='header-block'>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock className='header-block'>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock className='header-block'>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItemsArray.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${cartTotal}</div>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;