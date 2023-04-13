import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Category } from '../../components/Category/Category'
import { fetchingCategoriesStart } from '../../store/Categories/CategoriesAction'
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview'


const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // bu yerda dispatchga async func yuborilayabti agar biz thunkni install qilmasak app error beradi
    dispatch(fetchingCategoriesStart())
    // action har doim object bulishi kerak ekan
  }, [dispatch])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop