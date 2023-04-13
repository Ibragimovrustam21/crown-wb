import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { Route, Routes } from "react-router-dom"
import Authentication from "./routes/Authentication"
import Checkout from "./routes/Checkout"
import Home from "./routes/Home"
import Navigation from "./routes/Navigation"
import Shop from "./routes/Shop"
import { checkUserSession } from './store/User/UserAction'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App