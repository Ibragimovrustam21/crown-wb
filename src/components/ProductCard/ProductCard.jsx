import { useDispatch, useSelector } from 'react-redux'
import { addCardItem } from '../../store/Cart/cart-action'
import { selectCartItemsArray } from '../../store/Cart/cart-selector'
import Button, { BUTTON_TYPE_CLASSES } from '../UI/Button/Button'

import { Footer, Image, ProductCardContainer } from './productCard.styles'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product

  const dispatch = useDispatch()
  const cartItemsArray = useSelector(selectCartItemsArray)

  const addToCardItemHandler = () => dispatch(addCardItem(cartItemsArray, product))

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addToCardItemHandler}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard