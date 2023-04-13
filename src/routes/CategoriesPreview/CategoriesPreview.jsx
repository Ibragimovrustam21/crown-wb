import { useSelector } from 'react-redux'
import { categoriesSelector, selectIsLoading } from '../../store/Categories/CategoriesSelector'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'
import Spinner from '../../components/Spinner/spinner'

import { CategoriesPreviewContainer } from './categories-preview.styles'

const CategoriesPreview = () => {
  const categoriesArray = useSelector(categoriesSelector)
  const isLoading = useSelector(selectIsLoading)
  return (
    <CategoriesPreviewContainer>
      {
        isLoading ? <Spinner /> : (
          Object.keys(categoriesArray).map(title => {
            const productArray = categoriesArray[title]
            return <CategoryPreview key={title} productArray={productArray} title={title} />
          })
        )
      }
    </CategoriesPreviewContainer>
  )
}

export default CategoriesPreview