import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import CartDropdown from '../../components/CartDropdown/CartDropdown'
import CartIcon from '../../components/CartIcon/CartIcon';

import { selectIsCartOpen } from '../../store/Cart/cart-selector';
import { signOutStart } from '../../store/User/UserAction';

import { ReactComponent as CrwnLogo } from '../../assets/crwn.svg';
import { LogoContainer, NavigationStyles, NavLink, NavLinkContainer } from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  const dispatch = useDispatch()

  const signOutHandler = () => dispatch(signOutStart())
  return (
    <>
      <NavigationStyles>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>
            )
              : (
                <NavLink to='/auth'>
                  SIGN IN
                </NavLink>
              )
          }
          <CartIcon />
        </NavLinkContainer>
        {
          isCartOpen && <CartDropdown />
        }
      </NavigationStyles>
      <Outlet />
    </>
  );
};

export default Navigation;