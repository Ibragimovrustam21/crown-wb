import SignUp from '../SignUp'
import SignIn from '../SignIn'

import { AuthenticationContainer } from './authentication.styles'

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  )
}

export default Authentication
