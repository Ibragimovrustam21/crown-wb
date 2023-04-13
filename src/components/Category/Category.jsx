import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import { CategoryContainer, CategoryTitle } from './category.styles'
import { categoriesSelector, selectIsLoading } from '../../store/Categories/CategoriesSelector'
import Spinner from '../Spinner/spinner'

export const Category = () => {
  const { category } = useParams()
  const categoriesArray = useSelector(categoriesSelector)
  const isLoading = useSelector(selectIsLoading)
  const [product, setProduct] = useState(categoriesArray[category])

  useEffect(() => {
    setProduct(categoriesArray[category])
  }, [category, categoriesArray])

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {
          isLoading ? <Spinner /> : product?.map(product => (<ProductCard key={product.name} product={product} />))
        }
      </CategoryContainer>
    </>
  )
}
